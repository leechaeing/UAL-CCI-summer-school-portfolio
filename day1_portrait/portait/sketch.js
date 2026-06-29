let faceCenter = 400;

function setup() {
    createCanvas(800, 800);
    frameRate(5);
}

function draw() {
    background(50);

    strokeWeight(1);

    let eyeWidth = random(50,100);
    let eyeHeight = random(50,100);

    let pupilSize = random(10,eyeWidth/2);
    let pupilR = random(0,255);
    let pupilG = random(0,255);
    let pupilB = random(0,255);

    let cheekSize = random(100,200);
    let cheekR = random(150,255);

    let mouthWidth = random(30,80);
    let mouthHeight = random(30,80);

    let noseSize = random(20,50);

    let eyebrowSize = random(0,100);

    fill('white');
    ellipse(faceCenter, faceCenter, 500, 600); //face 

    fill(cheekR, 0, 0);
    circle(faceCenter + 150, faceCenter, cheekSize); //left cheek
    circle(faceCenter - 150, faceCenter, cheekSize); //right cheek
    arc(faceCenter, faceCenter + 150, mouthWidth, mouthHeight, 0, PI); //mouth
    
    fill('black');
    quad(faceCenter - 200, faceCenter - 150, faceCenter - 50, faceCenter - 150, faceCenter - 30, faceCenter - 120, faceCenter - 210, faceCenter - 130); //left eyebrow
    quad(faceCenter + 200, faceCenter - 150, faceCenter + 50, faceCenter - 150, faceCenter + 30, faceCenter - 120, faceCenter + 210, faceCenter - 130); //right eyebrow

    fill('white');
    ellipse(faceCenter - 120, faceCenter - 70, eyeWidth, eyeHeight); //left eye
    ellipse(faceCenter + 120, faceCenter - 70, eyeWidth, eyeHeight); //right eye

    fill(pupilR, pupilG, pupilB);
    ellipse(faceCenter - 120, faceCenter - 70, pupilSize, pupilSize); //left pupil
    ellipse(faceCenter + 120, faceCenter - 70, pupilSize, pupilSize); //right pupil

    fill('white');
    triangle(faceCenter, faceCenter - noseSize, faceCenter - noseSize, faceCenter + noseSize, faceCenter + noseSize, faceCenter + noseSize); //nose

    stroke('black');
    strokeWeight(5);
    point(faceCenter + 125, faceCenter);
    point(faceCenter + 180, faceCenter - 50);

    

}