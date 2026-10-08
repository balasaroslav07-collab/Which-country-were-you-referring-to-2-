function openMenu() {
    document.getElementById("continentMenu").style.display = "flex";
}

function closeMenu() {
    document.getElementById("continentMenu").style.display = "none";
}

function startGame(continent) {
    switch (continent) {
        case "Europe":
            window.location.href = "question-europe.html";
            break;

        case "Asia":
            window.location.href = "question-asia.html";
            break;

        case "Africa":
            window.location.href = "question-africa.html";
            break;

        case "NorthAmerica":
            window.location.href = "question-north-america.html";
            break;

        case "SouthAmerica":
            window.location.href = "question-south-america.html";
            break;

        case "Oceania":
            window.location.href = "question-oceania.html";
            break;

        case "World":
            window.location.href = "question-world.html";
            break;
    }
}
