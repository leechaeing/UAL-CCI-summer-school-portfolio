let circleX = 100;
let spacing = 50;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 0, 220);
   //draw a circle using variable as input 
    circle(circleX, 300, 50);

    circleX = circleX + spacing;
    circle(circleX, 300, 50);

    spacing = spacing * 1.2;

    circleX = circleX + spacing;
    circle(circleX, 300, 50);

    spacing = spacing * 1.2;

    circleX = circleX + spacing;
    circle(circleX, 300, 50);

    spacing = spacing * 1.2;

    circleX = circleX + spacing;
    circle(circleX, 300, 50);

    noLoop();
}
