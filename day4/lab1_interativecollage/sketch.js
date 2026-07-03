let img1;
let img2;
let img3; 
let img4;
let img5;
let img6; 
let img7;
let img8; 
let img9;
let img10;
let img11;
let img12;
let img13; 
let img14; 
let img15; 
let water1; 
let water2;
let water3;

async function setup() {
    img1 = await loadImage('./day4/assets/fish1.png');
    img2 = await loadImage('./day4/assets/fish2.png');
    img3 = await loadImage('./day4/assets/fish3.png');
    img4 = await loadImage('./day4/assets/fish4.png');
    img5 = await loadImage('./day4/assets/fish5.png');
    img6 = await loadImage('./day4/assets/fish6.png');
    img7 = await loadImage('./day4/assets/fish7.png');
    img8 = await loadImage('./day4/assets/fish8.png');
    img9 = await loadImage('./day4/assets/fish9.png');
    img10 = await loadImage('./day4/assets/fish10.png');
    img11 = await loadImage('./day4/assets/fish11.png');
    img12 = await loadImage('./day4/assets/fish12.png');
    img13 = await loadImage('./day4/assets/fish13.png');
    img14 = await loadImage('./day4/assets/fish14.png');
    img15 = await loadImage('./day4/assets/fish15.png');
    water1 = await loadImage('./day4/assets/water1.png');
    water2 = await loadImage('./day4/assets/water2.png');
    water3 = await loadImage('./day4/assets/water3.png');
    createCanvas(800, 800);
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