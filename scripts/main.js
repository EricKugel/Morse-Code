const BPS = 2
var BLINKER;

var blinkInterval;

var currentMorse;
var currentIndex;
var currentTick;

function blinkTick() {
    if (currentIndex >= currentMorse.length) {
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
    currentIndex = 0;
    currentTick = 0;
    
    blinkInterval = window.setInterval(blinkTick, 1000 / BPS);
}

function start() {
    blink("SOS");
}