let colors = [
    'pink',
    'lightgreen',
    'yellow',
    'lightblue',
    'white',
]

let count = 15; 
let canvasWidth = 800;
let canvasHeight = 800; 
let spacing = canvasHeight / count; 
let offset = spacing * 0.5

function setup() {
    createCanvas(825, 800);
    //noLoop();
    frameRate(2);
}

function draw() {
    background(80);

    for(let i = 0; i<count; i++) {
        for(let j = 0; j<count; j++){
            dust(
                i*spacing + offset, 
                j*spacing + offset, 
                0.2,
            )
            star(
                i*spacing + offset * 2,
                j*spacing + offset,
                5,
                10,
                6, 
                random(colors),
                1
            )
        }
    }
}

// x location, y location, radius, scale)
function dust (x, y, s) {
  push ();  
  translate (x,y);
  scale (s);
  fill(0);
  star (0, 0, 50, 60, 100, 'black', 1); // dust particle
  fill(255);
  ellipse (20, 0, 40, 45); // left eye
  ellipse (-20, 0, 40, 45); // right eye
  fill (0);
  circle (10, 0, 10);
  circle (-10, 0, 10);
  pop ();
}

function star(x, y, r1, r2, npoints, c, s) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    push();
    translate(x, y);
    scale(s);
    fill(c);
    noStroke();
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = cos(a) * r2;
      let sy = sin(a) * r2;
      vertex(sx, sy);
      sx = cos(a + halfAngle) * r1;
      sy = sin(a + halfAngle) * r1;
      vertex(sx, sy);
    }

    endShape(CLOSE);
    pop();
}