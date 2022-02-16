LeftWristX = 0;
LeftWristY = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10, 50);

    canvas = createCanvas(500, 550);
    canvas.position(550, 70);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#0000FF');
    fill('#F90093');
    textSize(difference);
    text('Aren', 50, 400);
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function gotPoses(results, error){
    if(error){
        console.error(error);   
    }
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+LeftWristX+"  rightWristX = "+rightWristX+"difference"+difference);
        console.log("leftWristY = "+LeftWristX+"  rightWristY = "+rightWristX+"difference"+difference);
    
    }
}