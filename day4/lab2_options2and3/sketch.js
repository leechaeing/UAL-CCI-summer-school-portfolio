let capture;
let bgSelect;
let slider;

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

let ear1; 
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

  ear1 = await loadImage('./assets/ears1.png');
  ear2 = await loadImage('./assets/ears2.png'); 

  createCanvas(800, 800); 

  describe('Video capture from the device webcam.');
  createCanvas(800, 800);

  capture = createCapture(VIDEO);
  capture.size(600, 500);
  capture.hide();

  bgSelect = createSelect();
  bgSelect.position(150, 800);
  bgSelect.option('background1');
  bgSelect.option('background2');
  bgSelect.option('background3');
  bgSelect.selected('background1');
  describe('A dropdown to pick a background image.');

  slider = createSlider(0, 5, 0, 1);
  slider.position(300, 800);
  slider.size(90);
  describe('slider to change blur filter.');
}


function draw() {
  let bgChoice = bgSelect.selected();
  let currentBackground; 

  if(bgChoice === 'background1') {
    currentBackground = background1; 
  }else if(bgChoice === 'background2') {
    currentBackground = background2; 
  }else if(bgChoice === 'background3') {
    currentBackground = background3;
  }

  image(currentBackground, 0, 0, 800, 800);

  push();
  translate(width, 0);
  scale(-1, 1);
  image(capture, 100, 150, 600, 500);
  pop();

  let blurriness = slider.value()
  filter(BLUR, blurriness);
}

//button
//slider - ok
//dropdown - ok

//draw
//stickers
//change frame - ok