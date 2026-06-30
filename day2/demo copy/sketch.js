let circleX = 700;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 0, 220);
   //draw a circle using variable as input 
    circle(circleX, 300, 50);

    circleX = circleX - 100;

    circle(circleX, 300, 50);

    circleX = circleX - 200;

    circle(circleX, 300, 50);

    circleX = circleX - 300;

    circle(circleX, 300, 50);
    noLoop();
}
