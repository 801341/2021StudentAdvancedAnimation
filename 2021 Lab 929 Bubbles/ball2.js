//  Ball constructor function +++++++++++++++++++++++++++++
function Ball(x, y, dx, dy, rad, clr){
    this.x = 300;
    this.y = 300;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.clr = clr;
}

  //  placeing methods in the prototype (every ball shares functions)
  Ball.prototype.run = function(g){
    this.checkEdges();
    this.update();
    this.render(g);
  }

  Ball.prototype.render = function(g){
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.rad, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }
  
  Ball.prototype.update = function(){
    if(!game.gamePaused){
      this.x += this.dx;
      this.y += this.dy;
    }
  }

  Ball.prototype.checkEdges = function(){
    if(this.x > 800 || this.x < 0)  this.dx = -this.dx;
    if(this.y > 700 || this.y < 0)  this.dy = -this.dy;
  }
