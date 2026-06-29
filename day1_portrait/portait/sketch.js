let faceCenter = 400;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(50);

    fill('white');
    ellipse(faceCenter, faceCenter, 500, 600); //face 

    fill('red');
    circle(faceCenter + 150, faceCenter, 150); //left cheek
    circle(faceCenter - 150, faceCenter, 150); //right cheek

   fill('black');
    quad(faceCenter - 200, faceCenter - 150, faceCenter - 50, faceCenter - 150, faceCenter - 30, faceCenter - 120, faceCenter - 210, faceCenter - 130); //left eye
    quad(faceCenter + 200, faceCenter - 150, faceCenter + 50, faceCenter - 150, faceCenter + 30, faceCenter - 120, faceCenter + 210, faceCenter - 130); //right eye

    fill('white');
    ellipse(faceCenter - 120, faceCenter - 70, 70, 50); //left eye
    ellipse(faceCenter + 120, faceCenter - 70, 70, 50); //right eye

    fill('black');
    ellipse(faceCenter - 120, faceCenter - 70, 30, 30); //left pupil
    ellipse(faceCenter + 120, faceCenter - 70, 30, 30); //right pupil

    fill('white');
    triangle(faceCenter, faceCenter - 30, faceCenter - 30, faceCenter + 60, faceCenter + 30, faceCenter + 60); //nose

    fill('red');
    arc(faceCenter, faceCenter + 150, 200, 100, 0, PI); //mouth
    
}