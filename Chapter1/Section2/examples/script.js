var canvas,
    ctx,
    W = window.innerWidth - 560,
    H = window.innerHeight,
    red = getId('red'),
    blu = getId('blue'),
    gre = getId('green'),
    alp = getId('alpha');
    

    
// Extending funcionality to image object
    
Image.prototype.filtered = function(r,g,b,a){
    // Draws image object to canvas and filters to 
    // input colors
    try{        
        ctx.drawImage(this, 100, 50);
        var myImg = ctx.getImageData(100, 50, 640, 480);
 
        for (var i = 0; i < myImg.data.length; i += 4){
            myImg.data[i] += r;
            myImg.data[i + 1] += g;
            myImg.data[i + 2] += b;
            myImg.data[i + 3] += a;
        } 

        ctx.putImageData(myImg, 100, 50);
    }
    catch(err){
        console.log(err);
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
    ocean.filtered(r,g,b,a);
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
    

    
    // Initialize our image set the source
    // once loaded filter the image.
    ocean.onload = ocean.filtered(r, g, b, a);
    
})();






