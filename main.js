///Variable////
wristR_x="";
wristR_y="";
wristR_score="";

function setup(){
    ////canvas///
    cnv=createCanvas(800,600);
    cnv.parent("Canvas");
    ///webcam///
    cam=createCapture(VIDEO);
    cam.size(800,600);
    cam.hide();
    ///intialise model///
    pose=ml5.poseNet(cam,modelLoaded);
    pose.on('pose',Outcomes);
}

function modelLoaded(){
    console.log("Elon Musks says AI robots are dangerous!!!!! Please listen to the Tesla guy");
}

///gotPoses function///
function Outcomes(results){
    if(results.length>0){
        console.log(results);
        wristR_x=results[0].pose.rightWrist.x;
        wristR_y=results[0].pose.rightWrist.y;
        wristR_score=results[0].pose.rightWrist.score;
    }
}

function draw(){
    image(cam,0,0,800,550);
    if(wristR_score>0.2){
        fill(255,0,0);
        stroke("black");
        circle(35,wristR_x,wristR_y);
    }

}