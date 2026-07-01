let tflData;

async function setup() {
    createCanvas(800, 600);

    // you may need these later for other TFL API services
    // const appId = 'YOUR_API_ID'; // insert your obtained API ID here
    // const apiKey = 'YOUR_API_KEY'; // insert your obtained API key here
    
    let mode = 'overground'; // options: tube, bus, overground, tram
    let response = await fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`);
    tflData = await response.json();

    // print all data so that we could inspect
    console.log(tflData);

    for( let i=0; i< tflData.length; i++ ) {
        let lineInfo = tflData[i];
        let disruptions = lineInfo["disruptions"]
        // if there are any disruptions, print
        if(disruptions.length > 0) {
            console.log(lineInfo["name"], lineInfo["disruptions"].length)
        }
    }
}

function draw() {
    background(220);
}