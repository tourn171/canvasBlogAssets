var canvas = document.getElementById('canvas').getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

var RADS = (Math.PI / 180);

canvas.canvas.width = W;
canvas.canvas.height = H;


canvas.fillStyle = "black";
canvas.fillRect(0,0,W,H);


canvas.strokeStyle = "white";
canvas.lineWidth = 3;

canvas.beginPath();
canvas.moveTo(W/2 + 50, H/2 * 0.30);
canvas.bezierCurveTo(W/2, 0, W/2 - 60, 0, W/2 - 120, H/2 * 0.28);
canvas.quadraticCurveTo(W/2 - 130, H/2 * 0.30, W/2 - 120, H/2 * 0.35);
canvas.bezierCurveTo(W/2 - 110, H/2 * 0.5, W/2 - 200, H/2, W/2 * 0.03, 150);
canvas.bezierCurveTo(W/2 - 210, 175, W/2 - 140, 160, 120, 200)
canvas.stroke();