//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, rad, clr){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;///2;
    this.clr = clr;
    this.isOverlapping = false;
}

  //  placing methods in the prototype (every ball shares functions)

  Bubble.prototype.run = function(){
    this.checkEdges();
    this.checkOverlapping()
    this.update();
    this.render();
  }

  Bubble.prototype.checkOverlapping = function(){
      this.isOverlapping = false;//  default color
      this.clr =  "rgba(255,255,255,255)"
    var b = game.bubbles;
    for(var i = 0; i < b.length; i++){
       if(this !== b[i]){
         var d = Math.sqrt((this.x-b[i].x)*(this.x-b[i].x) + (this.y-b[i].y)*(this.y-b[i].y));
         if(d < this.rad + b[i].rad){
            this.isOverlapping = true;
            this.clr =  "rgba(100,220,55,10)"
         }
       }
    }

  }

  Bubble.prototype.render = function(){
    if(this.isOverlapping){
        ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.strokeStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
    }
    
  }
  
  Bubble.prototype.update = function(){
    if(!game.gamePaused){
      this.dx = Math.random()*6-3;
      this.dy = Math.random()*6-3;
      this.x += this.dx;
      this.y += this.dy;
    }
  }

  Bubble.prototype.checkEdges = function(){
    if(this.x > canvas.width)  this.x = 0;
    if(this.x < 0)  this.x = canvas.width;
    if(this.y > canvas.height)  this.y = 0;
    if(this.y < 0)  this.y = canvas.height;
  }
