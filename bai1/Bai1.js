const button = document.getElementById("changeColor");
const change = document.getElementById("container");
button.onclick = function() {
    const arrColor = [`red`, `yellow`, `blue`, `gray`, `orange`]
    const random = arrColor[randomColor(arrColor)];
    change.style.backgroundColor = random;
}

function randomColor(arrColor) {
    return Math.floor(Math.random() * arrColor.length)
}