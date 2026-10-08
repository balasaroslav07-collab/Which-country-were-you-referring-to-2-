// stats.js — спільна логіка для всіх сторінок "Статистика".
// Раніше цей скрипт (і 3 картинки-стани) був продубльований
// в 6 окремих файлах — тепер він один, кешується браузером
// і виконується один раз при завантаженні.

(function(){
    const IMG_STAGE_1 = "img/banner-1.png"; // opens < 50
    const IMG_STAGE_2 = "img/banner-2.png"; // opens < 200
    const IMG_STAGE_3 = "img/banner-3.png"; // opens >= 200

    let opens = Number(localStorage.getItem("statisticsVisits")) || 0;
    opens++;
    localStorage.setItem("statisticsVisits", opens);

    document.addEventListener("DOMContentLoaded", function(){
        const img = document.getElementById("kitsi");
        if(!img) return;

        if(opens < 50){
            img.src = IMG_STAGE_1;
        } else if(opens < 200){
            img.src = IMG_STAGE_2;
        } else {
            img.src = IMG_STAGE_3;
        }
    });
})();
