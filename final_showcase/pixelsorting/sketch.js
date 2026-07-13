//original code from Patt Vira https://www.youtube.com/watch?v=nNQk9AMYYGk

let img; 
let sortingDone = false; 
let threshold = 50; // lower threshold will create more distortion 

async function setup() {
    img = await loadImage('assets/trafficlight.jpg');
    createCanvas(400, 400);
    img.resize(400, 0);
}

function draw() {
    background(220);

    if(!sortingDone) {
        img.loadPixels(); // load pixels of the image itself 

        for(let x = 0; x < img.width; x++) {
            sortColumn(x);
        }

        img.updatePixels();
        image(img, 0, 0);
    }

    noLoop(); 
}

function sortColumn(x) {
    let y = 0; 
    while (y < img.height) {
        while(y < img.height) {
            let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let bn = brightness(color(r, g, b));

            if(bn > threshold) {
                break; 
            }
            y++; 
        }
        let startY = y; 

        while(y < img.height) {
            let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let bn = brightness(color(r, g, b));

            if(bn <= threshold) {
                break; 
            }
            y++; 
        }
        let endY = y-1; 
    }

}