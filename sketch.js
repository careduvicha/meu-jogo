var canvas
var form 
var game
var player
var apresentationBg
var gameState=0
var cenario
var player1
var wand


function preload() {
  apresentationBg=loadImage("./assets/bg3.png")
  cenario=loadImage("./assets/cenario.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game=new Game()
  game.start()

}

function draw() {
  background(apresentationBg)
  if(gameState==1){
    clear()   
    background(51,105,30)
    imageMode(CENTER)
    image(cenario,width/2,height/2,800,800)
    game.play()
  }

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed(){
 var magic=new Magic()
  magic.createMagic()
  
}
