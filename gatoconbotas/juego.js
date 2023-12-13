class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.enemigos = []; // Cambiado de un solo enemigo a un arreglo de enemigos
    this.personaje = new Personaje(width / 2, 300);
    
    // Crear los enemigos y almacenarlos en un array
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(i * 60 + 10, 90))// Agregamos enemigos al array
    }
  }

  dibujar() {
    this.personaje.dibujar();

    // Iterar a través de los enemigos y dibujar aquellos que siguen vivos
    this.enemigos.forEach((enemigo) => {
      if (enemigo.vida) {
        enemigo.dibujar();
      }
    });

    this.controlarDisparosAEnemigos();
  }

  

  //crearEnemigos() {
  //  this.enemigos = [];
  //  for (let i = 0; i < this.cantidadEnemigos; i++) {
  //    this.enemigos[i] = new Enemigo(i * 40, 100);
  //  }
  //}

  //crearPersonaje() {
  //  this.personaje = new Personaje(width / 2, 300);
  //}

 
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        if (this.enemigos[i].vida) {
          this.enemigos[i].haTocadoLaBala(this.personaje.bala); //verificamos si impacto
        }
      }
    }

    
    this.todosEnemigosEliminados = this.enemigos.every((enemigo) => !enemigo.vida);
  }
}
