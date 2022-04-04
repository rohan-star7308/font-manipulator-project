rwx=0;
lwx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#969A97');
    fill("#F90093");
    textSize(difference);
    text("Rohan",50,400);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rwx=results[0].pose.rightWrist.x;
        lwx=results[0].pose.leftWrist.x;
        difference=floor(lwx-rwx);
    }
}
