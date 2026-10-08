const countries = [

{
    name: "Австралія",
    continent: "Океанія",
    capital: "Канберра",
    area: 7692024,
    population: 26000000,
    currency: "Австралійський долар",
    language: "Англійська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Папуа Нова Гвінея",
    continent: "Океанія",
    capital: "Порт-Морсбі",
    area: 462840,
    population: 10000000,
    currency: "Кіна",
    language: "Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 1,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Нова Зеландія",
    continent: "Океанія",
    capital: "Веллінгтон",
    area: 268021,
    population: 5200000,
    currency: "Новозеландський долар",
    language: "Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Фіджі",
    continent: "Океанія",
    capital: "Сува",
    area: 18274,
    population: 930000,
    currency: "Фіджійський долар",
    language: "Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Соломонові Острови",
    continent: "Океанія",
    capital: "Хоніара",
    area: 28896,
    population: 740000,
    currency: "Долар Соломонових Островів",
    language: "Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Вануату",
    continent: "Океанія",
    capital: "Порт-Віла",
    area: 12189,
    population: 320000,
    currency: "Вату",
    language: "Англійська, Французька, Біслама",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Самоа",
    continent: "Океанія",
    capital: "Апіа",
    area: 2842,
    population: 220000,
    currency: "Тала",
    language: "Самоанська, Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Кірибаті",
    continent: "Океанія",
    capital: "Тарава",
    area: 811,
    population: 133000,
    currency: "Австралійський долар",
    language: "Англійська, Кірибатська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Тонга",
    continent: "Океанія",
    capital: "Нукуалофа",
    area: 747,
    population: 107000,
    currency: "Паанга",
    language: "Тонганська, Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Мікронезія",
    continent: "Океанія",
    capital: "Паликир",
    area: 702,
    population: 113000,
    currency: "Долар США",
    language: "Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Маршаллові Острови",
    continent: "Океанія",
    capital: "Маджуро",
    area: 181,
    population: 42000,
    currency: "Долар США",
    language: "Маршальська, Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Палау",
    continent: "Океанія",
    capital: "Нгерулмуд",
    area: 459,
    population: 18000,
    currency: "Долар США",
    language: "Палауська, Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Науру",
    continent: "Океанія",
    capital: "Ярен",
    area: 21,
    population: 12000,
    currency: "Австралійський долар",
    language: "Науруанська, Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Тувалу",
    continent: "Океанія",
    capital: "Фунафуті",
    area: 26,
    population: 11000,
    currency: "Австралійський долар",
    language: "Тувалійська, Англійська",
    sea: true,
    island: true,
    peninsula: false,
    neighbors: 0,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
}

];

let currentCountry = null;
let questionNumber = 1;
const MAX_QUESTIONS = 8;

function getRandomCountry() {

    const randomIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIndex];

    return currentCountry;

}

function startGame() {

    getRandomCountry();

    console.log("Загадана країна:", currentCountry);

    document.getElementById("questions").innerHTML = "";
    questionNumber = 1;

    renderQuestionInput(questionNumber);

}

// Список фіксованих "класів" питань — кожен напряму відповідає
// конкретному полю об'єкта країни, без розпізнавання тексту
const QUESTION_CLASSES = [
    { value: "sea",        label: "Є вихід до моря" },
    { value: "not_sea",    label: "Немає виходу до моря" },
    { value: "ocean",      label: "Є вихід до океану" },
    { value: "not_ocean",  label: "Немає виходу до океану" },
    { value: "island",     label: "Це острівна країна" },
    { value: "not_island", label: "Це не острівна країна" },
    { value: "peninsula",     label: "Це півострівна країна" },
    { value: "not_peninsula", label: "Це континентальна країна" },
    { value: "nato",       label: "Країна в НАТО" },
    { value: "not_nato",   label: "Країна не в НАТО" },
    { value: "eu",         label: "Країна в ЄС" },
    { value: "not_eu",     label: "Країна не в ЄС" },
    { value: "un",         label: "Країна в ООН" },
    { value: "not_un",     label: "Країна не в ООН" },
    { value: "north",      label: "Північна півкуля" },
    { value: "south",      label: "Південна півкуля" },
    { value: "capital",    label: "Столиця саме така:" },
    { value: "neighbors",  label: "Кількість сусідів дорівнює:" },
    { value: "area_more",  label: "Площа більше, км²:" },
    { value: "population_more", label: "Населення більше:" }
];

// Класи, яким потрібне додаткове поле вводу
const NEEDS_EXTRA = {
    capital: { type: "text", placeholder: "Назва столиці" },
    neighbors: { type: "number", placeholder: "Число" },
    area_more: { type: "number", placeholder: "Площа, км²" },
    population_more: { type: "number", placeholder: "Населення" }
};

function checkQuestionClass(qClass, extraValue){

    switch(qClass){

        case "sea": return currentCountry.sea;
        case "not_sea": return !currentCountry.sea;

        case "ocean": return currentCountry.ocean;
        case "not_ocean": return !currentCountry.ocean;

        case "island": return currentCountry.island;
        case "not_island": return !currentCountry.island;

        case "peninsula": return currentCountry.peninsula;
        case "not_peninsula": return !currentCountry.peninsula;

        case "nato": return currentCountry.nato;
        case "not_nato": return !currentCountry.nato;

        case "eu": return currentCountry.eu;
        case "not_eu": return !currentCountry.eu;

        case "un": return currentCountry.un;
        case "not_un": return !currentCountry.un;

        case "north": return currentCountry.hemisphere === "Північна";
        case "south": return currentCountry.hemisphere === "Південна";

        case "capital":
            return currentCountry.capital.trim().toLowerCase() === extraValue.trim().toLowerCase();

        case "neighbors": {
            const number = parseInt(extraValue);
            return !isNaN(number) && currentCountry.neighbors === number;
        }

        case "area_more": {
            const number = parseInt(extraValue);
            return !isNaN(number) && currentCountry.area > number;
        }

        case "population_more": {
            const number = parseInt(extraValue);
            return !isNaN(number) && currentCountry.population > number;
        }

        default:
            return false;

    }

}

function checkAnswer(playerAnswer){

    return playerAnswer.trim().toLowerCase() === currentCountry.name.toLowerCase();

}

function renderQuestionInput(number){

    const wrap = document.createElement("div");
    wrap.className = "question";
    wrap.id = "q" + number;

    const options = QUESTION_CLASSES
        .map(q => `<option value="${q.value}">${q.label}</option>`)
        .join("");

    wrap.innerHTML = `
        <h2>Питання №${number}</h2>
        <select class="qselect">
            <option value="">— оберіть питання —</option>
            ${options}
        </select>
        <input type="text" class="extra-input" style="display:none;margin-top:12px;">
        <button>Відповісти</button>
    `;

    document.getElementById("questions").appendChild(wrap);

    const select = wrap.querySelector(".qselect");
    const extraInput = wrap.querySelector(".extra-input");
    const button = wrap.querySelector("button");

    select.addEventListener("change", () => {

        const extra = NEEDS_EXTRA[select.value];

        if(extra){
            extraInput.style.display = "block";
            extraInput.type = extra.type;
            extraInput.placeholder = extra.placeholder;
            extraInput.value = "";
        }
        else{
            extraInput.style.display = "none";
            extraInput.value = "";
        }

    });

    button.addEventListener("click", () => handleQuestionAnswer(select, extraInput, button));

}

function handleQuestionAnswer(select, extraInput, button){

    if(select.disabled) return;

    const qClass = select.value;

    if(!qClass) return; // нічого не обрано — не рахуємо це відповіддю

    if(NEEDS_EXTRA[qClass] && extraInput.value.trim() === "") return; // потрібне число/текст

    const result = checkQuestionClass(qClass, extraInput.value);

    select.disabled = true;
    extraInput.disabled = true;
    button.disabled = true;

    select.classList.add(result ? "correct-input" : "wrong-input");

    if(questionNumber < MAX_QUESTIONS){

        questionNumber++;
        renderQuestionInput(questionNumber);

    }
    else{

        renderFinalAnswerInput();

    }

}

function renderFinalAnswerInput(){

    const wrap = document.createElement("div");

    wrap.className = "question";
    wrap.id = "final";

    wrap.innerHTML = `
        <h2 class="final-title">🌏 Фінальна відповідь</h2>

        <input
            type="text"
            placeholder="Введіть назву країни">

        <button>Відповісти</button>

        <div class="result-text"></div>
    `;

    document.getElementById("questions").appendChild(wrap);

    const input = wrap.querySelector("input");
    const button = wrap.querySelector("button");
    const resultText = wrap.querySelector(".result-text");

    function submit(){

        if(input.disabled) return;

        const result = checkAnswer(input.value);

        input.disabled = true;
        button.disabled = true;

        if(result){

            input.classList.add("correct-input");

            resultText.innerHTML =
            "🟢 Правильно!<br><br>Ти відгадав країну <b>" +
            currentCountry.name +
            "</b>.";

        }
        else{

            input.classList.add("wrong-input");

            resultText.innerHTML =
            "🔴 Неправильно!<br><br>" +
            "<b>Правильна відповідь:</b> " +
            currentCountry.name;

        }

    }

    button.addEventListener("click", submit);

    input.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            submit();

        }

    });

}

window.addEventListener("DOMContentLoaded", startGame);
