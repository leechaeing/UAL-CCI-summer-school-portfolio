let cities = [
    'Seoul',  
    'Providence',
    'Akita',
    'Detroit'
]

function setup() {
    createCanvas(400, 400);

    for(let i = 0; i<cities.length; i++){ //i++: every time loop runs, i increases by 1
        let currentCity = cities[i];
        console.log(currentCity);
    }
    
}

function draw() {
    background(220);
}
