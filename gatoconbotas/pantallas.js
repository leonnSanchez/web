class Pantalla {
  constructor(p) {
    this.p = p;
    this.c = 20;
    this.indexP = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.ancho1 =0;
    this.alto1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.ancho2 = 0;
    this.alto2 = 0;
    this.width = width;
    this.height = height;
    this.textos = new Array(2);
    this.textos[0] = new Array(this.c);
    this.textos[1] = new Array(this.c);
    for (let i = 0; i < this.c; i++) {
      this.textos[0][i] = "";
      this.textos[1][i] = "";
    }
    
    this.textos[0][1] = "el gato ayer tuvo una noche larga en el bar asi que se encuentra durmiendo";
    this.textos[1][1] = "como de costumbre,sin querer levantarse lo hace con sus mayores fuerzas";
    this.textos[0][2] = "se levanta entre mugre y desorden,con bastante olor fuerte";
    this.textos[1][2] = "ya despierto se queda pensando en que hacer ";
    this.textos[0][3] = "ya despierto decide salir a caminar y buscar algo que lo entretenga";
    this.textos[1][3] = "ya que ultimamente sus dias son aburridos";
    this.textos[0][4] = "se toma un vaso de leche y se queda pensando en lo triste que es su vida quedanso siempre ahi";
    this.textos[1][4] = "toma vaso tras vaso sin parar!";
    this.textos[0][5] = "al tomar todo el vaso de leche se queda completamente dormido y pacifico";
    this.textos[1][5] = "al final del dia es lo que mas lo hace feliz";
    this.textos[0][6] = "en el camino se encuentra una señora que le dice que unos lobos estan molestando en el bosque";
    this.textos[1][6] = "indeciso piensa en que hacer";
    this.textos[0][7] = "caminando en el hermoso pueblo va pensando en que hacer de su vida ";
    this.textos[1][7] = "no hay mucho para hacer pero el insiste en seguir buscando algo para divertirse";
    this.textos[0][8] = "asi que agarro su armadura y su espada y se entro en el bosque";
    this.textos[1][8] = "con la valentia del momento no tenia miedo alguno";
    this.textos[0][9] = "al encontrarlos se dacuenta que son muchisimos y muy malos";
    this.textos[1][9] = "empieza a tener miedo...";
    this.textos[0][10] = "se detiene un momento a pensar en si su respuesta a la señora fue la correcta,y si mejor vuelvo a pelear con los lobos?";
    this.textos[1][10] = "a la vista vio unos patos que le llamaron la atencion,pero le entro la duda de que hacer ";
    this.textos[0][11] = "logra correr de ellos y ve un tronco a lo lejos,sin dudarlo se dijire hacia el";
    this.textos[0][13] = "con mucha tranquilidad y paz se pone a jugar con los patitos que se hacen amigo de el ";
    this.textos[1][13] = "se olvido completamente que el bosque corria peligro y siguio pensando que hacer";
    this.textos[0][14] = "sin pensarlo se arma rapido y coge su espada para in a enfrentarlos a toda prisa";
    this.textos[0][15] = "luego de derrotarlos se dirigio al pueblo y todos los felicitaron por su victoria epica";
    this.textos[1][15] = "gozo de su victoria y riquezas que le dieron por el acto heroico";
    this.textos[0][16] = "al pasar el tiempo,oscurecio y se quedo en el pueblo y realizo una fogata para que las personas se acerquen con el";
    this.textos[1][16] = "luego se fue a dormir felizmente ";
    this.textos[0][17] = "se sube inmediatamente y se queda tranquilo sabiendo que los lobos no logran alcanzarlo";
    this.textos[1][17] = "lo que no se da cuenta es cuanto tiempo estara ahi arriba";
    this.textos[0][18] = "como paso tanto tiempo del gato ahi arriba,los lobos se calmaron y lo invitaron a jugar al poker";
    this.textos[1][18] = "asi que el gato termina siendo amigos de estos ";
    this.textos[0][19] = "Creado por Leonardo sanchez";
    this.textos[1][19] = "Profesor:david bedoian";
  }

  mostrar(indexP, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2) {
    this.indexP = indexP;
    this.x1 = x1;
    this.y1 = y1;
    this.ancho1 = ancho1;
    this.alto1 = alto1;
    this.x2 = x2;
    this.y2 = y2;
    this.ancho2 = ancho2;
    this.alto2 = alto2;
    noStroke();
    image (this.p[indexP], 0, 0, this.width, this.height);
    fill(100, 90);
    rect(this.x1, this.y1 - 5, this.ancho1, this.alto1);
    rect(this.x2, this.y2 - 5, this.ancho2, this.alto2);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text(this.textos[0][this.indexP], this.x1, this.y1 - 5, this.ancho1, this.alto1);
    text(this.textos[1][this.indexP], this.x2, this.y2 - 5, this.ancho2, this.alto2);
  }
}
