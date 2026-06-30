function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    translate(0, -25);
    owl(400, 250, 120, 1);
    owl(500, 200, 200, 1);
    owl(300, 200, 50, 1);
    owl(600, 250, 70, 1);
    owl(200, 250, 150, 1);
    owl(630, 380, 100, 1);
    owl(170, 380, 200, 1);
    owl(510, 500, 90, 1);
    owl(290, 500, 250, 1);
    owl(400, 580, 0, 1);
}
// based on Lauren Lee McCarthy

// x location, y location, grey colour, scale
function owl (x, y, g, s) {
  push ();  
  translate (x,y);
  scale (s);
  stroke (g);
  strokeWeight (70);
  line (0,-35,0,-65); //body
  noStroke ();
  fill(255-g);
  ellipse (-17.5, -65, 35, 35); // left eye
  ellipse (17.5, -65, 35, 35); // Right eye
  arc (0, -65, 70, 70, 0, PI);
  fill (g);
  ellipse (-14, -65, 8, 8); // left pupil
  ellipse (14, -65, 8, 8);  // right pupil
  quad (0, -58, 4, -51, 0, -44, -4, -51); //beak
  pop ();
}