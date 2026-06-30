function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    dust(200, 300, 1);
    star(320, 300, 30, 50, 6, 'yellow', 1);
    dust(440, 300, 1);
    star(560, 300, 30, 50, 7, 'pink', 1);
}
// based on Lauren Lee McCarthy

// x location, y location, scale
function dust (x, y, s) {
  push ();  
  translate (x,y);
  scale (s);
  fill(0);
  circle (0, 0, 100); // dust particle
  fill(255);
  ellipse (20, 0, 40, 45); // left eye
  ellipse (-20, 0, 40, 45); // right eye
  fill (0);
  circle (10, 0, 10);
  circle (-10, 0, 10);
  pop ();
}

// x location, y location, radius 1, radius 2, , npoints, color, scale
function star(x, y, r1, r2, npoints, c, s) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    push();
    translate(x, y);
    scale(s);
    fill(c);
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