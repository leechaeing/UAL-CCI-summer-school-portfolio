let img1;
let img2;
let img3; 
let img4;
let img5;
let img6; 
let img7;
let bubble; 

async function setup() {
    img1 = await loadImage('/day4/assets/IMG_1165.JPG');
    img2 = await loadImage('/day4/assets/IMG_1167.JPG');
    img3 = await loadImage('/day4/assets/IMG_1171.JPG');
    img4 = await loadImage('/day4/assets/IMG_1178.JPG');
    img5 = await loadImage('/day4/assets/IMG_1206.JPG');
    img6 = await loadImage('/day4/assets/IMG_1207.JPG');
    img7 = await loadImage('/day4/assets/IMG_1213.JPG');
    createCanvas(800, 800);
    //bubble = new Bubble();
}

function draw() {
    
}


function mouseDragged() {
    noStroke();
    fill(255, 255, 255, 100);
    circle(mouseX, mouseY, random(10,50));

    fill(173, 216, 230, 100);
    circle(mouseX, mouseY, random(10,50));

    fill(255, 255, 255, 200); 
    circle(mouseX, mouseY, random(10,50));
}

function keyPressed() {
   if(key === '2') {
        image(img2, random(0, 400), random(0, 400));
   } else if(key === '3') {
        image(img3, random(0, 400), random(0, 400));
   } else if(key === '4') {
        image(img4, random(0, 400), random(0, 400));
   } else if(key === '5') {
        image(img5, random(0, 400), random(0, 400));
   } else if(key === '6') {
        image(img6, random(0, 400), random(0, 400));
   } else if(key === '7') {
        image(img7, random(0, 400), random(0, 400));
   } else if(key === '1') {
        image(img1, random(0, 400), random(0, 400));
   }
   else if (key === '8') {
    createCanvas(800, 800);
   }
}