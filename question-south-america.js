const countries = [

{
    name: "Аргентина",
    continent: "Південна Америка",
    capital: "Буенос-Айрес",
    area: 2780400,
    population: 46000000,
    currency: "Аргентинське песо",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 5,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Болівія",
    continent: "Південна Америка",
    capital: "Сукре",
    area: 1098581,
    population: 12000000,
    currency: "Болівіано",
    language: "Іспанська",
    sea: false,
    island: false,
    peninsula: false,
    neighbors: 5,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: false
},

{
    name: "Бразилія",
    continent: "Південна Америка",
    capital: "Бразиліа",
    area: 8515767,
    population: 216000000,
    currency: "Бразильський реал",
    language: "Португальська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 10,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Чилі",
    continent: "Південна Америка",
    capital: "Сантьяго",
    area: 756102,
    population: 19600000,
    currency: "Чилійське песо",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 3,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Колумбія",
    continent: "Південна Америка",
    capital: "Богота",
    area: 1141748,
    population: 52000000,
    currency: "Колумбійське песо",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 5,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Еквадор",
    continent: "Південна Америка",
    capital: "Кіто",
    area: 283561,
    population: 18000000,
    currency: "Долар США",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 2,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Гаяна",
    continent: "Південна Америка",
    capital: "Джорджтаун",
    area: 214969,
    population: 810000,
    currency: "Гаянський долар",
    language: "Англійська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 3,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Парагвай",
    continent: "Південна Америка",
    capital: "Асунсьйон",
    area: 406752,
    population: 6900000,
    currency: "Гуарані",
    language: "Іспанська, Гуарані",
    sea: false,
    island: false,
    peninsula: false,
    neighbors: 3,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: false
},

{
    name: "Перу",
    continent: "Південна Америка",
    capital: "Ліма",
    area: 1285216,
    population: 34000000,
    currency: "Соль",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 5,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Суринам",
    continent: "Південна Америка",
    capital: "Парамарибо",
    area: 163820,
    population: 618000,
    currency: "Суринамський долар",
    language: "Нідерландська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 3,
    hemisphere: "Північна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Уругвай",
    continent: "Південна Америка",
    capital: "Монтевідео",
    area: 176215,
    population: 3400000,
    currency: "Уругвайське песо",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 2,
    hemisphere: "Південна",
    un: true,
    nato: false,
    eu: false,
    ocean: true
},

{
    name: "Венесуела",
    continent: "Південна Америка",
    capital: "Каракас",
    area: 916445,
    population: 28000000,
    currency: "Болівар",
    language: "Іспанська",
    sea: true,
    island: false,
    peninsula: false,
    neighbors: 3,
    hemisphere: "Північна",
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
        <h2 class="final-title">🌎 Фінальна відповідь</h2>

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
