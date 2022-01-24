"use strict";

/*
const meine_funktion = function(parameter_1, parameter_2) {
    // auszuführender Code
}

meine_funktion(p_1, p_2);
*/

const log_die_zahl = function(a) {
    console.log(a);
};

log_die_zahl(12);

const begruessung = function(vorname, nachname) {
    console.log(`Hallo ${vorname} ${nachname}`);
};

begruessung("Max", "Muster");

let vorname = "Chrisotph";
let nachname = "Zeller";

begruessung(vorname, nachname)


// Aufgabe -> Funktion schreiben mit 2 Parameter
// in der Funktion 4 Grundrechnungsarten und 1 Modulo
// 5 Variablen definieren
// 4 max funktion aufrufen mit jeweils verschiedenen variablen...

const my_function = function(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}

let a = 5;
let b = 7;
let c = 3;
let d = 4;
let e = 5;

my_function(a,b);
my_function(c,d);
my_function(e,a);
my_function(b,c);
