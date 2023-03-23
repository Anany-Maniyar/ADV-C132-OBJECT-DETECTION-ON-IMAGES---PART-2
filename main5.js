img = "";

function preload() {
    img = loadImage('bottle.jpg');
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
    text("bottle  74%", 82, 77);
    text("bottle  90%", 255, 97);
    text("bottle  56%", 455, 97);
    noFill();
    stroke("#FF0000");
    rect(72, 63, 120, 420);rect(242, 83, 120, 420);rect(442, 83, 120, 420);
}
