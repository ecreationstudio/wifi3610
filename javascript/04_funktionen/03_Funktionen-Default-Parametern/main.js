"use strict";

const multiplizieren = function(a = 20, b = 10) {
    console.log(a);
    console.log(b);
    console.log(a * b);
};

let z_1 = 42;
let z_2 = 20;

multiplizieren(z_1, z_2);


const begruessung = function(vorname = "Max", nachname = "Mustermann", alter = 18) {
    console.log(`Hallo ${vorname} ${nachname}! Du bist ${alter} Jahre alt.`);
};

let vorname = "Christoph";
let nachname = "Zeller";
let alter = 40;

begruessung(vorname, nachname, alter);
begruessung();
begruessung(undefined, nachname, alter);


const sicherheitscheck = function(mindestalter = 16, alter) {
    if(alter >= mindestalter) {
        console.log("Rein mit dir");
    } else {
        console.log("Du kommst hier nischt rein");
    }
}

sicherheitscheck(16, 16);
sicherheitscheck(16, 22);
sicherheitscheck(16, 15);
