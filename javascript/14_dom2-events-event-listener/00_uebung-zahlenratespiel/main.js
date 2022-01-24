"use strict";

let inputGuess = document.getElementById("inputGuess");
let outputResult = document.getElementById("outputResult");
let outputCount = document.getElementById("outputCount");
let checkButton = document.getElementById("checkNumber");
let minimum = 0;
let maximum = 100;
let count;

const number = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let zufallszahl = number(minimum, maximum);
count = 0;

checkButton.addEventListener("click", function(e) {
	count = count + 1;
	outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht.";

    let guess = parseInt(inputGuess.value);			
    if (guess < zufallszahl) {
        outputResult.innerHTML  = "Dein Tipp war zu niedrig.";
    }
    else if (guess > zufallszahl) {
        outputResult.innerHTML  = "Dein Tipp war zu hoch.";

    }
    else if (guess == zufallszahl) {
        outputResult.innerHTML  = "Richtig!";		
    }
});
