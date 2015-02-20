var canvas = document.getElementById('canvas').getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

var RADS = (Math.PI / 180);

canvas.canvas.width = W;
canvas.canvas.height = H;


canvas.fillStyle = "black";
canvas.fillRect(0,0,W,H);

canvas.fillStyle = "red";

canvas.fillRect(5,5,50,50);

canvas.beginPath();
canvas.arc(110 ,30,30,0, 360 * RADS);
canvas.closePath();
canvas.fill();

canvas.beginPath();
canvas.moveTo(180,5);
canvas.lineTo(160,55);
canvas.lineTo(200,55);
canvas.closePath();
canvas.fill();

canvas.save();
canvas.translate(280, 30);
canvas.scale(2,1);
canvas.beginPath();
canvas.arc(0,0,30,0,360 * RADS);
canvas.fill();
canvas.restore();