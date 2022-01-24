"use strict";

let minimum = 0;
let maximum = 100;

const zufallszahl = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let game = zufallszahl(minimum, maximum);
let versuche = 0;

let eingabe = prompt(`Das ist dein ${versuche}. Versuch. Meine Zahl ist höher. Rate noch einmal`);;

while(game != eingabe) {
    console.log(eingabe);
    versuche += 1;
    if(game > eingabe) {
        // eingabe = prompt(`Das ist dein ${versuche}. Versuch. Meine Zahl ist höher. Rate noch einmal`);
    } else if (game < eingabe) {
        // eingabe = prompt(`Das ist dein ${versuche}. Versuch. Meine Zahl ist höher. Rate noch einmal`);
    } else {
        console.log(`Du hast die mit ${versuche} erraten.`);
    }
}

console.log(eingabe);