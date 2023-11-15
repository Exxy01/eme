song = ""
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristy = "";
scoreLeftWrist = "";
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
image(video, 0, 0, 600, 500)

fill("#FFD700")
stroke("#FFD700")
if(scoreLeftWrist > 0.2){


circle(leftwristX, leftwristY, 20);
inNumberLeftWristy = Number(leftwristY);
decimal_remover = floor(inNumberLeftWristY);
volume = decimal_remover/500;
document.getElementById("volume").innerHTML = "volume is " + volume;
song.setVolume(volume);
}
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}
function modelLoaded(){
console.log("Posenet initialized");

}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("left wrist score = " + scoreLeftWrist);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("left wrist x = " + leftWristX + "left wrist y = " + leftWristY);
    console.log("right wrist x = " + rightWristX + "right wrist y = " + rightWristY);
    
}
}