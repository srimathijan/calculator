const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = ""
}
function calculateResult() {

    display.value = eval(display.value);
}
function clearLastElement() {
    display.value = display.value.slice(0, -1);
}