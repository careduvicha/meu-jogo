class Player {
  constructor() {
   this.x=width/2
   this.y=height/2
   this.life=100 
  }
 display(){
  player1=createSprite(this.x,this.y,40,50)



 }
 update(){
  if(keyIsDown(UP_ARROW)){
    player1.position.y-=5
  }
  if(keyIsDown(DOWN_ARROW)){
    player1.position.y+=5  
  }
  if(keyIsDown(RIGHT_ARROW)){
    player1.position.x+=5
  }
  if(keyIsDown(LEFT_ARROW)){
    player1.position.x-=5
  }
 }
 
}
