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
    
    for(let i = 0; i<circlesCount; i++){ 
        for(let j = 0; j<circlesCount; j++){
            circle(
                i*spacing + offset, //i for x-axis
                j*spacing + offset, //j for y-axis
                20
            )
        }
    }
}