class Aventura {
  constructor() {
    this.estado = 0;
    this.boton1 = new Boton ();
    this.boton2 = new Boton ();
    this.pantalla = new Pantalla (pantallas);
    this.objJuego = new Juego (10);
  }

  mostrar() {
    console.log(this.estado);
    switch (this.estado) {
    case 0:
      this.pantalla.mostrar(0);
      this.boton1.mostrar(200, 460, 200, 50, "comenzar ", 0);
      break;
    case 1:
      this.pantalla.mostrar(1, 10, 15, 290, 75, 365, 420, 225, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      
      break;
    case 2:
      this.pantalla.mostrar(2, 45, 20, 200, 75, 45, 100, 200, 71);
      this.boton1.mostrar(250, 10, 320, 50, "salir a caminar");
      this.boton2.mostrar(250, 80, 320, 50, "quedarse en casa");
      break;
    case 3:
      this.pantalla.mostrar(3, 0, 10, 300, 55, 0, 65, 300, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 4:
      this.pantalla.mostrar(4, 0, 10, 300, 55, 0, 65, 300, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 5:
      this.pantalla.mostrar(5, 25, 5, 300, 125, 360, 5, 200, 105);
      this.boton1.mostrar(200, 500, 200, 50, "Creditos");
      break;
    case 6:
      this.pantalla.mostrar(6, 20, 10, 250, 80, 330, 25, 250, 50);
      this.boton1.mostrar(20, 520, 350, 50, "rechazar la peticion y seguir");
      this.boton2.mostrar (20, 450, 350, 50, "ir a defender el bosque ");
      break;
    case 7:
      this.pantalla.mostrar(7, 10, 10, 280, 100, 10, 110, 280, 80);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 8:
      this.pantalla.mostrar(8, 25, 5, 200, 80, 360, 5, 200, 80);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 9:
      this.pantalla.mostrar(9, 25, 15, 200, 100, 360, 40, 200, 50);
      this.boton1.mostrar(25, 450, 200, 100, "pelear con los lobos");
      this.boton2.mostrar(360, 450, 200, 100, "correr de ellos");
      break;
    case 10:
      this.pantalla.mostrar(10, 25, 15, 200, 100, 360, 15, 200, 100);
      this.boton1.mostrar(25, 450, 200, 100, "ir a defender el bosque");
      this.boton2.mostrar(360, 450, 200, 100, "ir a jugar con unos patos");
      break;
    case 11:
      this.pantalla.mostrar(11, 0, 20, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 12:
  background(75,147,0);
  this.objJuego.dibujar();
  textSize(17);
  fill(255);
  text("carga las espadas con el ENTER y dispara con la flecha hacia arriba!", width / 2,30);
  this.objJuego.teclaPresionada(keyCode);
  if (this.objJuego.todosEnemigosEliminados) { // Verifica si todos los enemigos han sido eliminados
    fill(255);
    text("¡Ganaste!", width / 2, height / 2);
    this.boton1.mostrar(200, 530, 200, 50, "Continuar"); // Muestra el botón "Continuar"
  }
 
    
      break;
    case 13:
      this.pantalla.mostrar(13, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 14:
      this.pantalla.mostrar(14, 25, 10, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 15:
      this.pantalla.mostrar(15, 25, 5, 300, 150, 375, 50, 200, 80);
      this.boton1.mostrar(200, 500, 200, 50, "Creditos");
      break;
    case 16:
      this.pantalla.mostrar(16, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(200, 500, 200, 50, "Creditos");
      break;
    case 17:
      this.pantalla.mostrar(17, 15, 250, 300, 150);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 18:
      this.pantalla.mostrar(18, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(200, 500, 200, 50, "Creditos");
      break;
    case 19:
      this.pantalla.mostrar(19, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(200, 500, 200, 50, "Reiniciar");
    }
  }

  interactuar() {
    if (this.estado === 0 && this.boton1.estaSobre()) {
      this.estado = 1;
      return;
    }
    if (this.estado === 1 && this.boton1.estaSobre()) {
      this.estado = 2;
      return;
    }
    if (this.estado === 2 && this.boton2.estaSobre()) {
      this.estado = 4;
      return;
    }
    if (this.estado === 2 && this.boton1.estaSobre()) {
      this.estado = 3;
      return;
    }
    if (this.estado === 3 && this.boton1.estaSobre()) {
      this.estado = 6;
      return;
    }
    if (this.estado === 4 && this.boton1.estaSobre()) {
      this.estado = 5;
      return;
    }
    if (this.estado === 6 && this.boton1.estaSobre()) {
      this.estado = 7;
      return;
    }
    if (this.estado === 6 && this.boton2.estaSobre()) {
      this.estado = 8;
      return;
    }
    if (this.estado === 7 && this.boton1.estaSobre()) {
      this.estado = 10;
      return;
    }
    if (this.estado === 8 && this.boton1.estaSobre()) {
      this.estado = 9;
      return;
    }
    if (this.estado === 9 && this.boton1.estaSobre()) {
      this.estado = 12;
      return;
    }
    if (this.estado === 9 && this.boton2.estaSobre()) {
      this.estado = 11;
      return;
    }
    if (this.estado === 10 && this.boton1.estaSobre()) {
      this.estado = 14;
      return;
    }
    if (this.estado === 10 && this.boton2.estaSobre()) {
      this.estado = 13;
      return;
    }
    if (this.estado === 13 && this.boton1.estaSobre()) {
      this.estado = 16;
      return;
    }
    if (this.estado === 14 && this.boton1.estaSobre()) {
      this.estado = 9;
      return;
    }
    if (this.estado === 11 && this.boton1.estaSobre()) {
      this.estado = 17;
      return;
    }
    if (this.estado === 17 && this.boton1.estaSobre()) {
      this.estado = 18;
      return;
    }
    if (this.estado === 12 && this.boton1.estaSobre()) {
      this.estado = 15;
      return;
    }
    if (this.estado === 5 && this.boton1.estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 15 && this.boton1.estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 16 && this.boton1.estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 18 && this.boton1.estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 19 && this.boton1.estaSobre()) {
      this.estado = 0;
      return;
    }
  }
}
