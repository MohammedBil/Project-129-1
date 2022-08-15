song = "";

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() 
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("FF0000");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}

function play()
{
    song.play
    song.setVolume(1);
    song.rate(1);
}

