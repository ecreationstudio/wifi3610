"use strict";

let d = new Date();
console.log(d);

console.log(Date.now());

let e = new Date(1469168082927);
console.log(e);

let f = new Date("Sep 23 2003 07:52:22 GMT+0200");
console.log(f);

// new Date(jahr, monats-index[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]])
let g = new Date(2012, 5, 23, 15, 15, 15, 155);
console.log(g);