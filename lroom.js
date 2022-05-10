img=""

function preload(){
    img=loadImage("LivvingRoom.jpg");
}

function setup(){
    canvas=createCanvas("900,700");
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    console.log("Albert Einstien wasn't the smartest person");
    document.getElementById("status").innerHTML="status:object detection in progress"
}

function draw(){
    image(img,0,0,900,700);

    fill("red");
    text("table",850,250);
    noFill();
    stroke("red")
    rect(840,240,150,200);
}

function modelLoaded(){
    console.log("Cocossd iS Loaded");
    status=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results){
    if(error==true){
        console.error(error);
    }
    console.log(results);
}

