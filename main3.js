img = "";

function preload() {
    img = loadImage('TV.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(370, 220);   
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(erroe);
    }
    console.log(results);
}


function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV  88%", 190, 280);
    noFill();
    stroke("#FF0000");
    rect(170, 260, 250, 170);
}
