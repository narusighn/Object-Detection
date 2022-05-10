img=""
status="";
things=[];

function preload(){
    img=loadImage("Kitchen.jpg");
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


    if(things.length>0){
        for(i=0;i<things.length;++){
            document.getElementById("status").innerHTML="No of Object Detected"+things.length;
            fill("red");
            text(things[i].label,things[i].x,things[i].y);
            stroke("red");
            noFill();
            rect(things[i].x,things[i].y,things[i].width,things[i].height);

        }
    }

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
    things=results;
}