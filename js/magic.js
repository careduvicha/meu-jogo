class Magic{
    constructor(){
        this.velocity=0.5
        this.damage
        this.angle=wand.rotation
        this.isMagic=false
        this.dx = (mouseX - wand.x)*0.1;
        this.dy = (mouseY - wand.y)*0.1;
    

    }
    update() {
        // Calcular a direção do mouse em relação ao sprite
        
        // Calcular o ângulo usando a função atan2
        let angle = atan2(dy, dx);
        // Definir a rotação do sprite para o ângulo calculado
        this.rotation = angle;
        
      }
          
  createMagic(){
    if(!this.isMagic){ 
        this.isMagic=true
      let magic1=createSprite(wand.x,wand.y,20,20)
      magic1.setVelocity(this.dx,this.dy)
       
    }else{
      setTimeout(( ) => {
        this.isMagic=false
      }, 1000);
    }
    console.log(this.dx)
    console.log(this.dy)
  
         
     
     
 }

    



}