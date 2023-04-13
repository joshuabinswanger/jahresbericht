const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//console.log(width);
let canvas = document.getElementById("canvas");
const canvas_width = width * 0.8;
const adjust = (width - canvas_width) * 0.48;

canvas.style.width = String(width * 0.8) + "px";
canvas.style.height = String(width * 1.3) + "px";
canvas.style.left = String(adjust) + "px";
canvas.style.top = "0px";

