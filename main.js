function preload() {

}
function setup(){
canvas=createCanvas(650,500);
canvas.position(450,200);
video=createCapture(VIDEO);
video.hide()
}
function draw(){
image (video,120,120,400,300);
fill (0,255,0);
stroke (0,0,255);
circle (80,80,60);
circle (550,80,60);
circle (80,465,60);
circle (550,465,60);
fill(255,0,0);
stroke (0,0,255);
rect (70,110,20,327)
rect (540,110,20,327)
rect (109,460,412,20)
rect (109,71,412,20)
}
function take_snapshot(){
    save ("filter.png")
}