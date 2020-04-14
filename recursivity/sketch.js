var angulo;
var hoja, slider;
var longitud = prompt("Ingresa el Tamano de las ramas");

var ancho = 0;
var alto = 0;

function setup() {
  ancho = windowWidth-100;
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  alto = windowHeight-100;
  createCanvas(ancho, alto);
  hoja = new hoja(150,150);
}

function draw() {
  background(0);
  angulo = slider.value();
  hoja.show();
  hoja.mover();
  translate((ancho/2), height);
  stroke(0,175,255);
  rama(longitud);
}


function rama(longitud) {
  line(0, 0, 0, -longitud);
  translate(0, -longitud);
  if (longitud > 4) {
    push();
    rotate(angulo);
    rama(longitud * 0.67);
    pop();
    push();
    rotate(-angulo);
    rama(longitud * 0.67);
    pop();
  }

}
