img="";
status="";
things=[];

function setup(){
    camvas=createCanvas(800,500);
    camvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    console.log("narayani");
    document.getElementById("status").innerHTML="status:object detection in progress"
}

function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,800,500);
    if(status==true){
        for(i=0;i<things.length;i++){
            document.getElementById("status").innerHTML="status:"+things.length+" object detected";
            fill("black");
            text(things[i].label,things[i].x,things[i].y);
            stroke("black");
            noFill();
            rect(things[i].x,things[i].y,things[i].width,things[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Cocossd is loaded");
    status=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    
    console.log(results);
    things=results;
}