function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(120);

    drawFlower(200, 200);
    drawFlower(100, 100);


}

function drawFlower(centerX, centerY) {
    push(); // Save the current drawing state
    translate(centerX, centerY);    
    noStroke();
    fill('yellow');
    circle(0, 0, 20); 

    fill('lightblue');
    circle(30, 0, 20);
    circle(-30, 0, 20);
    circle(0, 30, 20);
    circle(0, -30, 20);
    pop(); // Restore the previous drawing state
}