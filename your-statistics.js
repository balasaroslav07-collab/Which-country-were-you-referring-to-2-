// your-statistics.js — лічильник переглядів сторінки "Своя статистика"
// та прогресивна зміна зображення-маскота залежно від кількості візитів.

let opens = Number(localStorage.getItem("statisticsVisits")) || 0;
opens++;
localStorage.setItem("statisticsVisits", opens);

const img = document.getElementById("kitsi");
const text = document.getElementById("text");

if (opens < 50) {
    img.src = "img/mascot-stage-1.png";
} else if (opens < 200) {
    img.src = "img/mascot-stage-2.png";
} else if (opens < 400) {
    img.src = "img/mascot-stage-3.png";
} else {
    img.src = "img/mascot-stage-4.png";
}
