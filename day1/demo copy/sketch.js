function setup() {
    createCanvas(400, 400);
    
    let answer = 42; // Declared a variable 
    let fav = 2; // Number data type

    console.log(answer + fav); // Print out 44
    console.log(answer - fav);
    console.log(answer * fav);
    console.log(answer / fav);

    let fruit1 = 'apple'; // String data type
    let fruit2 = 'banana'; 

    console.log(fruit1 + ' ' + fruit2); // Print out apple banana

    console.log(`I like ${fruit1}s, but ${fruit2}s no.`); // Print out apple banana

    console.log('cat'[1]); // Print out a. c = 0, t = 2

    console.log(answer.toString());

    let determine = 42==43; // stored value will be a Boolean data type with false value 
    console.log(42==43);

    const name = 'Amy'; // constant
    // name = 'iPhone'; // impossible to reassign

    let huh;
    console.log(huh); // undefined

    let droid = 'BB-8';
    let fromEarth = null; //Non-applicable
    console.log(fromEarth);
 }

function draw() {
    background(0);
    circle(200, 200, 100);
}
