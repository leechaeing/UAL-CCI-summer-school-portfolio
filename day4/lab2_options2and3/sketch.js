let capture;

let frame1;
let frame2; 
let frame3; 

let sticker1; 
let sticker2; 
let sticker3; 
let sticker4; 
let sticker5; 
let sticker6; 
let sticker7; 
let sticker8; 
let sticker9; 
let sticker10; 

function setup() {
  describe('Video capture from the device webcam.');
  createCanvas(800, 800);

  capture = createCapture(VIDEO);

  capture.size(600, 500);

  capture.hide();
}

function draw() {
  background(250);

  push();
  translate(width, 0);
  scale(-1, 1);
  image(capture, 100, 150, 600, 500);
  pop();

  //code reference: https://beta.p5js.org/reference/p5/filter/
    filter(BLUR, 1);
}