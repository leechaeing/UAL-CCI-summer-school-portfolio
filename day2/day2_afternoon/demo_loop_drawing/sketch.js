let circlesCount = 20;
let canvasWidth = 400;
let canvasHeight = 400;

let spacing = canvasHeight / circlesCount;

let offset = spacing * 0.5;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    noLoop(); //because we're not animating
}

function draw() {
    background(220);
    
    for(let i = 0; i<circlesCount; i++){ //count from 0 to 10 thus i<10
        circle(200, i*spacing + offset, 20);
    }
}