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
  background(51);

  image(capture, 0, 0, 600, 500);
  circle(mouseX, mouseY, 50);

  //code reference: https://beta.p5js.org/reference/p5/filter/
    filter(BLUR, 5);
}