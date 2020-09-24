# Week 9 | Research

mirroring: https://editor.p5js.org/kan352/sketches/BkMtGLIJx , https://editor.p5js.org/ly1210/sketches/HktdECdnQ
examples of unreadable text: https://www.openprocessing.org/sketch/813395 , https://www.openprocessing.org/sketch/879647
blur: https://www.openprocessing.org/sketch/623979?fbclid=IwAR3rSg1jXTHEEQKTMbzbROrZbFevE4UwME4kAVov68YMnl3z9imw6uw8uOs
textToPoint: https://p5js.org/reference/#/p5.Font/textToPoints
Translation: https://github.com/processing/p5.js/wiki/Processing-transition

## Typing...
<img src = "wip.JPEG">
Ive been working on creating different canvases and displyaing text on each canvas. Since I want to use the keyTyped function, I tried to figure out how to a sentence would appear if the user types a letter.

Code:

let pg;
let value = 0;
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
  //pgleft.text (myText1,pgleft.width/2, pgleft.height/2,500,500);
 // pgright.text (myText2,pgright.width/2, pgright.height/2,800,500);
  //text("In an unreal virtual space,0,0)";
  //pgright.ellipse(pgright.width / 2, pgright.height / 2, 50, 50);
  image(pgleft, 0, 0,500,1000);
  image(pgright, 500, 0, 500, 1000);
}

function keyTyped(){
  if (key === 'h'){ 
    displayText = 'heterotopias'; // if i press h, the word "heterotopias" would appear on both canvas
  } else
  value = 255; // if no one push any key, background will be white.
  if (key === 't'){
}
}
