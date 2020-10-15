var font;
var wavyLetters=[];

function preload(){
font = loadFont ('data/MrsEavesOT-Roman.otf');
song = loadSong ('data/Space.mp3')
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
  //song.play();
  //song.loop();
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

  pgleft.noStroke();
  pgleft.textAlign(LEFT, CENTER);
  
  push();
  translate(width/2,0);//xy position of myText1
  scale(-0.8,0.8);//xy position of myText1
  
  
 //taken from textToPoint p5 example
  points=font.textToPoints(myText1, 0, height/2, 5, {sampleFactor: 15, simplifyThreshold: 0 });//detail of myText1
  for (let i = 0; i < points.length; i++) {
    p = points[i];
    wavyLetters.push(new Wavy (p.x, p.y, 255, '', 2));}
    
    bounds=font.textBounds(' '+myText1+ ' ' , 0, height/2, 10); //size of myText1
    console.log(myText1);
 
    beginShape();
    translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    p = points[i];
    

    pgleft.vertex( p.x * width / bounds.w + sin(20 * p.y / bounds.h + millis() / 800) * width / 50, p.y * height / bounds.h); //making the amount of waves and speed
  }
 endShape(CLOSE);
 pop()
  pgleft.text (myText1, width/2, pgleft.height/2);

}
function keyTyped(){
  //background(0);
  if (key === 'u' ){
    myText1 = 'Utopias';
    myText2 = 'Utopias';
  }
  else if (key === 'c'){ 
    myText1 = 'Counteraction';
    myText2 = 'Counteraction';
  }
  else if (key === 'f'){ 
    myText1 = 'Fundamentally unreal';
    myText2 = 'Fundamentally unreal';
  }
  else if (key === 'e'){
    myText1 = 'External space';
    myText2 = 'External space';
  }
  else if (key === 'v' ){
    myText1 = 'Virtual space';
    myText2 = 'Virtual space';
  }
  else if (key === 'l'){
    myText1 = 'Look at myself';
    myText2 = 'Look at myself';
  }
  else if (key === 'h' ){
    myText1 = 'Heterotopias';
    myText2 = 'Heterotopias';
  }
  else if (key === 'j'){
    myText1 = 'Joint experience';
    myText2 = 'Joint experience';
  }
  else if (key === 'b' ){
    myText1 = 'Believe';
    myText2 = 'Believe';
  }
   else if (key === 'd' ){
    myText1 = 'Direct or inverted';
    myText2 = 'Direct or inverted';
  }
   else if (key === 'k' ){
    myText1 = 'Kind of utopia';
    myText2 = 'Kind of utopia';
  }
  else if (key === 'g' ){
    myText1 = 'Given society';
    myText2 = 'Given society';
  }
  else if (key === 'y' ){
    myText1 = 'You and I';
    myText2 = 'You and I';
  }
  else if (key === 'w' ){
    myText1 = 'Which we live';
    myText2 = 'Which we live';
  }
  else if (key === 'q'){
    myText1 = 'Quality';
    myText2 = 'Quality';
  }
  else if (key === 'm'){
    myText1 = 'Mirror';
    myText2 = 'Mirror';
  }
  else if (key === 'i'){
    myText1 = 'I see myself';
    myText2 = 'I see myself';
  }
  else if (key === 't'){
    myText1 = 'There where I am not';
    myText2 = 'There where I am not';
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
    myText1 = 'Placeless place';
    myText2 = 'Placeless place';
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


class Wavy {
 constructor(x, y, size, letter, speed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
 }
 wave() {  //randomwalker
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
