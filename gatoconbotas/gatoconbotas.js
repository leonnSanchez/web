//Leonardo Sanchez com-3 profesor:david 
let aventura;
let pantallas = [];


function preload(){
  for ( let i = 0; i < 20; i++ ) {
    pantallas[i] = loadImage("assets/pantalla"+ i +".png");
    
  }
  
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.mostrar();
  if (keyIsPressed) { aventura.objJuego.teclaPresionada(keyCode); }
}

function mousePressed() {
  aventura.interactuar();
}
