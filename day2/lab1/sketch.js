function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    dust(100, 300, 1);
    star(220, 300, 30, 50, 6, 'yellow', 1);
    dust(340, 300, 1);
    star(460, 300, 30, 50, 7, 'pink', 1);
    dust(580, 300, 1);
    star(700, 300, 30, 50, 5, 'lightblue', 1);
    star(100, 150, 20, 40, 5, 'pink', 0.8);
    dust(220, 150, 0.7);
    star(340, 150, 20, 40, 4, 'white', 0.8);
    dust(460, 150, 0.7);
    star(580, 150, 20, 40, 8, 'lightgreen', 0.8);
    dust(700, 150, 0.7);
    star(100, 450, 20, 40, 9, 'lightblue', 0.8);
    dust(220, 450, 0.7);
    star(340, 450, 20, 40, 6, 'lightgreen', 0.8);
    dust(460, 450, 0.7);
    star(580, 450, 20, 40, 4, 'yellow', 0.8);
    dust(700, 450, 0.7);

}
// based on Lauren Lee McCarthy

// x location, y location, scale
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