var canvas,
    ctx,
    ocean,
    W = window.innerWidth - 560,
    H = window.innerHeight,
    inv = getId('inv'),
    bW = getId('bW'),
    red = getId('red'),
    blu = getId('blue'),
    gre = getId('green'),
    alp = getId('alpha');
    

    
// Extending funcionality to image object
    
Image.prototype.filtered = function(r,g,b,a,black,inverted){
    // Draws image object to canvas and filters to 
    // input colors
    var black = black || false;
    var inverted = inverted || false;
    ctx.drawImage(this, 100, 50);
    var myImg = ctx.getImageData(100, 50, 640, 480);
    
    if(black){
        for (var i = 0; i < myImg.data.length; i += 4){
    	var brightness = 0.2126 * myImg.data[i] + 0.7152 * myImg.data[i + 1] + 0.0722 * myImg.data[i + 2];
            myImg.data[i] = brightness;
            myImg.data[i + 1] = brightness;
            myImg.data[i + 2] = brightness;
            myImg.data[i + 3] = 255;
        } 
        ctx.putImageData(myImg, 100, 50); 
    }
    
    else if(inverted){
        for (var i = 0; i < myImg.data.length; i += 4){
            myImg.data[i] = 255 - myImg.data[i];
            myImg.data[i + 1] = 255 - myImg.data[i + 1];
            myImg.data[i + 2] = 255 - myImg.data[i + 2];
            myImg.data[i + 3] = 255;
        } 

        ctx.putImageData(myImg, 100, 50);        
    }
    
    else{
        for (var i = 0; i < myImg.data.length; i += 4){
            myImg.data[i] += r;
            myImg.data[i + 1] += g;
            myImg.data[i + 2] += b;
            myImg.data[i + 3] += a;
        } 

        ctx.putImageData(myImg, 100, 50);
    }
}  

// Helper Functions


function getId(id){
    // Returns DOM object with id
    return document.getElementById(id);
}

function setValue(obj, amount){
    // Sets form values
    // Used to set values on init
    obj.value = amount;
}

function update(e){
    // eventHandler for input 
    e.preventDefault;
    var r = parseInt(red.value);
    var g = parseInt(gre.value);
    var b = parseInt(blu.value);
    var a = parseInt(alp.value);
    ocean.filtered(r,g,b,a,bW.checked,inv.checked);
}


(function init(){
    

    
    // Initialize canvas and set attributes
    canvas = getId('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = W;
    canvas.height = H;
    
    // Initialize color values
    var r = 25;
    var g = -200;
    var b = -200;
    var a = 0;
    
    
    // initialize form data setting default
    // values and adding event listeners
    setValue(red, r);
    setValue(blu, g);
    setValue(gre, b);
    setValue(alp, a);
    red.addEventListener('change', update, false);
    gre.addEventListener('change', update, false);
    blu.addEventListener('change', update, false);
    alp.addEventListener('change', update, false);
    bW.addEventListener('click', update, false);
    inv.addEventListener('click', update, false);
    
    

    
    // Initialize our image set the source
    // once loaded filter the image.
    ocean = new Image(),
    ocean.src = "../images/ocean.jpg";    
    ocean.onload = ocean.filtered(r, g, b, a, bW.checked, inv.checked);

    
})();






