var canvas,
    ctx,
    ocean,
    W = window.innerWidth - 560,
    H = window.innerHeight,
    red = getId('red'),
    blu = getId('blue'),
    gre = getId('green'),
    alp = getId('alpha');    
    
Image.prototype.filtered = function(r,g,b,a){
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

function getId(id){
    return document.getElementById(id);
}

function setValue(obj, amount){
    obj.value = amount;
}

function update(e){
    e.preventDefault;
    var r = parseInt(red.value);
    var g = parseInt(gre.value);
    var b = parseInt(blu.value);
    var a = parseInt(alp.value);
    ocean.filtered(r,g,b,a);
}


(function init(){
    
    canvas = getId('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = W;
    canvas.height = H;
    
    setValue(red,25);
    setValue(blu,-200);
    setValue(gre, -200);
    setValue(alp, 0);
    red.addEventListener('change', update, false);
    gre.addEventListener('change', update, false);
    blu.addEventListener('change', update, false);
    alp.addEventListener('change', update, false);
    var r = parseInt(red.value);
    var g = parseInt(gre.value);
    var b = parseInt(blu.value);
    var a = parseInt(alp.value);
    
    
    ocean = new Image();
    ocean.src = "../images/ocean.jpg";

    ocean.onload = ocean.filtered(r, g, b, a);
    
})();






