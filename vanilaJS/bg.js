const body = document.querySelector('body');
const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log('finished load');
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}
function genRandom() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}
function init() {
    const random = genRandom();
    paintImage(random);
}

init();