function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(x=0;x<5;x++){
  for(y=0;y<6;y++){
  fill(60*x,0,60*y)
  stroke(60*y,0,60*x);  
  rect(x*60+50,y*80+20,50);  
  } 
  }
}
