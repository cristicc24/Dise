"use strict";
let logo = document.getElementById("logo");

let ancho = logo.clientWidth;
let anchoOriginal = ancho;
console.log(ancho);

logo.addEventListener("click", function(){
    ancho += 10;
    logo.style.width = ancho + "px";
    console.log(ancho);
})

logo.addEventListener("mouseout", function  (){
    ancho = anchoOriginal;
    logo.style.width = ancho + "px";
})