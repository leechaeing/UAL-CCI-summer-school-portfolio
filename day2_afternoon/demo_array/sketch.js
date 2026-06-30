let cities = [
    'Seoul',  
    'Providence',
    'Akita',
]

function setup() {
    createCanvas(400, 400);

    //indexing: getting element from an array 
    //JavaScript doesn't support negative indexing
    let firstElem = cities[0]; //Seoul

    cities.push('Detroit'); //add an element to end of array

    let lastIndex = cities.length - 1;
    let lastElem = cities[lastIndex];

    console.log(lastElem);
    
}

function draw() {
    background(220);
}
