
function doSomething(evt) {
    // this is the slider value
    var val = evt.target.value;

    // get the output span
    var output = document.querySelector('#sliderValue');
    // display the value typed in the span
    output.innerHTML = "Value selected: " + val;
}