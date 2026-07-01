function setup() {
    createCanvas(800, 600);
    greeting(); //prints once to prevent browser slowly
    frameRate(2);
}

function draw() {
    background(220);
    greeting(); //prints but slowly due to frameRate(2)
}

function greeting() {
    console.log('Hello, World!');
}