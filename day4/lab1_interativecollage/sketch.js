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

let fishImage = []; 
let waterImage = [];

async function setup() {
    img1 = await loadImage('./assets/fish1.png');
    img2 = await loadImage('./assets/fish2.png');
    img3 = await loadImage('./assets/fish3.png');
    img4 = await loadImage('./assets/fish4.png');
    img5 = await loadImage('./assets/fish5.png');
    img6 = await loadImage('./assets/fish6.png');
    img7 = await loadImage('./assets/fish7.png');
    img8 = await loadImage('./assets/fish8.png');
    img9 = await loadImage('./assets/fish9.png');
    img10 = await loadImage('./assets/fish10.png');
    img11 = await loadImage('./assets/fish11.png');
    img12 = await loadImage('./assets/fish12.png');
    img13 = await loadImage('./assets/fish13.png');
    img14 = await loadImage('./assets/fish14.png');
    img15 = await loadImage('./assets/fish15.png');
    water1 = await loadImage('./assets/water1.jpg');
    water2 = await loadImage('./assets/water2.jpg');
    water3 = await loadImage('./assets/water3.jpg');

    fishImage = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
    waterImage = [water1, water2, water3];

    createCanvas(800, 800);

   let randomWater = waterImage[int(random(waterImage.length))];
   image(randomWater, 0, 0, 800, 800);
}

function mouseDragged() {
    noStroke();
    fill(255, 255, 255, 100);
    circle(mouseX, mouseY, random(10, 50));

    fill(173, 216, 230, 100);
    circle(mouseX, mouseY, random(10, 50));

    fill(255, 255, 255, 200); 
    circle(mouseX, mouseY, random(10, 50));
}

function keyPressed() {
   if(key === ' ') {
        let randomFish = fishImage[int(random(fishImage.length))];
        let randomSize = random(100, 300); 
        let x = random(0, width);
        let y = random(0, height); 

        image(randomFish, x, y, randomSize, randomSize);
   } else if (keyCode === 13) {
          let randomWater = waterImage[int(random(waterImage.length))];

          image(randomWater, 0, 0, 800, 800);
   }
}