const MORSE_CODE = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": "/"
  }

const LENGTHS = {
    ".": 1,
    "-": 3,
    " ": 3,
    "/": 7
}

function decode(morseString) {
    var output = "";
    let morseCharacters = morseString.split(" ");
    for (var i = 0; i < morseCharacters.length; i++) {
        var morseCharacter = morseCharacters[i];
        for (var letter in MORSE_CODE) {
            if (morseCharacter == MORSE_CODE[letter]) {
                output += letter;
                break;
            }
        }
    }  
    return output; 
}

function encode(text) {
    var morseText = "";
    for (var i = 0; i < text.length; i++) {
        let letter = ("" + text.charAt(i)).toLowerCase();
        morseText += MORSE_CODE[letter] + " ";
    }
    return morseText;
}