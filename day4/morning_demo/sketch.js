function setup() {
    createCanvas(600, 600);

    background(0);
}

function draw() {

}

function mouseDragged() {
    circle(mouseX, mouseY, 20);
}

function keyPressed() {
   if(key === 'a') {
        fill(random(255), random(255), random(255));
   } else if(key === 's') {
        background(random(255), random(255), random(255));
   }
}