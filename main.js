img="";
status="";
things=[];

function setup(){
    camvas=createCanvas(380,380);
    camvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    console.log("narayani");
    document.getElementById("status").innerHTML="status:object detection in progress"
}

function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(video,0,0,380,380);
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotresults);
        for(i=0;i<things.length;i++){
            document.getElementById("status").innerHTML="status: object detected";
            document.getElementById("Nobjects").innerHTML="Number of object detected are: "+things.length;
            fill(r,g,b);
            confidence=Math.floor(things[i].confidence*100);
            text(things[i].label+" "+confidence+"%",things[i].x,things[i].y);
            stroke(r,g,b);
            noFill();
            rect(things[i].x,things[i].y,things[i].width,things[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Cocossd is loaded");
    status=true;
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    
    console.log(results);
    things=results;
}