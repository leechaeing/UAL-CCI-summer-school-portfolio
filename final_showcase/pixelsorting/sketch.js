//original code from Patt Vira https://www.youtube.com/watch?v=nNQk9AMYYGk

let img; 
let sortingDone = false; 
let threshold = 5; // lower threshold will create more distortion 

async function setup() {
    img = await loadImage('assets/trafficlight.jpg');
    createCanvas(400, 400);
    img.resize(400, 0);
}

function draw() {
    background(220);

    if(!sortingDone) {
        img.loadPixels(); // load pixels of the image itself 

        // for(let x = 0; x < img.width; x++) {
        //     sortColumn(x);
        // }

        for(let y = 0; y<img.width; y++) {
            sortRow(y);
        }

        img.updatePixels();
        image(img, 0, 0);
    }

    noLoop(); 
}

// function sortColumn(x) {
//     let y = 0; 
//     while (y < img.height) {
//         while(y < img.height) {
//             let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
//             let r = img.pixels[index + 0];
//             let g = img.pixels[index + 1];
//             let b = img.pixels[index + 2];
//             let bn = brightness(color(r, g, b));

//             if(bn > threshold) { //bn < threshold to switch to dark mode
//                 break; 
//             }
//             y++; 
//         }
//         let startY = y; 

//         while(y < img.height) {
//             let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
//             let r = img.pixels[index + 0];
//             let g = img.pixels[index + 1];
//             let b = img.pixels[index + 2];
//             let bn = brightness(color(r, g, b));

//             if(bn <= threshold) { //bn >= threshold for dark mode
//                 break; 
//             }
//             y++; 
//         }
//         let endY = y - 1; 

//         if(startY < endY) {
//             let sortingArray = [];
//             for(let i = startY; i <= endY; i++) {
//                 let index = (x + i*img.width) *4;
//                 let r = img.pixels[index + 0];
//                 let g = img.pixels[index + 1];
//                 let b = img.pixels[index + 2];
//                 sortingArray.push(color(r, g, b));
//             }

//             sortingArray.sort((a, b) => brightness(a) - brightness(b)); //sorts from dark to light here, swap a and b for light to dark
            
//             for(let i = startY; i <= endY; i++) {
//                 let index = (x + i*img.width) *4;
//                 let c = sortingArray[i - startY];
//                 img.pixels[index + 0] = red(c); 
//                 img.pixels[index + 1] = green(c);
//                 img.pixels[index + 2] = blue(c);
//                 img.pixels[index + 3] = 255;
//             }
//             y++
//         }
//     }

// }

function sortRow(y) {
    let x = 0; 
    while (x < img.height) {
        while(x < img.height) {
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

        while(y < img.height) {
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

            sortingArray.sort((a, b) => brightness(a) - brightness(b)); //sorts from dark to light here, swap a and b for light to dark
            
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