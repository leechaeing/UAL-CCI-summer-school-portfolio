let capture;

let background1;
let background2; 
let background3; 

let heart1; 
let heart2; 
let heart3; 
let heart4; 

let star1; 
let star2; 
let star3; 
let star4; 

let ears1; 
let ear2; 

async function setup() {
  background1 = await loadImage('./assets/background1.jpg');
  background2 = await loadImage('./assets/background2.jpg');
  background3 = await loadImage('./assets/background3.jpg');

  heart1 = await loadImage('./assets/heart1.png')
  heart2 = await loadImage('./assets/heart2.png')
  heart3 = await loadImage('./assets/heart3.png');
  heart4 = await loadImage('./assets/heart4.png')

  star1 = await loadImage('./assets/star1.png');
  star2 = await loadImage('./assets/star2.png');
  star3 = await loadImage('./assets/star3.png');
  star4 = await loadImage('./assets/star4.png');

  ear1 = await loadImage('./assets/ear1.png');
  ear2 = await loadImage('./assets/ear2.png'); 

  createCanvas(800, 800); 

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