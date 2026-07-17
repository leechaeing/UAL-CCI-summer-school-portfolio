let bicycleText; 
let chimneyText;
let busText;
let crosswalkText; 
let trafficText; 
let interface; 

let img; 
let img1; //is there a better way to organize this honestly...
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

let img16; 
let img17; 
let img18; 
let img19; 
let img20; 

let img21; 
let img22; 
let img23; 
let img24; 
let img25; 
let img26; 
let img27; 
let img28; 
let img29; 

let img30; 

let img31; 
let img32; 
let img33; 
let img34; 
let img35; 
let img36; 
let img37; 

let skipButton; 
let allImages = [];
let currentImages = []; 
let currentText; 
let refreshButton; 
let textImage; 
let showTextImage = false; 

let gridPositions = []; // NOT my original code; help from AI 

let sortingDone = false; 
let sq = 130; 
let move = sq + 5; 
let canvas; 

async function setup() {
    interface = await loadImage('assets/interface.png')
    bicycleText = await loadImage('assets/biycletext.png')
    chimneyText = await loadImage('assets/chimneytext.png')
    busText = await loadImage('assets/bustext.png')
    crosswalkText = await loadImage('assets/crosswalktext.png')
    trafficText = await loadImage('assets/trafficlighttext.png')
    textImage = await loadImage('assets/description.png')

    img1 = await loadImage('assets/bicycle1.png')
    img2 = await loadImage('assets/bicycle2.png')
    img3 = await loadImage('assets/bicycle3.png')
    img4 = await loadImage('assets/bicycle4.png')
    img5 = await loadImage('assets/bicycle5.png')
    img6 = await loadImage('assets/bicycle6.png')

    img7 = await loadImage('assets/bus1.png')
    img8 = await loadImage('assets/bus2.png')
    img9 = await loadImage('assets/bus3.png')
    img10 = await loadImage('assets/bus4.png')
    img11 = await loadImage('assets/bus5.png')
    img12 = await loadImage('assets/bus6.png')
    img13 = await loadImage('assets/bus7.png')
    img14 = await loadImage('assets/bus8.png')
    img15 = await loadImage('assets/bus9.png')
    
    img16 = await loadImage('assets/chimney1.png')
    img17 = await loadImage('assets/chimney2.png')
    img18 = await loadImage('assets/chimney3.png')
    img19 = await loadImage('assets/chimney4.png')
    img20 = await loadImage('assets/chimney5.png')

    img21 = await loadImage('assets/cross1.png')
    img22 = await loadImage('assets/cross2.png')
    img23 = await loadImage('assets/cross3.png')
    img24 = await loadImage('assets/cross4.png')
    img25 = await loadImage('assets/cross5.png')
    img26 = await loadImage('assets/cross6.png')
    img27 = await loadImage('assets/cross7.png')
    img28 = await loadImage('assets/cross8.png')
    img29 = await loadImage('assets/cross9.png')

    img30 = await loadImage('assets/glasses.png')

    img31 = await loadImage('assets/traffic1.png')
    img32 = await loadImage('assets/traffic2.png')
    img33 = await loadImage('assets/traffic3.png')
    img34 = await loadImage('assets/traffic4.png')
    img35 = await loadImage('assets/traffic5.png')
    img36 = await loadImage('assets/traffic6.png')
    img37 = await loadImage('assets/traffic7.png')

    interface.resize(405, 0);
    bicycleText.resize(405, 0);
    chimneyText.resize(405, 0); 
    busText.resize(405, 0); 
    crosswalkText.resize(405, 0); 
    trafficText.resize(405, 0); 
    textImage.resize(550, 0);
    currentText = bicycleText; 

    canvas = createCanvas(windowWidth, windowHeight);
    //console.log(windowWidth, windowHeight);
    //canvas.position(0,0);
    //canvas.style('z-index', '0'); //https://www.youtube.com/watch?v=OIfEHD3KqCg

    skipButton = createButton('SKIP'); 
    skipButton.size(104, 49);
    skipButton.position(windowWidth / 2 + 100, height / 2 + 240); //manually matched 
    //skipButton.style('z-index', '-1'); // initially found out from AI suggestion; https://editor.p5js.org/allison.parrish/sketches/SyjX6kglg
    skipButton.style('opacity', '0'); // https://p5js.org/reference/p5.Element/style/
    skipButton.style('background', 'transparent'); 
    skipButton.style('border', 'none');
    skipButton.style('cursor', 'pointer');
    skipButton.mousePressed(skipImage);

    refreshButton = createButton('RESET');
    refreshButton.size(50, 50); 
    refreshButton.position(windowWidth / 2 - 200, height / 2 + 240);
    refreshButton.style('opacity', '0');
    refreshButton.style('border', 'none');
    refreshButton.style('cursor', 'pointer');
    refreshButton.mousePressed(showText); 

    img30.filter(BLUR, 10); // this image was for fun but it being glasses with red, green, yellow lights was so obvious when I wanted it to look like glasses 

    allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37];
    chooseImages(); 

    gridPositions = [ // AI told me about this code I didn't come up with it 
        { x: width / 2, y: height / 2 },                //center 
        { x: width / 2, y: height / 2 + move },         //center bottom 
        { x: width / 2, y: height / 2 - move },         //center top 
        { x: width / 2 - move, y: height / 2 },         //right center 
        { x: width / 2 - move, y: height / 2 - move },  //right top
        { x: width / 2 - move, y: height / 2 + move },  //right bottom
        { x: width / 2 + move, y: height / 2 },         //left center 
        { x: width / 2 + move, y: height / 2 - move },  //left top
        { x: width / 2 + move, y: height / 2 + move }   //left bottom
    ];
}

function draw() {
    background(255); 

    if(!sortingDone) { // ! means not :)) is what I found out? unless I'm wrong but the code works
        let images = currentImages;
        
        for(let i = 0; i < images.length; i++) {
            sortImage(images[i]); 
            // img = images[i];
            // img.resize(140, 0);
            // img.loadPixels();

            // for(let x = 0; x < img.width; x++) {
            //     sortColumn(x);
            // }

            // for(let y = 0; y < img.width; y++) {
            //     sortRow(y);
            // }

            // for(let x = 0; x < img.width; x++) {
            //     sortColumn(x);
            // }

            // for(let y = 0; y < img.width; y++) {
            //     sortRow(y);
            // }

            // img.updatePixels();
            //img.filter(POSTERIZE, 4);
            //img.filter(BLUR, 5);
            // img.filter(INVERT);
        }
        sortingDone = true; 
    }

    imageMode(CENTER); 
    image(currentText, width / 2, height / 2 - 2 * move);
    image(interface, width / 2, height / 2 + move + sq); // these intially looked really messy with me trying to match the interface to my Illustrations graphic but I cleaned it up with global variables BUT it still looks messy 
    image(currentImages[0], width / 2, height / 2, sq, sq); //center 
    image(currentImages[1], width / 2, height / 2 + move, sq, sq); //center bottom 
    image(currentImages[2], width / 2, height / 2 - move, sq, sq); //center top 
    image(currentImages[3], width / 2 - move, height / 2, sq, sq); //right center 
    image(currentImages[4], width / 2 - move, height / 2 - move, sq, sq); //right top
    image(currentImages[5], width / 2 - move, height / 2 + move, sq, sq); //right bottom
    image(currentImages[6], width / 2 + move, height / 2, sq, sq); //left center 
    image(currentImages[7], width / 2 + move, height / 2 - move, sq, sq); //left top
    image(currentImages[8], width / 2 + move, height / 2 + move, sq, sq); //left bottom

    if(showTextImage == true) { // added in last minute..,,,
        imageMode(CENTER); 
        image(textImage, width / 2, height / 2);
    }
} 

function sortColumn(x) { // https://www.youtube.com/watch?v=nNQk9AMYYGk
    let threshold = map(sin(x * 0.15), -1, 1, 0, 30); // tried out something fun(?) that we learned couple sessions before 
    let y = 0; 
    while (y < img.height) {
        while(y < img.height) {
            let index = (x + y*img.width) * 4; //four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let hu = hue(color(r, g, b)); //changed from original code's brightness to hue

            if(hu > threshold) { // < threshold to switch to dark mode
                break; 
            }
            y++; 
        }
        let startY = y; 

        while(y < img.height) {
            let index = (x + y*img.width) * 4; // four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let hu = hue(color(r, g, b));

            if(hu <= threshold) { // >= threshold for dark mode
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

            sortingArray.sort((a, b) => hue(b) - hue(a)); // sorts from light to dark
            
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
    let threshold = map(cos(y * 0.15), -1, 1, 0, 30);
    let x = 0; 
    while (x < img.width) {
        while(x < img.width) {
            let index = (x + y*img.width) * 4; // four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let hu = hue(color(r, g, b));

            if(hu > threshold) { // < threshold to switch to dark mode
                break; 
            }
            x++; 
        }
        let startX = x; 

        while(x < img.width) {
            let index = (x + y*img.width) * 4; // four because each pixel has four values r,g,b,alpha
            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let hu = hue(color(r, g, b));

            if(hu <= threshold) { // >= threshold for dark mode
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

            sortingArray.sort((a, b) => hue(a) - hue(b)); // sorts from  dark to light here 
            
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

function sortImage(imageToSort) { 
    img = imageToSort; 
    img.resize(140, 0); 
    img.loadPixels(); 

    for(let x = 0; x < img.width; x++) {
        sortColumn(x);
     }

    for(let y = 0; y < img.width; y++) {
        sortRow(y);
    }

    img.updatePixels();
}

function skipImage() {
    chooseImages(); 
    sortingDone = false; 

    let textOptions = [bicycleText, chimneyText, crosswalkText, busText, trafficText]; 
    currentText = random(textOptions); 
}

function chooseImages() {
    let shuffled = shuffle(allImages); //https://p5js.org/reference/p5/shuffle/
    currentImages = shuffled.slice(0, 9); 
}

function mousePressed() {
    for(let i = 0; i <gridPositions.length; i++) { // NOT my original code
        let pos = gridPositions[i];
        let left = pos.x - sq / 2; 
        let right = pos.x + sq / 2; 
        let top = pos.y - sq / 2; 
        let bottom = pos.y + sq / 2; 

        if(mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
            newImage(i); 
        }
    }
}

function newImage(index) {
    let newImg = random(allImages); 

    while(currentImages.includes(newImg)) {
        newImg = random(allImages); 
    }

    currentImages[index] = newImg; 
    sortImage(currentImages[index]);

}

function showText() {
    if(showTextImage == false) {
        showTextImage = true; 
    }else {
        showTextImage = false; 
    }
}