let pg;
var myText1 = ('In an unreal, virtual space');
var myText2 = ('These heterotopias');
var myText3 = ('joint experience');
function setup() {
  createCanvas(1000, 1000);
  pgleft = createGraphics(500, 1000);
  pgright = createGraphics(500, 100);
  textSize(32);
  textFont("Times");
  
}

function draw() {
  background(200);
  pgleft.background(255);
  pgright.background(255);
  pgleft.noStroke(0);
  fill(0);
  pgleft.text (myText1,pgleft.width/2, pgleft.height/2,500,500);
 // pgright.text (myText2,pgright.width/2, pgright.height/2,800,500);
  image(pgleft, 0, 0,500,1000);
  image(pgright, 500, 0, 500, 1000);
}

function keyTyped(){ 
  if (key === 't'){ 
    myText2 = 'These heterotopias'; // if i press h, the word "heterotopias" would appear on both canvas
  } else
  value = 0; // if no one push any key, background will be white.
  //if (key === 't'){
}
