let backgroundImage; 
let img1; 
let img2; 
let img3;
let img4;  
let img5; 
let img6; 
let img7; 

    {x: 50,  y: 50,  w: 100, h: 100},
    {x: 160, y: 50,  w: 100, h: 100},
    {x: 270, y: 50,  w: 100, h: 100},
    {x: 50,  y: 160, w: 100, h: 100},
    {x: 160, y: 160, w: 100, h: 100},
    {x: 270, y: 160, w: 100, h: 100},
    {x: 50,  y: 270, w: 100, h: 100}

async function setup() {
    backgroundImage = await loadImage('assets/background.png')
    img1 = await loadImage('assets/trafficlight.jpg')
    img2 = await loadImage('assets/trafficlight2.jpg')
    img3 = await loadImage('assets/trafficlight3.jpg')
    img4 = await loadImage('assets/trafficlight4.jpg')
    img5 = await loadImage('assets/trafficlight5.jpg')
    img6 = await loadImage('assets/trafficlight6.jpg')
    img7 = await loadImage('assets/trafficlight7.jpg')

    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    imageMode(CENTER); 
    image(backgroundImage, width / 2, height / 2);
}