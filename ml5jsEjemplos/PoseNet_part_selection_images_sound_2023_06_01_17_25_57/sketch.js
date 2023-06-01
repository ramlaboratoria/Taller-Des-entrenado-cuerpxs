// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
from ml5 Example PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let mySound, beat;
let cuervo;
function preload(){
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('assets/000_crow.wav');
  beat = loadSound('assets/000_drum1.wav')
  cuervo = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Raven_croak.jpg/1920px-Raven_croak.jpg');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
//select('#status').html('Model Loaded');
console.log('Model Loaded')
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(2);

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    let pose = poses[0].pose;

    // Create a pink ellipse for the nose
    fill(213, 0, 143);
    let nose = pose['nose'];
    text('nariz',nose.x, nose.y);

    // Create a yellow ellipse for the right eye
    fill(255, 215, 0);
    let rightEye = pose['rightEye'];
    text('ojo Der',rightEye.x, rightEye.y);

    // Create a yellow ellipse for the right eye
    fill(255, 215, 0);
    let leftEye = pose['leftEye'];
    text('ojo Izq',leftEye.x, leftEye.y);
    
    let leftWrist = pose['leftWrist'];
    text(leftWrist.y,leftWrist.x,leftWrist.y);
    if(leftWrist.y<300){
    textSize(30);
    text('🤖',leftWrist.x,leftWrist.y);
    beat.play(); 
    }else{
    beat.stop();  
    }
    //'lmuñeca Izq'
    let rightWrist = pose['rightWrist'];
  if(rightWrist.x<200){
  //rect(width/2,height/2,100,100); 
  mySound.stop();
  }else{
   mySound.play(); 
  image(cuervo,width/2,height/2,100,100); 
  // text('',width/2,height/2);
  } 
    //text('muñeca Der',rightWrist.x,rightWrist.y);
    text(rightWrist.x,rightWrist.x,rightWrist.y);
    
 
  }
  
  
  
}
