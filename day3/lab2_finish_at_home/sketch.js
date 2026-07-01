let table;
let count = 15;
let canvasWidth = 800;
let canvasHeight = 800;
let spacing = canvasHeight / count;
let offset = spacing * 0.5;

let phValues = [];
let minPH, maxPH;

let secchiValues = [];
let minSecchi, maxSecchi;

async function setup() {
  createCanvas(800, 800);

  table = await loadTable('/day3/lab2_finish_at_home/assets/waterquality.csv', ',', 'header');

  // Grab the pH column (by name is safer than by index)
  let col = table.getColumn('pH (standard units)');

  // Convert to numbers and drop any blanks/NaNs so they don't break min/max
  phValues = [];
  for (let i = 0; i < col.length; i++) {
    let value = Number(col[i]);
    if (!isNaN(value)) {
      phValues.push(value);
    }
  }

  maxPH = max(phValues);
  minPH = min(phValues);

  // Grab the Secchi Depth column and clean it up the same way
  let secchiCol = table.getColumn('Secchi Depth (m)');

  secchiValues = [];
  for (let i = 0; i < secchiCol.length; i++) {
    let value = Number(secchiCol[i]);
    if (!isNaN(value)) {
      secchiValues.push(value);
    }
  }

  maxSecchi = max(secchiValues);
  minSecchi = min(secchiValues);

  console.log(phValues);

  background(220);

  for (let r = 0; r < table.getRowCount(); r++) {
    let red = map(col[r], minPH, maxPH, 0, 255);
    fill(red, 0, 0);
    circle(30 + r * 20, 10, 10);
    //text(col[r], 10, 30 + r * 20);
  }
}

function draw() {
  background(250);

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      // Pick a pH value for this grid cell, cycling through the data
      let index = (i * count + j) % phValues.length;
      let ph = phValues[index];

      // Map pH range to a usable circle diameter (e.g. 2px to spacing)
      let diameter = map(ph, minPH, maxPH, 2, spacing * 0.9);

      fill(150, 0, 0);
      noStroke();
      circle(
        i * spacing + offset,
        j * spacing + offset,
        diameter
      );

      // Pick a Secchi Depth value for this grid cell, cycling through the data
      let secchiIndex = (i * count + j) % secchiValues.length;
      let secchi = secchiValues[secchiIndex];

      // Map Secchi Depth range to a diameter, then draw on top of the pH circle
      let secchiDiameter = map(secchi, minSecchi, maxSecchi, 10, spacing * 0.9);

      fill(0, 0, 200);
      circle(
        i * spacing + offset,
        j * spacing + offset,
        secchiDiameter
      );
    }
  }
}