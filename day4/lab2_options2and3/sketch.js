let capture;
let bgSelect;
let slider;
let heartButton;
let starButton;
let decoButton; 

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
let ears2; 

let earTimer = 0; 
let earImage;
let earPosX;
let earPosY;

//reference to button_demo
let heartCounter = 0; 
let starCounter = 0; 
let decoCounter = 0; 

let currentSticker = null; 
let placedStickers = [];

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

  ears1 = await loadImage('./assets/ears1.png');
  ears2 = await loadImage('./assets/ears2.png'); 

  createCanvas(800, 800); 
  //frameRate(2);

  describe('Video capture from the device webcam.');

  capture = createCapture(VIDEO);
  capture.size(600, 500);
  capture.hide();

  bgSelect = createSelect();
  bgSelect.position(300, 200);
  bgSelect.option('background1');
  bgSelect.option('background2');
  bgSelect.option('background3');
  bgSelect.selected('background1');
  describe('A dropdown to pick a background image.');

  slider = createSlider(0, 5, 0, 1);
  slider.position(300, 300);
  slider.size(90);
  describe('slider to change blur filter.');

  heartButton = createButton('stickers!');
  heartButton.position(300, 400);
  heartButton.mousePressed(cycleHeart);
  describe('A button for heart stickers to decorate.');

  starButton = createButton('more stickers!');
  starButton.position(300, 500);
  starButton.mousePressed(cycleStar);
  describe('A button for star stickers to decorate.');

  decoButton = createButton('more!');
  decoButton.position(300, 600);
  decoButton.mousePressed(cycleDeco);
  describe('A button for ui elements to decorate.');
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

  for (let s of placedStickers) {
    if(s.img) {
      image(s.img, s.x, s.y, 80, 80);
    }
  }

  if(earTimer > 0) {
    image(earImage, earPosX, earPosY, 200, 200); 
    earTimer -= 1; 
  } else if (frameCount % 30 === 0 && random(1) < 0.3) {
     let earOptions = [ears1, ears2];
     earImage = random(earOptions); 
     let earX = [300, 400, 500];
     let earY = [270, 280, 290,, 300];

    earPosX = random(earX); 
    earPosY = random(earY);
    earTimer = 90;
    }
}

function mousePressed() {
  let canvasPos = drawingContext.canvas.getBoundingClientRect();
  let pageX = canvasPos.left + mouseX;
  let pageY = canvasPos.top + mouseY; 

  if(currentSticker === 'button') {
    let b = createButton('button');
    b.position(mouseX, mouseY); 
    placedStickers.push(b);
  } else if(currentSticker === 'slider') {
    let s = createSlider(0, 10, 5); 
    s.position(mouseX, mouseY); 
    placedStickers.push(s); 
  }else if(currentSticker === 'select') {
    let sel = createSelect(); 
    sel.option('select');
    sel.option('Hello World');
    sel.position(mouseX, mouseY); 
    placedStickers.push(sel); 
  }else if(currentSticker) {
    placedStickers.push({ img: currentSticker, x: mouseX, y: mouseY});
  }
}

function cycleHeart() {
  let heartOptions = [heart1, heart2, heart3, heart4];
  let index = heartCounter % heartOptions.length; 
  currentSticker = heartOptions[index];
  heartCounter += 1; 
}

function cycleStar() {
  let starOptions = [star1, star2, star3, star4];
  let index = starCounter % starOptions.length; 
  currentSticker = starOptions[index];
  starCounter += 1; 
}

function cycleDeco() {
  let decoOptions =  ['button', 'slider', 'select'];
  let index = decoCounter % decoOptions.length;
  currentSticker = decoOptions[index];
  decoCounter += 1;
}

//button - ok
//slider - ok
//dropdown - ok

//draw
//stickers - ok
//change frame - ok