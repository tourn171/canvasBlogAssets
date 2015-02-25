var canvas = document.getElementById('canvas').getContext('2d');

var W = window.innerWidth,
    H = window.innerHeight;


    
canvas.canvas.width = W;
canvas.canvas.height = H;

canvas.fillStyle = "black";
canvas.fillRect(0,0,W,H);





var img1 = canvas.createImageData(500,500);

for(i=0; i<img1.data.length;i+=4){
    if(i % 6 == 0 || i % 10 == 0 || i % 7 == 0){
        img1.data[i] = 255;
        img1.data[i+3] = 255;
    }
    else{
        img1.data[i] = 117;
        img1.data[i+1] = 250;
        img1.data[i+2] = 214;
        img1.data[i+3] = 255;
    }
}

canvas.putImageData(img1,W/2 - 250, H/2 - 250);




var grad = canvas.createRadialGradient(W/2,H/2,10,W/2,H/2,200);
grad.addColorStop(0, "#FFF");
grad.addColorStop(0.2, "#FAC");
grad.addColorStop(0.5, "#AFA");
grad.addColorStop(0.8, "#AAF");
grad.addColorStop(1, "#555");

canvas.fillStyle = grad;

canvas.beginPath();
canvas.arc(W/2,H/2,200,0, 2 * Math.PI);
canvas.fill();

canvas.save();
canvas.beginPath();
canvas.arc(W/2, H/2, 100, 0, 2 * Math.PI);
canvas.clip();




var img2 = new Image();

img2.src = "../images/postasset/Point-of-ayre-small-lighthouse.jpg";

var offsetx = img2.width / 2;
var offsety = img2.height / 2;

img2.onload = function(){
    canvas.drawImage(img2, W/2 - offsetx, H/2 - offsety);
};

