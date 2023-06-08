// From:
//Handpose code by the ml5.js team.  Visit https://ml5js.org/
// Drawing code by Steve's Makerspace
// Video: https://youtu.be/96sWFP9CCkQ

let handpose;
let video;
let predictions = [];
let canvas2;
let prevtop = null;
let prevleft = null;
let leftArr = [];
let topArr = [];
let leftAvg, topAvg;
let pointerX, pointerY, knuckle, ring;
let mySound;

function preload(){
    soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('assets/002_FX.wav');
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  canvas2 = createGraphics(windowWidth, windowHeight);
  //makesquares();
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);
  

  
 
  
  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", (results) => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
 // translate(width, 0);
  //scale(-1, 1);
  //  background(0);
 
 image(video, 0, 0, width, height); 

filter(THRESHOLD);
 image(canvas2, 0, 0);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
   let textArray = ["des/","entrenando","cuerpxs"]
   
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    canvas2.strokeWeight(3);
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];

      //   ellipse(keypoint[0], keypoint[1], 10, 10);
      if (j == 8) {
        pointerX = keypoint[0];
        pointerY = keypoint[1];
        //print(keypoint);
      } else
      if (j == 14) {
        knuckle = keypoint[1];
      } else
      if (j == 16) {
        ring = keypoint[1];
      }
    }
    //If the ring finger is not extended then draw a line or pick a color
 //console.log(canvas2.mouseX);
    
    if (knuckle < ring) {
        canvas2.textSize(20);
       canvas2.frameRate(5);
       canvas2.fill(0);
      canvas2.stroke(180,120,abs(sin(frameCount)*255));
       canvas2.text(random(textArray),pointerX,pointerY)
      mySound.play(); 
        
    }else{ 
    canvas2.clear();
mySound.stop(); 
    }
  
}
}


