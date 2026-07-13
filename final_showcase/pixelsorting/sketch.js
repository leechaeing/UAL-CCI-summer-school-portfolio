let img; 

async function setup() {
    img = await loadImage('assets/trafficlight.jpg');
    createCanvas(400, 400);
}

function draw() {
    background(220);
    image(img, 0, 0);
}