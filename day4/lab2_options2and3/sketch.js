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

//https://p5js.org/reference/p5/createSelect/

let mySelect;

function setup() {
  createCanvas(100, 100);

  // Create a dropdown and place it beneath the canvas.
  mySelect = createSelect();
  mySelect.position(0, 100);

  // Add color options.
  mySelect.option('red');
  mySelect.option('green');
  mySelect.option('blue');
  mySelect.option('yellow');

  // Set the selected option to "red".
  mySelect.selected('red');

  describe('A red square with a dropdown menu beneath it. The square changes color when a new color is selected.');
}

function draw() {
  // Use the selected value to paint the background.
  let c = mySelect.selected();
  background(c);
}