let canvas = document.getElementById("main");



var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

let context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;

setup(context);

function updateGame() {
    draw(context);
    requestAnimationFrame(updateGame);
}

updateGame();

/**
 * @param {number} min
 * @param {number=} max
 */
function random(min, max) {
    if (typeof max == "undefined") {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}
