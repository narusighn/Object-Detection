video="";
Status="";
valueInput="";


function preload(){}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createVideo(VIDEO);
    video.hide();
}

function detect(){
    objectDetection=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detection Started";
    valueInput=document.getElementById("inputOP").value;
}

function modelLoaded(){
    console.log("Model is loaded");
    Status=true;
    
}

function draw(){
    image(video,0,0,480,380);
}