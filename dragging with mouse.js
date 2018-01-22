
window.onmousemove = moveElem;
window.onmouseup = stopMovingElem;
window.onload = init;
var selected = null; // element to be moved
var oldMouseX, oldMouseY; // Stores x & y coordinates of the mouse pointer
var elemX, elemY;
function init() {
    document.querySelector('.draggable').onmousedown = function (evt) {
        dragInit(evt);
    };
}

