let canvas
let form
let game
let player
let apresentationBg
let gameState = 0
let cenario
let player1
let wand
let magicImg
let isMagic = false


function preload() {
  apresentationBg = loadImage("./assets/bg3.png")
  cenario = loadImage("./assets/cenario.png")
  magicImg = loadImage("./assets/magia.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game()
  game.start()

}

function draw() {
  background(apresentationBg)
  if (gameState == 1) {
    clear()
    background(51, 105, 30)
    imageMode(CENTER)
    image(cenario, width / 2, height / 2, 800, 800)
    game.play()
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {



  if (!isMagic) {
    let magic = new Magic()
    magic.createMagic()
    isMagic = true

  } else {
    setTimeout(() => {
      isMagic = false
    }, 1000);
  }

}
