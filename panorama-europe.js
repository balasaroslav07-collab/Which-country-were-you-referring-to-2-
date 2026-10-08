const panoramas = [
    {
        src: "https://www.google.com/maps/embed?pb=!4v1786104411406!6m8!1m7!1snzWZPRGkoOFHSNdP9Iwquw!2m2!1d49.79710491119779!2d30.11929971925178!3f293.986220352453!4f0.49655870447753614!5f0.7820865974627469",
        country: "Ukraine"
    },
    {
        src: "https://www.google.com/maps/embed?pb=!4v1786104444236!6m8!1m7!1s3-c1MnYT76lqp-W6TfLgow!2m2!1d50.04258066382154!2d36.22269140730702!3f226.79520443558673!4f13.392804701836553!5f0.7820865974627469",
        country: "Ukraine"
    },
    {
        src: "https://www.google.com/maps/embed?pb=!4v1786104477208!6m8!1m7!1sSto_bbhsHFN8K1VV-V2RZg!2m2!1d50.0413061901491!2d22.67700190793289!3f232.8901332985138!4f1.1828140557529423!5f0.7820865974627469",
        country: "Poland"
    },
    {
        src: "https://www.google.com/maps/embed?pb=!4v1786104525962!6m8!1m7!1s3fz6n0jxjcxYB_YK5WnKxw!2m2!1d44.72205580825068!2d18.20983343241994!3f312.5353289249571!4f-5.100366509049266!5f0.7820865974627469",
        country: "Bosnia and Herzegovina."
    },
    {
        src: "https://www.google.com/maps/embed?pb=!4v1786104571853!6m8!1m7!1s_uBRSvggwpHmFbTDw_zjuQ!2m2!1d53.21002176624776!2d6.556507337425193!3f283.5941117036069!4f-2.8147465130354874!5f1.4972584850697883",
        country: "Netherlands"
    },
    {
        src: "https://www.google.com/maps/embed?pb=!4v1786104603206!6m8!1m7!1sLeuDVDmDGiF6AKXjOYBD5w!2m2!1d47.14784240639701!2d9.52296635722888!3f263.34568124987345!4f-8.037692500809001!5f0.7820865974627469",
        country: "Liechtenstein"
    }
];

const BANNED_COUNTRIES = ["russia", "belarus"];

let currentPanorama = null;
let worldGeoJSON = null;
let marker = null;
let guessLatLng = null;

const map = L.map('map', { worldCopyJump: true }).setView([50, 15], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

map.on('click', (e) => {

    guessLatLng = e.latlng;

    if (marker) {
        marker.setLatLng(guessLatLng);
    } else {
        marker = L.marker(guessLatLng).addTo(map);
    }

    document.getElementById('guessBtn').disabled = false;

});

fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
    .then(r => r.json())
    .then(data => {
        worldGeoJSON = data;
    })
    .catch(err => {
        console.error("Не вдалося завантажити геодані країн:", err);
    });

function normalizeName(name) {
    return name.toLowerCase().replace(/\./g, "").trim();
}

function findCountryAtPoint(latlng) {

    if (!worldGeoJSON) return null;

    const pt = turf.point([latlng.lng, latlng.lat]);

    for (const feature of worldGeoJSON.features) {

        try {
            if (turf.booleanPointInPolygon(pt, feature)) {
                return feature.properties.ADMIN || feature.properties.NAME || feature.properties.name;
            }
        } catch (e) {
            // деякі геометрії можуть кидати помилку - пропускаємо
        }

    }

    return null;

}

function loadRandomPanorama() {

    const pool = panoramas.filter(p => !BANNED_COUNTRIES.includes(normalizeName(p.country)));

    currentPanorama = pool[Math.floor(Math.random() * pool.length)];

    document.getElementById('panoramaFrame').innerHTML = `
        <iframe src="${currentPanorama.src}" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    `;

    if (marker) {
        map.removeLayer(marker);
        marker = null;
    }
    guessLatLng = null;

    document.getElementById('guessBtn').disabled = true;
    document.getElementById('guessBtn').textContent = "Перевірити здогадку";

    const statusBox = document.getElementById('statusBox');
    statusBox.style.display = "none";
    statusBox.className = "status";

}

function handleGuess() {

    if (!guessLatLng) return;

    const statusBox = document.getElementById('statusBox');

    if (!worldGeoJSON) {
        statusBox.style.display = "block";
        statusBox.className = "status wrong";
        statusBox.textContent = "⏳ Геодані ще завантажуються, спробуй за секунду";
        return;
    }

    const guessedCountry = findCountryAtPoint(guessLatLng);

    const isCorrect = guessedCountry &&
        normalizeName(guessedCountry) === normalizeName(currentPanorama.country);

    statusBox.style.display = "block";

    if (isCorrect) {
        statusBox.className = "status correct";
        statusBox.textContent = "🟢 Правильно! Це " + currentPanorama.country;
    } else {
        statusBox.className = "status wrong";
        statusBox.textContent = "🔴 Неправильно! Правильна відповідь: " + currentPanorama.country +
            (guessedCountry ? " (ти обрав: " + guessedCountry + ")" : "");
    }

    document.getElementById('guessBtn').disabled = true;

}

document.getElementById('guessBtn').addEventListener('click', handleGuess);
document.getElementById('nextBtn').addEventListener('click', loadRandomPanorama);

loadRandomPanorama();
