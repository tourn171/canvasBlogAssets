var canvas = document.getElementById('canvas').getContext('2d');

var W = window.innerWidth,
    H = window.innerHeight;

    
canvas.canvas.width = W;
canvas.canvas.height = H;

canvas.fillStyle = "black";
canvas.fillRect(0,0,W,H);

canvas.fillStyle = "red";
canvas.save();
canvas.translate(W/2 , H/2);
canvas.rotate(40 * Math.PI / 180);


canvas.save();

canvas.transform(1,2,1,5,0,0);

canvas.fillRect(-50,-50,100,100);
canvas.restore();
canvas.save();
canvas.globalCompositeOperation = "lighter";
canvas.transform(1,1, 5,2,0,0);
canvas.fillStyle = "blue";
canvas.fillRect(-50, -50, 100,100);
