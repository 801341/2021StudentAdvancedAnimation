//  Ball constructor function +++++++++++++++++++++++++++++
function Ball(x, y, dx, dy, rad){
  //   ++++++++++++++++++++++++++++++++++++  object variables  
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = rad;
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  this.clr = 'rgba(' + r + ','+g+','+ b + ', .8)';
  
  //  +++++++++++++++++++++++++++++++++++++  object functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  
  this.render = function(){
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.rad, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }

  this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
  }

  this.checkEdges = function(){
    if(this.x > window.innerWidth || this.x < 0)  this.dx = -this.dx;
    if(this.y > window.innerHeight || this.y < 0)  this.dy = -this.dy;
  }
}//  +++++++++++++++++++++++++  End of the constructor