var canvas = document.getElementById('canvas').getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.canvas.width = W;
canvas.canvas.height = H;


canvas.fillStyle = "black";
canvas.fillRect(0,0,W,H);