let table;

async function setup() {
  createCanvas(300, 300);

  table = await loadTable('/day3/load_table/assets/air-quality.csv', ',', 'header');

  let col = table.getColumn(1);
  let maxVal = max(col);
  let minVal = min(col);

  console.log(col);

  //fill(0);      
  //textSize(16);  

  background(220);

  for (let r = 0; r < table.getRowCount(); r++) {
    
    let red = map(col[r], minVal, maxVal, 0, 255);
    fill(red, 0, 0);
    circle(30 + r * 20, 10, 10);
    //text(col[r], 10, 30 + r * 20);
  }
}

function draw() {
    // background(220);
}