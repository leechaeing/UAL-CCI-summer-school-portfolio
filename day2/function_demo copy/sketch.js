function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(120);

    drawFlower(200, 200);
    drawFlower(100, 300);
    drawFlower(150, 100);
}

function drawFlower(centerX, centerY) {
    noStroke();
    fill('yellow');
    circle(centerX, centerY, 20); 

    fill('lightblue');
    circle(centerX + 30, centerY, 20);
    circle(centerX - 30, centerY, 20);
    circle(centerX, centerY + 30, 20);
    circle(centerX, centerY - 30, 20);
}