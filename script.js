const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = ""
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "error";
    }
}
    function clearLastElement() {
        display.value = display.value.slice(0, -1);


    }