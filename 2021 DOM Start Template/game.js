function Game(b){
  
    this.bubbles = b;
    this.gamePaused = false;
    this.ga = new GameArea();

    this.update = function(){
      if(!this.gamePaused){
        for(let i = 0; i < this.bubbles.length; i++){
          this.bubbles[i].run();
       }
      }
    }
}//++++++++++++++++++++++  end Bubbles constructor
