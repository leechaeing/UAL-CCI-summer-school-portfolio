let bicycletext; 
let interface; 
let img; 
let img1; 
let img2; 
let img3; 
let img4; 
let img5; 
let img6; 
let img7; 
let img8; 
let img9; 
let sortingDone = false; 

async function setup() {
    interface = await loadImage('assets/interface.png')
    bicycletext = await loadImage('assets/biycletext.png')
    img1 = await loadImage('assets/bicycle.jpg')
    img2 = await loadImage('assets/bicycle2.jpg')
    img3 = await loadImage('assets/bus.jpg')
    img4 = await loadImage('assets/bus2.jpg')
    img5 = await loadImage('assets/bus3.jpg')
    img6 = await loadImage('assets/bus4.jpg')
    img7 = await loadImage('assets/bus5.jpg')
    img8 = await loadImage('assets/chimney.jpg')
    img9 = await loadImage('assets/chimney2.jpg')
    interface.resize(405, 0);
    bicycletext.resize(405, 0);

    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255); 

    if(!sortingDone) {
        let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
        
        for(let i = 0; i < images.length; i++) {
            img = images[i];
            img.resize(140, 0);
            img.loadPixels();

            for(let x = 0; x < img.width; x++) {
                sortColumn(x);
            }

            for(let y = 0; y < img.width; y++) {
                sortRow(y);
            }

            // for(let x = 0; x < img.width; x++) {
            //     sortColumn(x);
            // }

            // for(let y = 0; y < img.width; y++) {
            //     sortRow(y);
            // }

            img.updatePixels();
            //img.filter(POSTERIZE, 4);
            //img.filter(BLUR, 5);
            // img.filter(INVERT);
        }
        sortingDone = true; 
    }

    let sq = 130; 
    let move = sq + 5; 
    imageMode(CENTER); 
    image(bicycletext, width / 2, height / 2 - 2 * move);
    image(interface, width / 2, height / 2 + move + sq);
    image(img1, width / 2, height / 2, sq, sq); //center 
    image(img2, width / 2, height / 2 + move, sq, sq); //center bottom 
    image(img3, width / 2, height / 2 - move, sq, sq); //center top 
    image(img4, width / 2 - move, height / 2, sq, sq); //right center 
    image(img5, width / 2 - move, height / 2 - move, sq, sq); //right top
    image(img6, width / 2 - move, height / 2 + move, sq, sq); //right bottom
    image(img7, width / 2 + move, height / 2, sq, sq); //left center 
    image(img8, width / 2 + move, height / 2 - move, sq, sq); //left top
    image(img9, width / 2 + move, height / 2 + move, sq, sq); //left bottom
} 

function sortColumn(x) {
    let threshold = random(0,30);
    let y = 0; 
    while (y < img.height) {
        while(y < img.height) {
            let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let bn = brightness(color(r, g, b));

            if(bn > threshold) { //bn < threshold to switch to dark mode
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

            if(bn <= threshold) { //bn >= threshold for dark mode
                break; 
            }
            y++; 
        }
        let endY = y - 1; 

        if(startY < endY) {
            let sortingArray = [];
            for(let i = startY; i <= endY; i++) {
                let index = (x + i*img.width) *4;
                let r = img.pixels[index + 0];
                let g = img.pixels[index + 1];
                let b = img.pixels[index + 2];
                sortingArray.push(color(r, g, b));
            }

            sortingArray.sort((a, b) => brightness(b) - brightness(a)); //sorts from light to dark
            
            for(let i = startY; i <= endY; i++) {
                let index = (x + i*img.width) *4;
                let c = sortingArray[i - startY];
                img.pixels[index + 0] = red(c); 
                img.pixels[index + 1] = green(c);
                img.pixels[index + 2] = blue(c);
                img.pixels[index + 3] = 255;
            }
            y++
        }
    }

}

function sortRow(y) {
    let threshold = random(0,30);
    let x = 0; 
    while (x < img.width) {
        while(x < img.width) {
            let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let bn = brightness(color(r, g, b));

            if(bn > threshold) { //bn < threshold to switch to dark mode
                break; 
            }
            x++; 
        }
        let startX = x; 

        while(x < img.width) {
            let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let bn = brightness(color(r, g, b));

            if(bn <= threshold) { //bn >= threshold for dark mode
                break; 
            }
            x++; 
        }
        let endX = x - 1; 

        if(startX < endX) {
            let sortingArray = [];
            for(let i = startX; i <= endX; i++) {
                let index = (i + y*img.width) *4;
                let r = img.pixels[index + 0];
                let g = img.pixels[index + 1];
                let b = img.pixels[index + 2];
                sortingArray.push(color(r, g, b));
            }

            sortingArray.sort((a, b) => brightness(a) - brightness(b)); //sorts from  dark to light here 
            
            for(let i = startX; i <= endX; i++) {
                let index = (x + i*img.width) *4;
                let c = sortingArray[i - startX];
                img.pixels[index + 0] = red(c); 
                img.pixels[index + 1] = green(c);
                img.pixels[index + 2] = blue(c);
                img.pixels[index + 3] = 255;
            }
            y++
        }
    }

}