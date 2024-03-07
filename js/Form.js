class Form {
  constructor() {
   this.apresentation= createElement("h2")
  }
  setElementsConfig(){
    this.apresentation.position(width/6,50)
    this.apresentation.class("greeting")
    var history=`Em uma realidade alternativa aparece uma fenda</br>          dimensional onde dela sai monstros como esqueletos</br>          gosmas e zombies mas dessa fenda tambem sai um feixe</br> 
                 de luz que acerta o grande heroi dessa historia.esse </br> aventureiro foi o escolhido para enfrentar essa </br> invasão monstruosa e apenas ele tem a "SUPERNOVA" que ira </br> destruir todos esses monstros</br> </br> 
                 mas para isso ele tera que chegar no nucleo de tudo isso </br> para poder erradicar tudo pela raiz</br> 
                e tera que esperar 60 segundos pois essa habilidade requer </br> muito tempo para ser ativada`
    this.apresentation.html(history)
  }                         
                            

}