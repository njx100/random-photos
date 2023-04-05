const btnEl = document.querySelector(".btn");
const imageContainerEl = document.querySelector(".image-container");

function addNewImages() {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEl.appendChild(newImgEl);
};

function addSixImages() {
for (let index = 0; index < 6; index++) {
    addNewImages();  
};
};
addSixImages();

btnEl.addEventListener("click", addSixImages);