img = "";
Status = "";

function preload() {
    img = loadImage('bed.png');
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
    text("bed  97%", 130, 150);
    noFill();
    stroke("#FF0000");
    rect(120, 130, 450, 280);
    rect(10, 140, 110, 280);
    text("chair  56%", 20, 160);
}
