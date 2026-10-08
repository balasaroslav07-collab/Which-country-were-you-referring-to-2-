const releaseDate = new Date("2027-01-18T00:00:00");

function updateCountdown(){

    const now = new Date();

    const diff = releaseDate - now;

    if(diff <= 0){

        document.getElementById("countdown").innerHTML =
        "🎉 Оновлення вже доступне!";

        return;

    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} днів ${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

}

updateCountdown();

setInterval(updateCountdown,1000);
