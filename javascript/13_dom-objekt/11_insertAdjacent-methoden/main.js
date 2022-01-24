"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein-listenelement");

let a = document.createElement("a");
a.setAttribute("id", "mein-ankerelement");
a.setAttribute("href", "#");

let text = document.createTextNode("Element");

a.appendChild(text);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul");
liste.appendChild(li);