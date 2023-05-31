//frases de 58 indicios sobre el cuerpo de Jean-Luc-Nancy
var frase = [
  " 1 El cuerpo es material. Es denso. Es impenetrable. Si se lo penetra, se lo disloca, se lo agujerea, se lo desgarra.",
  " 2 El cuerpo es material. Es aparte. Distinto de los otros cuerpos. Un cuerpo empieza y termina contra otro cuerpo. Incluso el vacio es una especie muy sutil de cuerpo",
"3 Un cuerpo no esta vacio. Esta lleno de otros cuerpos, pedazos, organos, piezas, tejidos, rotulas, anillos, tubos, palancas y fuelles. Tambien esta lleno de si mismo: es todo lo que es.",
"5 Un cuerpo es inmaterial. Es un dibujo, es un contorno, esuna idea."  
];
let sentence = "";
let lastT = 0;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  for (i = 0; i < 5; i++) {
    fill(255);
    let t = millis() / 500;
    if (floor(t) - floor(lastT) > 0) {
      let index = floor(random(frase.length));
      sentence = `${frase[index]}`;
    }
    translate(0, 25);
    textSize(10);  
    textFont('monospace');
    textStyle('italic');  
    text(
      sentence,
      width / 2 - 300,
      height / 2 - 200);
    lastT = t;
  }   
    
}
