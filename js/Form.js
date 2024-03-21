class Form {
  constructor() {
    this.apresentation = createElement("h2")
    this.button = createButton("Pressione Para Iniciar")
  }
  setElementsConfig() {
    this.apresentation.position(10, 100)
    this.apresentation.class("greeting")
    var history = `
    Em uma realidade alternativa, em um fatídico acontecimento, surge uma fenda dimensional rasgando os céus, de onde emergem monstros como esqueletos, gosmas assassinas e zumbis. Contudo, dessa fenda também irradia um feixe de luz que atinge o grande herói desta história. Este aventureiro foi o escolhido para enfrentar essa invasão monstruosa, pois apenas ele possui a "SUPERNOVA"que é uma habilidade capaz de destruir todos esses monstros. No entanto, para isso, ele terá que chegar ao núcleo de tudo isso e erradicar o mal pela raiz. Além disso, terá que esperar 60 segundos, já que essa habilidade requer muito tempo para ser ativada.`
    this.apresentation.html(history)
    this.button.position(width / 2 - 200, height - 100)
    this.button.class("customButton")
  }
  handleClick() {
    this.button.mousePressed(() => {
      this.button.hide()
      this.apresentation.hide()
      gameState = 1
    })
  }

  display() {
    this.setElementsConfig()
    this.handleClick()
  }


}