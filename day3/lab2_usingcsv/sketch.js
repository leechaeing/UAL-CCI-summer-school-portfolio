let table;
let count = 8;
let canvasWidth = 800;
let canvasHeight = 800;
let spacing = canvasHeight / count;
let offset = spacing * 0.5;

let phValues = [];
let minPH, maxPH;

let secchiValues = [];
let minSecchi, maxSecchi;

let salintyValues = [];
let minSalinty, maxSalinty;

async function setup() {
    createCanvas(800, 800);

    table = await loadTable('/day3/lab2_usingcsv/assets/waterquality.csv', ',', 'header');

    let col = table.getColumn('pH (standard units)');

    phValues = [];
    for (let i = 0; i < col.length; i++) {
        if(col[i].length > 0) {
            let value = Number(col[i]);
            phValues.push(value);
        }
    }

    maxPH = max(phValues);
    minPH = min(phValues);

    let secchiCol = table.getColumn('Secchi Depth (m)');

    secchiValues = [];
    for (let i = 0; i < col.length; i++) {
        if(col[i].length > 0) {
            let value = Number(col[i]);
            secchiValues.push(value);
        }
    }

    maxSecchi = max(secchiValues);
    minSecchi = min(secchiValues);

    let salintyCol = table.getColumn('Salinity (ppt)');

    salintyValues = [];
    for (let i = 0; i < col.length; i++) {
        if(col[i].length > 0) {
            let value = Number(col[i]);
            salintyValues.push(value);
        }
    }

    maxSalinty = max(salintyValues);
    minSalinty = min(salintyValues);

    background(220);

    for (let r = 0; r < table.getRowCount(); r++) {
        let red = map(col[r], minPH, maxPH, 0, 255);
        fill(red, 0, 0); 
        circle(30 + r * 20, 10, 10);
    }
}

function draw() {
    background(255);

    for(let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {

            let ph = phValues[i * count + j];
            let pHdiameter = map(ph, minPH, maxPH, 2, spacing);

            fill(255, 0, 0);
            noStroke();
            circle(
                i * spacing + offset,
                j * spacing + offset,
                pHdiameter
            );

            let secchi = secchiValues[i * count + j];
            let secchiDiameter = map(secchi, minSecchi, maxSecchi, 2, spacing * 0.7);

            fill(25, 0, 255);
            noStroke();
            circle(
                i * spacing + offset,
                j * spacing + offset,
                secchiDiameter
            );
    
            let salinity = salintyValues[i * count + j];
            let salinityDiameter = map(salinity, minSalinty, maxSalinty, 2, spacing * 0.3);

            fill(244, 252, 3); 
            noStroke();
            circle(
                i * spacing + offset,
                j * spacing + offset,
                salinityDiameter
            );
        }
    }
}
