song1="";
song2="";

function preload()
{
    song1=loadSound("Butter.mp3");
    song2=loadSound("Dynamite.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    camera=createCapture(VIDEO);
    camera.hide();
}

function draw()
{
    image(camera, 0, 0, 600, 500);
}