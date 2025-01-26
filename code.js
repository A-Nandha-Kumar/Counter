let counterElement = document.getElementById("counterValue");
let counterElementColor = document.getElementById("counterValue").style.color = "black";
console.log(counterElementColor)

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let currentCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = currentCounterValue;
    if (currentCounterValue > 0) {
        document.getElementById("counterValue").style.color = "red";
    } else if (currentCounterValue < 0) {
        document.getElementById("counterValue").style.color = "green";
    } else {
        document.getElementById("counterValue").style.color = "black";
    }
}

function onReset() {
    let previousCounterValue = counterElement.textContent;
    let currentCounterValue = 0;
    counterElement.textContent = currentCounterValue;
    document.getElementById("counterValue").style.color = "black";
}

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let currentCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = currentCounterValue;
    if (currentCounterValue > 0) {
        document.getElementById("counterValue").style.color = "red";
    } else if (currentCounterValue < 0) {
        document.getElementById("counterValue").style.color = "green";
    } else {
        document.getElementById("counterValue").style.color = "black";
    }
}
