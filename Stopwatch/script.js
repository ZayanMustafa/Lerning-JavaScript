var timer;
var isRunning = false;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 10); // Update every 10 milliseconds
        isRunning = true;
        document.getElementById("startStop").textContent = "Stop";
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
}

function updateDisplay() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    const display = document.getElementById("display");
    display.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + "." + padMilliseconds(milliseconds);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}

function padMilliseconds(value) {
    if (value < 10) {
        return "00" + value;
    } else if (value < 100) {
        return "0" + value;
    } else {
        return value;
    }
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
