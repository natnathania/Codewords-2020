var font;
var wigglyLetters=[];
function preload(){
font = loadFont ('data/MrsEavesOT-Roman.otf');

}
var pg, pgleft, pgright,p;
var text;
var myText1 = '';
var myText2 = 'type any key';
var points;
var bounds;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pgleft = createGraphics(width/2, height);
  pgright = createGraphics(width/2, height);
  pgright.textSize(30);
  
  pgleft.background(0);
  pgright.background(0);
  
  pgright.textFont(font);
  pgright.fill(255);
  
  pgright.textAlign(LEFT,CENTER);
  cursor(CROSS);
}

function draw() {
  background(0,50); // comment here to have trail effect...
  image(pgright, width/2, 0, width/2, height);
  
  pgright.background(0);
  pgright.text (myText2, 200, pgright.height/2);
  
  //-----------------------------------

  pgleft.stroke(255,0,0);
  pgleft.textAlign(LEFT, CENTER);
  
  push();
  translate(width/2-50,0);
  scale(-0.5,1);
  
  points=font.textToPoints(myText1, 0, height/2, 10, {sampleFactor: 30, simplifyThreshold: 0 });
  for (let i = 0; i < points.length; i++) {
    p = points[i];
    wigglyLetters.push(new Wiggle (p.x, p.y, 255, '', 2));}
    
    bounds=font.textBounds(' '+myText1+ ' ' , 0, height/2, 10);
    console.log(myText1);
 
  
    beginShape();
    translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    p = points[i];
    
  //wigglyLetters.push(new Wiggle (p.x, p.y, color, letter, speed));
    pgleft.vertex( p.x * width / bounds.w + sin(5 * p.y / bounds.h + millis() / 1000) * width / 30, p.y * height / bounds.h);
  }
 endShape(CLOSE);
 pop()
  pgleft.text (myText1, width/2, pgleft.height/2);

}
function keyTyped(){
  background(0);
  if (key === 'u' ){//not working
    myText1 = 'Utopias';
    myText2 = 'Utopias';
  }
  else if (key === 'c' ){ // the letter c not working/showing
    myText1 = 'Counteraction';
    myText2 = 'Counteraction';
  }
  else if (key === 'f'){ // the letter f not working/showing
    myText1 = 'First';
    myText2 = 'First';
  }
  else if (key === 'f'){ // the letter f not working/showing
    myText1 = 'First';
    myText2 = 'First';
  }
  else if (key === 'e'){// not working
    myText1 = 'Enables';
    myText2 = 'Enables';
  }
  if (key === 'v' ){
    myText1 = 'Virtual space';
    myText2 = 'Virtual space';
  }
  else if (key === 'l'){
    myText1 = 'Look';
    myText2 = 'Look';
  }
  else if (key === 'h' ){
    myText1 = 'Heterotopias';
    myText2 = 'Heterotopias';
  }
  else if (key === 'j'){
    myText1 = 'Joint experience';
    myText2 = 'Joint experience';}
  else if (key === 'm'){
    myText1 = 'Mirror';
    myText2 = 'Mirror';
  }
  else if (key === 'i'){
    myText1 = 'I see myself there where I am not';
    myText2 = 'I see myself there where I am not';
  }
  else if (key === 's'){
    myText1 = 'Shadow';
    myText2 = 'Shadow';
  }
  else if (key === 'o'){
    myText1 = 'Own visibility';
    myText2 = 'Own visibility';
  }
  else if (key === 'p'){
    myText1 = 'Places';
    myText2 = 'Places';
  }
  else if (key === 'a'){
    myText1 = 'Absence';
    myText2 = 'Absence';
  }
  else if (key === 'n'){
    myText1 = 'No real place';
    myText2 = 'No real place';
  }
  else if (key === 'r'){
  myText1 = 'Reality';
  myText2 = 'Reality';}
  else {
  myText1 = '';
  myText2 = '';
  }
  
  key='';

}
//// taken from the p5 textToPoint example
//  points=font.textToPoints(myText1, width/2, height/2, 30, {sampleFactor: 30, simplifyThreshold: 0});
//  bounds=font.textBounds(myText1, width/2, height/2, 30);
//  //console.log(-bounds.x * width);
//  pgleft.beginShape(); 
//  pgleft.translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
//  for (let i = 0; i < points.length; i++) {
//    let p = points[i];
//    wigglyLetters.push(new Wiggle (p.x, p.y, color, letter, speed));
//    vertex( p.x * width / bounds.w + sin(5 * p.y / bounds.h + millis() / 1000) * width / 30, p.y * height / bounds.h);
//  }
//  pgleft.endShape(CLOSE);
class Wiggle {
 constructor(x, y, size, letter, speed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
 }
 wiggle() {  //randomwalker
   // x+=4  add 4 to the variable
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);
   if (this.x <0){
     this.x += this.speed;
   }
 }
 display() {
   textSize(this.textSize);
   text(this.letter, this.x, this.y);
 }
}

