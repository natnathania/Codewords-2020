function preload() {
font = loadFont ('data/CourierStd.otf');
font2 = loadFont ('data/CODEBold.otf');
}

function setup() {
createCanvas(600,600);
background (225);
fill(0);
//textSize(32);
//textFont (font);
//textFont(font,16);// stating which font and size combined.
textAlign (CENTER);
}


function draw() {
textSize(30);
textFont(font);
text ('hello world', 300,100);
textSize(20);
textFont(font2);
text ('this is codewords', 300,300);
textSize(12);
textFont(font);
text (':)', 300, 500);
}
