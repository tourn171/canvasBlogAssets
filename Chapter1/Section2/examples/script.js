// Initialize the canvas
var canvas = getId('canvas');

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

var red = getId('red');
var blu = getId('blue');
var gre = getId('green');
var alp = getId('alpha');

setValue(red,25);
setValue(blu,-200);
setValue(gre, -200);
setValue(alp, 0);

function setValue(obj, amount){
    obj.value = amount;
}

function update(e){
    switch (e.target.id) {
        case 'red':
            red = getId('red').value;
            drawMe(ocean);
            break;
        case 'green':
            gre = getId('green').value;
            drawMe(ocean);    
            break;
        case 'blue':
            blu = getId('blue').value;
            drawMe(ocean);
            break;
        case 'alpha':
            alp = getId('alpha').value;
            drawMe(ocean);            // code
            break;
        
        default:
            console.log("error");
    }
}

red.addEventListener('change', update);
gre.addEventListener('change', update);
blu.addEventListener('change', update);
alp.addEventListener('change', update);



function drawMe(imgObj){
try{        
  ctx.drawImage(imgObj, 100, 50);
  var myImg = ctx.getImageData(100, 50, 640, 480);
  
  for (var i = 0; i < myImg.data.length; i += 4)
  {
  myImg.data[i] += parseInt(red.value);
  myImg.data[i + 1] += parseInt(gre.value);
  myImg.data[i + 2] += parseInt(blu.value);
  myImg.data[i + 3] += parseInt(alp.value);
  } 
  
  ctx.putImageData(myImg, 100, 50);
}
catch(exception){
    console.log(exception);
}
}








