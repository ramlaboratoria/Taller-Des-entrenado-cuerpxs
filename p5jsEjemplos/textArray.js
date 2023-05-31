function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  textArray = ["😻", "💅", "🔥","👻","🌜","🌈","🌸","✨","💫","🌞"] 
  //background(220);
  text(random(textArray),mouseX,mouseY);
}

function mousePressed() {
clear();  
}
