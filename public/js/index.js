const primary = document.querySelector(".primary");
const defaultSRC = primary.getAttribute("src");

const images = document.querySelector("img:not(.primary)");
for (const image of images) {
    image.addEventListener('click', () => {
        primary.setAttribute("src", image.src);
    })
}