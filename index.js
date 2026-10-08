const nav = document.querySelector("nav");

let isDown = false;
let startX;
let scrollLeft;

nav.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - nav.offsetLeft;
    scrollLeft = nav.scrollLeft;
});

nav.addEventListener("mouseleave", () => {
    isDown = false;
});

nav.addEventListener("mouseup", () => {
    isDown = false;
});

nav.addEventListener("mousemove", (e) => {
    if(!isDown) return;

    e.preventDefault();

    const x = e.pageX - nav.offsetLeft;
    const walk = (x - startX) * 2;

    nav.scrollLeft = scrollLeft - walk;
});
