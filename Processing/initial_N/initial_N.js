function setup() {
createCanvas (500,500);
background (200,162,200);
}


function draw() {
fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
noStroke();
rect (80,100,50,300);
rect (300,100,50,300);
translate(width/2, height/2);
rotate(PI/-4.0);
rect(-38,-200, 50, 320);

}
