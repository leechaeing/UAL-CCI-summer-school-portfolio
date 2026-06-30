function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    owl(200, 300, 120, 1);
    owl(400, 300, 120, 1);
    owl(600, 300, 120, 1);
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