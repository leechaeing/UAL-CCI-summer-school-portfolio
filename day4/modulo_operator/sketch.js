//https://www.w3schools.com/jsref/jsref_oper_remainder.asp
// remainder, or modulo, operator

function setup() {
    createCanvas(800, 600);

    for(let i = 0; i < 10; i++) {
        let divider = 10;
        let result = i % divider; 
        console.log(`${i} divided by ${divider} has a remainder of ${result}`);};

        // even and odd number pattern 
        // console.log(i % 2);
    }

function draw() {
    background(220);
}
