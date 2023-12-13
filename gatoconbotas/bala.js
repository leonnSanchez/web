class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false; //no fue disparada
    this.miImagen = loadImage ('assets/espada.webp');
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
       image(this.miImagen, this.posX-50, this.posY, this.miImagen.width / 2, this.miImagen.height / 2);
      
    }
  }

  mover() {
    this.posY -= 8;
  }

  disparar() {
    this.disparada = true; //si fue
  }
}
