const countries = [

{ name: "Албанія", continent: "Європа", capital: "Тирана", area: 28748, population: 2402000, currency: "Лек", language: "Албанська", sea: true, island: false, peninsula: true, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: false },
{ name: "Андорра", continent: "Європа", capital: "Андорра-ла-Велья", area: 468, population: 85000, currency: "Євро", language: "Каталонська", sea: false, island: false, peninsula: false, neighbors: 2, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Австрія", continent: "Європа", capital: "Відень", area: 83879, population: 9200000, currency: "Євро", language: "Німецька", sea: false, island: false, peninsula: false, neighbors: 8, hemisphere: "Північна", un: true, nato: false, eu: true, ocean: false },
{ name: "Бельгія", continent: "Європа", capital: "Брюссель", area: 30528, population: 11800000, currency: "Євро", language: "Нідерландська, Французька, Німецька", sea: true, island: false, peninsula: false, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: true },
{ name: "Боснія і Герцеговина", continent: "Європа", capital: "Сараєво", area: 51197, population: 3200000, currency: "Конвертована марка", language: "Боснійська, Сербська, Хорватська", sea: true, island: false, peninsula: true, neighbors: 3, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Болгарія", continent: "Європа", capital: "Софія", area: 110994, population: 6440000, currency: "Болгарський лев", language: "Болгарська", sea: true, island: false, peninsula: true, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Ватикан", continent: "Європа", capital: "Ватикан", area: 0.49, population: 882, currency: "Євро", language: "Італійська, Латина", sea: false, island: false, peninsula: false, neighbors: 1, hemisphere: "Північна", un: false, nato: false, eu: false, ocean: false },
{ name: "Велика Британія", continent: "Європа", capital: "Лондон", area: 243610, population: 69000000, currency: "Фунт стерлінгів", language: "Англійська", sea: true, island: true, peninsula: false, neighbors: 1, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: true },
{ name: "Греція", continent: "Європа", capital: "Афіни", area: 131957, population: 10300000, currency: "Євро", language: "Грецька", sea: true, island: false, peninsula: true, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Данія", continent: "Європа", capital: "Копенгаген", area: 42933, population: 6000000, currency: "Данська крона", language: "Данська", sea: true, island: false, peninsula: true, neighbors: 1, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: true },
{ name: "Естонія", continent: "Європа", capital: "Таллінн", area: 45339, population: 1370000, currency: "Євро", language: "Естонська", sea: true, island: false, peninsula: false, neighbors: 2, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Ірландія", continent: "Європа", capital: "Дублін", area: 70273, population: 5300000, currency: "Євро", language: "Ірландська, Англійська", sea: true, island: true, peninsula: false, neighbors: 1, hemisphere: "Північна", un: true, nato: false, eu: true, ocean: true },
{ name: "Ісландія", continent: "Європа", capital: "Рейк'явік", area: 103000, population: 398000, currency: "Ісландська крона", language: "Ісландська", sea: true, island: true, peninsula: false, neighbors: 0, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: true },
{ name: "Іспанія", continent: "Європа", capital: "Мадрид", area: 505990, population: 49000000, currency: "Євро", language: "Іспанська", sea: true, island: false, peninsula: true, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: true },
{ name: "Італія", continent: "Європа", capital: "Рим", area: 301340, population: 58900000, currency: "Євро", language: "Італійська", sea: true, island: false, peninsula: true, neighbors: 6, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Латвія", continent: "Європа", capital: "Рига", area: 64589, population: 1870000, currency: "Євро", language: "Латиська", sea: true, island: false, peninsula: false, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Литва", continent: "Європа", capital: "Вільнюс", area: 65300, population: 2890000, currency: "Євро", language: "Литовська", sea: true, island: false, peninsula: false, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Ліхтенштейн", continent: "Європа", capital: "Вадуц", area: 160, population: 40000, currency: "Швейцарський франк", language: "Німецька", sea: false, island: false, peninsula: false, neighbors: 2, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Люксембург", continent: "Європа", capital: "Люксембург", area: 2586, population: 680000, currency: "Євро", language: "Люксембурзька, Французька, Німецька", sea: false, island: false, peninsula: false, neighbors: 3, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Мальта", continent: "Європа", capital: "Валлетта", area: 316, population: 570000, currency: "Євро", language: "Мальтійська, Англійська", sea: true, island: true, peninsula: false, neighbors: 0, hemisphere: "Північна", un: true, nato: false, eu: true, ocean: false },
{ name: "Молдова", continent: "Європа", capital: "Кишинів", area: 33846, population: 2510000, currency: "Молдовський лей", language: "Румунська", sea: false, island: false, peninsula: false, neighbors: 2, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Монако", continent: "Європа", capital: "Монако", area: 2.08, population: 39000, currency: "Євро", language: "Французька", sea: true, island: false, peninsula: false, neighbors: 1, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Нідерланди", continent: "Європа", capital: "Амстердам", area: 41850, population: 18000000, currency: "Євро", language: "Нідерландська", sea: true, island: false, peninsula: false, neighbors: 2, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: true },
{ name: "Німеччина", continent: "Європа", capital: "Берлін", area: 357588, population: 84500000, currency: "Євро", language: "Німецька", sea: true, island: false, peninsula: false, neighbors: 9, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Норвегія", continent: "Європа", capital: "Осло", area: 385207, population: 5600000, currency: "Норвезька крона", language: "Норвезька", sea: true, island: false, peninsula: true, neighbors: 3, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: true },
{ name: "Північна Македонія", continent: "Європа", capital: "Скоп'є", area: 25713, population: 1830000, currency: "Македонський денар", language: "Македонська", sea: false, island: false, peninsula: true, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: false },
{ name: "Польща", continent: "Європа", capital: "Варшава", area: 312696, population: 37600000, currency: "Польський злотий", language: "Польська", sea: true, island: false, peninsula: false, neighbors: 7, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Португалія", continent: "Європа", capital: "Лісабон", area: 92212, population: 10600000, currency: "Євро", language: "Португальська", sea: true, island: false, peninsula: true, neighbors: 1, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: true },
{ name: "Румунія", continent: "Європа", capital: "Бухарест", area: 238397, population: 19000000, currency: "Румунський лей", language: "Румунська", sea: true, island: false, peninsula: false, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Сан-Марино", continent: "Європа", capital: "Сан-Марино", area: 61, population: 34000, currency: "Євро", language: "Італійська", sea: false, island: false, peninsula: false, neighbors: 1, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Сербія", continent: "Європа", capital: "Белград", area: 88361, population: 6600000, currency: "Сербський динар", language: "Сербська", sea: false, island: false, peninsula: true, neighbors: 8, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Словаччина", continent: "Європа", capital: "Братислава", area: 49035, population: 5400000, currency: "Євро", language: "Словацька", sea: false, island: false, peninsula: false, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Словенія", continent: "Європа", capital: "Любляна", area: 20273, population: 2120000, currency: "Євро", language: "Словенська", sea: true, island: false, peninsula: true, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Туреччина", continent: "Європа", capital: "Анкара", area: 783562, population: 85700000, currency: "Турецька ліра", language: "Турецька", sea: true, island: false, peninsula: true, neighbors: 8, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: false },
{ name: "Україна", continent: "Європа", capital: "Київ", area: 603628, population: 32000000, currency: "Гривня", language: "Українська", sea: true, island: false, peninsula: false, neighbors: 7, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Угорщина", continent: "Європа", capital: "Будапешт", area: 93028, population: 9600000, currency: "Форинт", language: "Угорська", sea: false, island: false, peninsula: false, neighbors: 7, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Фінляндія", continent: "Європа", capital: "Гельсінкі", area: 338455, population: 5600000, currency: "Євро", language: "Фінська, Шведська", sea: true, island: false, peninsula: false, neighbors: 3, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Франція", continent: "Європа", capital: "Париж", area: 551695, population: 68500000, currency: "Євро", language: "Французька", sea: true, island: false, peninsula: false, neighbors: 8, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: true },
{ name: "Хорватія", continent: "Європа", capital: "Загреб", area: 56594, population: 3900000, currency: "Євро", language: "Хорватська", sea: true, island: false, peninsula: true, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Чорногорія", continent: "Європа", capital: "Подгориця", area: 13812, population: 617000, currency: "Євро", language: "Чорногорська", sea: true, island: false, peninsula: true, neighbors: 5, hemisphere: "Північна", un: true, nato: true, eu: false, ocean: false },
{ name: "Чехія", continent: "Європа", capital: "Прага", area: 78871, population: 10900000, currency: "Чеська крона", language: "Чеська", sea: false, island: false, peninsula: false, neighbors: 4, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false },
{ name: "Швейцарія", continent: "Європа", capital: "Берн", area: 41285, population: 9000000, currency: "Швейцарський франк", language: "Німецька, Французька, Італійська, Ретороманська", sea: false, island: false, peninsula: false, neighbors: 5, hemisphere: "Північна", un: true, nato: false, eu: false, ocean: false },
{ name: "Швеція", continent: "Європа", capital: "Стокгольм", area: 450295, population: 10600000, currency: "Шведська крона", language: "Шведська", sea: true, island: false, peninsula: true, neighbors: 2, hemisphere: "Північна", un: true, nato: true, eu: true, ocean: false }

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


function checkAnswer(playerAnswer) {
    return playerAnswer.trim().toLowerCase() === currentCountry.name.toLowerCase();
}

function renderQuestionInput(number) {

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

function handleQuestionAnswer(select, extraInput, button) {

    if (select.disabled) return;

    const qClass = select.value;

    if(!qClass) return; 

    if(NEEDS_EXTRA[qClass] && extraInput.value.trim() === "") return; 

    const result = checkQuestionClass(qClass, extraInput.value);

    select.disabled = true;
    extraInput.disabled = true;
    button.disabled = true;

    select.classList.add(result ? "correct-input" : "wrong-input");

    if (questionNumber < MAX_QUESTIONS) {
        questionNumber++;
        renderQuestionInput(questionNumber);
    } else {
        renderFinalAnswerInput();
    }

}

function renderFinalAnswerInput() {

    const wrap = document.createElement("div");
    wrap.className = "question";
    wrap.id = "final";

    wrap.innerHTML = `
        <h2 class="final-title">🌍 Фінальна відповідь</h2>
        <input type="text" placeholder="Введіть назву країни">
        <button>Відповісти</button>
        <div class="result-text"></div>
    `;

    document.getElementById("questions").appendChild(wrap);

    const input = wrap.querySelector("input");
    const button = wrap.querySelector("button");
    const resultText = wrap.querySelector(".result-text");

    const submit = () => {

        if (input.disabled) return;

        const isCorrect = checkAnswer(input.value);

        input.disabled = true;
        button.disabled = true;

        input.classList.add(isCorrect ? "correct-input" : "wrong-input");

        resultText.textContent = isCorrect
            ? "🟢 Правильно!"
            : "🔴 Неправильно! Правильна відповідь: " + currentCountry.name;

    };

    button.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") submit();
    });

}

window.addEventListener("DOMContentLoaded", startGame);
