"use strict";

var torbar = document.querySelector(".fa-bars");
var menu = document.querySelector(".menu ul");
var mode_dark = document.querySelector(".fa-moon");
var redes = document.querySelector(".boton_abrir");
var enlace = document.querySelectorAll(".menu ul li a");
enlace.forEach(function (element) {
  element.addEventListener("click", function () {
    menu.classList.remove("menu2");
    torbar.classList.remove("fa-times");
  });
});
torbar.addEventListener("click", function () {
  torbar.classList.toggle("fa-times");
  menu.classList.toggle("menu2");
  redes.classList.remove("redes");
});
redes.addEventListener("click", function () {
  redes.classList.toggle("redes");
  menu.classList.remove("menu2");
  torbar.classList.remove("fa-times");
});
mode_dark.addEventListener("click", function () {
  mode_dark.classList.toggle("fa-sun");
  document.body.classList.toggle("oscuro");
  menu.classList.remove("menu2");
  torbar.classList.remove("fa-times");
  redes.classList.remove("redes");
});
window.addEventListener("scroll", function () {
  menu.classList.remove("menu2");
  torbar.classList.remove("fa-times");
  redes.classList.remove("redes");
});