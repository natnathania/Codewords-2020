function preload() {
font = loadFont ('data/CourierStd.otf');
font2 = loadFont ('data/CODEBold.otf');
}
var spin =90;
var letterSize=24;

function setup() {
createCanvas(600,600);
background (225);
fill(0);
angleMode(DEGREES);
//textSize(32);
//textFont (font);
//textFont(font,16);// stating which font and size combined.
textAlign (CENTER);
frameRate(5); // speed of the spin
}


function draw() {
fill(0);//text ink color
translate(300,300);
rotate(spin);
textSize(letterSize);
textFont(font2);
text ('this is codewords', 0,0);
//spin=spin+2;//speeding the speed
spin=map(mouseX,0,600,-90,90);//moving the mouse changes the direction of the spin.
//spin=spin+int(mouseX/50); //speed with mouse. 600/50 = 12.
letterSize=map(mouseY,0,600,8,72);// letter size changes based on position of mouse
stroke(0);
fill(225,20);// shade of grey, and alpha value = fade

pop();
background(240,30);
}
