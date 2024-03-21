
    
    
    
    class Wand {
      constructor() {
        this.x = player1.position.x+50
        this.y = player1.position.y
        
      }
      
      update() {
        // Calcular a direção do mouse em relação ao sprite
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        // Calcular o ângulo usando a função atan2
        let angle = atan2(dy, dx);
        // Definir a rotação do sprite para o ângulo calculado
        this.rotation = angle;
      }
      
      display() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, 50, 10);
        pop();
      }

     
      
    
        
     
    }
