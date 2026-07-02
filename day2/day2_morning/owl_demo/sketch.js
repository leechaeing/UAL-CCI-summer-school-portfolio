let x = [400, 500, 300, 600, 200, 630, 170, 510, 290, 400];
let y = [250, 200, 200, 250, 250, 380, 380, 500, 500, 580];
let g = [120, 200, 50, 70, 150, 100, 200, 90, 250, 0];
let s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function setup() {
    createCanvas(800, 600);
    frameRate(2.5);
}

function draw() {
    background(0);
    translate(0, -25);

    for (let i = 0; i < x.length; i++) {
        owl(x[i], y[i], g[i], s[i]);
    }
}
// based on Lauren Lee McCarthy

// x location, y location, grey colour, scale
function owl (x, y, g, s) {
  push ();  
  translate (x,y);
  scale (s);

  let r = random (1);

  if (r < 0.1) {
    stroke (0);
    strokeWeight (70);
    line (0,-35,0,-65); //body

    noStroke ();
    fill(0);
    ellipse (-17.5, -65, 35, 35); // left eye
    ellipse (17.5, -65, 35, 35); // Right eye
    arc (0, -65, 70, 70, 0, PI);
    
    fill (0);
    ellipse (-14, -65, 8, 8); // left pupil
    ellipse (14, -65, 8, 8);  // right pupil
    quad (0, -58, 4, -51, 0, -44, -4, -51); //beak

  } else {
    stroke (g);
    strokeWeight (70);
    line (0,-35,0,-65); //body

    noStroke();
    fill(255 - g);
    ellipse (-17.5, -65, 35, 35);
    ellipse (17.5, -65, 35, 35); // Right eye
    arc (0, -65, 70, 70, 0, PI);
    
    fill (g);
    ellipse (-14, -65, 8, 8); // left pupil
    ellipse (14, -65, 8, 8);  // right pupil
    quad (0, -58, 4, -51, 0, -44, -4, -51); //beak
  }
  pop ();
}