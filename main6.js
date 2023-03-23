img = "";

function preload() {
    img = loadImage('basket.png');
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
    text("bowl  74%", 85, 278);
    text("banana  74%", 195, 58);
    noFill();
    stroke("#FF0000");
    rect(72, 263, 400, 150);rect(182, 43, 280, 220);
}
