const BPS = 3
var BLINKER;

var blinkInterval;

var currentMorse;
var currentIndex = 0;
var currentTick = 0;

function blinkTick() {
    if (currentIndex >= currentMorse.length) {
        currentTick = 0;
        currentIndex = 0;
        clearInterval(blinkInterval);
        return;
    }

    let character = "" + currentMorse.charAt(currentIndex);
    var length = LENGTHS[character];

    if (currentTick >= length) {
        toggle(false);
        currentTick = 0;
        currentIndex++;
    } else {
        toggle(character == "." || character == "-");
        currentTick++;
    }    
}

function toggle(isOn) {
    if (isOn) {
        BLINKER.style.backgroundColor = "red";
    } else {
        BLINKER.style.backgroundColor = "black";
    }
}

function blink(text) {
    BLINKER = document.getElementById("blinker");
    currentMorse = encode(text);
    
    clearInterval(blinkInterval)
    blinkInterval = window.setInterval(blinkTick, 1000 / BPS);
}

function start() {
    blink(document.getElementById("input").value);
}

function pause() {
    clearInterval(blinkInterval);
}

function unPause() {
    pause();
    if (currentTick == 0 && currentIndex == 0) {
        start();
    } else {
        blinkInterval = window.setInterval(blinkTick, 1000 / BPS);
    }
}