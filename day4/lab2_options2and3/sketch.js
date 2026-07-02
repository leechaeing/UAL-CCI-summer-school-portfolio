// Set the video capture as a global variable.
let capture;

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