
function changePageBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    // get the output div
    var output = document.querySelector('#chosenColor');
    // display the value selected in the span
    output.innerHTML = "Color selected: " + color;
}