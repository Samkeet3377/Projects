function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function display(value) {
    document.getElementById("result").value += value;
    // calculate();
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}