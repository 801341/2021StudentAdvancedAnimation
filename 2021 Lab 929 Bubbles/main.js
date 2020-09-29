

// global variables for canvas and context
var game, canvas, ctx;
window.onload = init;//  After the window has been loaded, go to init

function init(){
  //get the canvas
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  // get the context
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  var bubbles = loadBubbles(150)
  game = new Game(bubbles);
  //game.ballListeners();
  animate();
}


function animate(){
  //ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0,0,0,.15)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update()
  requestAnimationFrame(animate);
}

   //  creating the array of ball objects before
    //  making the game object
    function loadBubbles(numBubbles){
        var bubbles = [];
        for(var i = 0; i < numBubbles; i++){
          var x, y, dx, dy, diam, clr, r, g, b;
          x = Math.random()*canvas.width;
          y = Math.random()*canvas.height;
          dx = Math.random()*6-3;
          dy = Math.random()*6-3;
          diam = 15;//Math.random()*20 + 10;
          r = 255;
          g = 255;
          b = 255;
          clr = "rgba(" + r + ", "+ g + ","+ b +")"
          bubbles[i] = new Bubble(x, y, dx, dy, diam, clr);
        }
        return bubbles;
      }
