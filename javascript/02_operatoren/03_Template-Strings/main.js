"use strict";

// `Apostroph`; 

let vorname = "Christoph";
let nachname = "Zeller";
let alter = 24;

let name = vorname + " " + nachname;
console.log(name);

let begruessung = `Hallo ${name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

let mehrzeiliger_template_string = `Hallo ${name}!
Du bist ${alter} Jahre alt.
Wie geht es dir?`;
console.log(mehrzeiliger_template_string);

let konkatinierte_template_string = `Hallo ${name}! ` + 
`Du bist ${alter} Jahre alt. ` + 
`Wie geht es dir?`;
console.log(konkatinierte_template_string);

