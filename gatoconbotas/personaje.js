class Personaje {
  constructor (posX, posY) {
    this.posX = posX;
    this.posY = 450;
    this.vida = 1;
    this.bala = new Bala();
    this.miImagen = loadImage ('assets/gato.webp');
  }

  dibujar() {
    this.bala.dibujar();

   
     noFill(); // Sin relleno
  noStroke(); // Sin contorno
    rect(this.posX, this.posY, 50, 50);
    image(this.miImagen, this.posX-44, this.posY-50, this.miImagen.width / 2-170, this.miImagen.height / 2-380);
  }

  teclaPresionada(keyCode) {
    
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } 
    if (keyCode === ENTER) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX += 2;
    this.posX = constrain(this.posX, 0, width - 50);
  }

  moverIzquierda() {
    this.posX -= 2;
    this.posX = constrain(this.posX, 0, width - 50);
  }

  dispararBala() {
    this.bala = new Bala(this.posX + 20, this.posY);
    this.bala.disparar();
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }
}
