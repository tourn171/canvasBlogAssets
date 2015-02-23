var canvas = document.getElementById('canvas').getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;


canvas.canvas.width = W;
canvas.canvas.height = H;



canvas.fillStyle = "black";
canvas.fillRect(0,0,W,H);


canvas.strokeStyle = "white";

// for(var x = 0; x <= W; x += 25){
//     if(x >= W/2 - 10 && x <= W/2 + 10){
//         canvas.lineWidth = 2;
//     }
//     else{
//         canvas.lineWidth = 1;
//     }
//     canvas.beginPath();
//     canvas.moveTo(x, 0);
//     canvas.lineTo(x, H);
//     canvas.stroke();
// }

// for(var x = 0; x <= H; x += 20){
//     if(x >= H/2 - 10 && x <= H/2 + 10){
//         canvas.lineWidth = 2;
//     }
//     else{
//         canvas.lineWidth = 1;
//     }
//     canvas.beginPath();
//     canvas.moveTo(0, x);
//     canvas.lineTo(W, x);
//     canvas.stroke();
// }


canvas.lineWidth = 3;

 

canvas.save();
canvas.translate(W/2, H/2);

canvas.beginPath();
canvas.moveTo(100,-150);
canvas.bezierCurveTo(50, -200, -150, -200, -150, -80);
canvas.quadraticCurveTo(-160,-50,-150,-50);
canvas.bezierCurveTo(-140,-20,-120,25,-215,40);
canvas.lineTo(-180,150);
canvas.quadraticCurveTo(-200,190,25,130);
canvas.quadraticCurveTo(35, 135, 35, 50);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(-75,155);
canvas.lineTo(-85,200);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(150, 200);
canvas.lineTo(100,75);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(95,80);
canvas.bezierCurveTo(175,0,175,-100,100,-150);
canvas.stroke();


canvas.beginPath();
canvas.moveTo(-170,150);
canvas.bezierCurveTo(-100,40,-50,150,-170,150);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(-130, -75);
canvas.lineTo(-50, -50);
canvas.lineTo(-100,0);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(-120, -70);
canvas.quadraticCurveTo(-130,-50,-95,-8);
canvas.stroke();

canvas.beginPath();
canvas.arc(-110,-30,20,235 * Math.PI / 180, 60* Math.PI / 180 , false);
canvas.stroke();
canvas.fillStyle = "blue";
canvas.fill();

canvas.beginPath();
canvas.moveTo(-120, -100);
canvas.quadraticCurveTo(-110,-150,-30,-80);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(30,-100);
canvas.bezierCurveTo(75, -150, 120, 35, 10, 10);
canvas.stroke();