class Magic {
  constructor() {
    this.velocity = 0.5
    this.damage
    this.angle = wand.rotation
    this.isMagic = false
    this.dx = (mouseX - wand.x) * 0.1;
    this.dy = (mouseY - wand.y) * 0.1;


  }
  update() {


  }

  createMagic() {
    // if (!this.isMagic) {
    //   this.isMagic = true
      let magic1 = createSprite(wand.x, wand.y, 20, 20)
      magic1.addAnimation("magia",magicImg)
      magic1.rotation=wand.rotation
      magic1.scale=0.8
      
      let d=dist(wand.x,wand.y,mouseX,mouseY)
      console.log("d"+d)
      if(d>80){
        this.dx = (mouseX - wand.x) * 0.01;
        this.dy = (mouseY - wand.y) * 0.01;
        magic1.setVelocity(this.dx, this.dy)
        
      }else if(d<35){
        this.dx = (mouseX - wand.x) * 0.3;
        this.dy = (mouseY - wand.y) * 0.3;
        magic1.setVelocity(this.dx, this.dy)
      }
      else{
        magic1.setVelocity(this.dx, this.dy)
      }
      
    


    // } else {
    //   setTimeout(() => {
    //     this.isMagic = false

    //   }, 10000);
    // }

    console.log(this.dx)
    console.log(this.dy)
    console.log(this.isMagic)





  }





}