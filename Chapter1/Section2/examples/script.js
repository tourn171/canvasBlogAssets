// Initialize the canvas
var canvas = document.getElementById('canvas') 

// Get the context
var ctx = canvas.getContext('2d') 

// Get our width and height 
var W = window.innerWidth - 560; 
var H = window.innerHeight; 

// Set the canvas to said width and height
canvas.width = W;
canvas.height = H;

var ocean = new Image();

ocean.onload = function(){
    drawMe(this);
}

ocean.src = "../images/ocean.jpg";


function getId(id){
    return document.getElementById(id);
}

var red = getId('red').value = 25;
var blu = getId('blue').value = -200;
var gre = getId('green').value = -200;
var alp = getId('alpha').value = 0;



function update(which){
    switch (which) {
        case 'r':
            red = getId('red').value;
            drawMe(ocean);
            break;
        case 'g':
            gre = getId('green').value;
            drawMe(ocean);    
            break;
        case 'b':
            blu = getId('blue').value;
            drawMe(ocean);
            break;
        case 'a':
            alp = getId('alpha').value;
            drawMe(ocean);            // code
            break;
        
        default:
            // code
    }
}

getId('red').addEventListener('change', update('r'));
getId('green').addEventListener('change', update('g'));
getId('blue').addEventListener('change', update('b'));
getId('alpha').addEventListener('change', update('a'));



function drawMe(imgObj){
  ctx.drawImage(imgObj, 100, 50);
  
  var myImg = ctx.getImageData(100, 50, 640, 480);
  
  for (var i = 0; i < myImg.data.length; i += 4)
  {
  myImg.data[i] += red;
  myImg.data[i + 1] += blu;
  myImg.data[i + 2] += gre;
  myImg.data[i + 3] += alp;
  } 
  
  ctx.putImageData(myImg, 100, 50);
}








