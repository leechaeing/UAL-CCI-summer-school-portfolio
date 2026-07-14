let interface1; 
let interface2;
let img1; 
let img2; 
let img3;
let img4;  
let img5; 
let img6; 
let img7; 

    // {x: 50,  y: 50,  w: 100, h: 100},
    // {x: 160, y: 50,  w: 100, h: 100},
    // {x: 270, y: 50,  w: 100, h: 100},
    // {x: 50,  y: 160, w: 100, h: 100},
    // {x: 160, y: 160, w: 100, h: 100},
    // {x: 270, y: 160, w: 100, h: 100},
    // {x: 50,  y: 270, w: 100, h: 100}

async function setup() {
    interface1 = await loadImage('assets/interface.png')
    interface2 = await loadImage('assets/interface2.png')
    img1 = await loadImage('assets/trafficlight.jpg')
    img2 = await loadImage('assets/trafficlight2.jpg')
    img3 = await loadImage('assets/trafficlight3.jpg')
    img4 = await loadImage('assets/trafficlight4.jpg')
    img5 = await loadImage('assets/trafficlight5.jpg')
    img6 = await loadImage('assets/trafficlight6.jpg')
    img7 = await loadImage('assets/trafficlight7.jpg')
    interface1.resize(405, 0);
    interface2.resize(405,0);
    //console.log(interface2.height);

    createCanvas(windowWidth, windowHeight);
    //console.log(windowHeight);
    //console.log(windowWidth);
}

function draw() {
    background(255);

    let sq = 130; 
    let move = sq + 5; 
    imageMode(CENTER); 
    image(interface1, width / 2, height / 2 - 2 * move);
    image(interface2, width / 2, height / 2 + move + sq);
    image(img1, width / 2, height / 2, sq, sq); //center 
    image(img2, width / 2, height / 2 + move, sq, sq); //center bottom 
    image(img3, width / 2, height / 2 - move, sq, sq); //center top 
    image(img4, width / 2 - move, height / 2, sq, sq); //right center 
    image(img5, width / 2 - move, height / 2 - move, sq, sq); //right top
    image(img6, width / 2 - move, height / 2 + move, sq, sq); //right bottom
    image(img7, width / 2 + move, height / 2, sq, sq); //left center 
    image(img7, width / 2 + move, height / 2 - move, sq, sq); //left top
    image(img7, width / 2 + move, height / 2 + move, sq, sq); //left bottom

}