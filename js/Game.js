class Game {
  constructor() {
   this.isMagic=false
  }
  start(){
    form=new Form()
    form.display()
    player=new Player()
    player.display()
  }
  play(){
    drawSprites()
    player.update()
    wand=new Wand()
    wand.update()
    wand.display()
    
   
    
  
   
    // if(mousePressed){
    //  this.createMagic()
    // }
    
    // console.log(this.isMagic)
  }


  
 
  }
