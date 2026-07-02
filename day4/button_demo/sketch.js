let button;

let counter = 0;

function setup() {
  createCanvas(100, 100);

  background(200);

  // Create a button and set its value to 0.
  // Place the button beneath the canvas.
  button = createButton('click me', 'red');
  button.position(300, 500);

  // Call randomColor() when the button is pressed.
  button.mousePressed(updateColor);

  describe('A red square with a button that says "click me" beneath it. The square changes color when the button is clicked.');
}

function draw() {
  // Use the button's value to set the background color.
  let c = button.value();
  background(c);
}

// Set the button's value to a random color.
function updateColor() {
    counter += 1; 
    let colorOptions = ['red', 'green', 'blue', 'yellow'];

    let colorIndex = counter % colorOptions.length;
    let c = colorOptions[colorIndex];

    //let c = random(colorOptions);
     
  button.value(c);
}