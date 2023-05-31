function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myFunction();
  myOtherFunction();
}

function myFunction(){
fill(255,0,0) 
rect(width/2,height/2,100);
}

function myOtherFunction(){
fill(0);
textSize(20);
text(mouseX+mouseY,mouseX,mouseY)
}
