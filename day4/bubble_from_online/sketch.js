let bubbles = [];

function setup() {
  createCanvas(600, 400);
  // Create some initial floating bubbles
  for (let i = 0; i < 10; i++) {
    bubbles.push(new Bubble(random(width), random(height), random(30, 60)));
  }
}

function draw() {
  background(20, 30, 50); // Deep background

  // Update and display all bubbles
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].float();
    bubbles[i].display();
    
    // Remove off-screen bubbles to keep memory clean
    if (bubbles[i].isOffScreen()) {
      bubbles.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Loop backwards to check for popped bubbles safely
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].isClicked(mouseX, mouseY)) {
      bubbles[i].pop(); // Optional: Trigger pop effect
      bubbles.splice(i, 1); // Remove from array
      break; // Stop checking after popping one bubble
    }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1.5, -0.5);
    // Semi-transparent RGBA color for soap-like look
    this.color = color(random(150, 255), random(150, 255), 255, 150); 
  }

  float() {
    this.x += this.xSpeed + random(-0.5, 0.5); // Add wiggle
    this.y += this.ySpeed;
  }

  display() {
    // Draw soap bubble outline
    stroke(255);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.x, this.y, this.r * 2);

    // Add a specular highlight
    noStroke();
    fill(255, 255, 255, 200);
    ellipse(this.x - this.r / 3, this.y - this.r / 3, this.r / 2);
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.r;
  }

  isOffScreen() {
    return this.y < -this.r;
  }

  pop() {
    // You could add particle explosion effects or trigger a sound here!
    console.log("Pop!");
  }
}