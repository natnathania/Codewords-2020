var font;
function preload(){
  font = loadFont ('data/MrsEavesOT-Roman.otf');
}

var pg, pgleft, pgright;
var text;
var myText1 = '';
var myText2 = 'type any key';
var points;
var bounds;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pgleft = createGraphics(windowWidth/2, windowHeight);
  pgright = createGraphics(windowWidth/2, windowHeight);
  pgleft.textSize(30);
  pgright.textSize(30);
  cursor(CROSS);

 
  
}

function draw() {
  //background(200);
  pgleft.background(0);
  pgright.background(0);
  pgleft.noStroke(0);

  pgleft.textFont(font);
  pgright.textFont(font);

  pgleft.fill(255);
  pgright.fill(255);
  pgleft.textAlign(LEFT, CENTER);
  pgleft.translate(width,0);
  pgleft.scale(-1,1);
  pgright.textAlign(LEFT,CENTER);
  pgright.text (myText2, 200, pgright.height/2);
  
  //bounds=font.textBounds(myText1, 0, pgleft.height/2);
  points=font.textToPoints(myText1, 200, pgleft.height/2);
  pgleft.stroke(255,0,0);
  pgleft.text (myText1, width/2, pgleft.height/2);
  for (var j=0;j<points.length; j++){
    pgleft.ellipse(points[j].x,points[j].y,10,10);//trying to test if the text to point function works by creating circles
  //pgleft.point(points[j].x, points[j].y);
  let p = points[j];
    vertex(
      p.x * width / bounds.w +
        sin(20 * p.y / bounds.h + millis() / 1000) * width / 30,
      p.y * height / bounds.h
    );
  }
  endShape(CLOSE);
 }
 
  image(pgleft, 0,0, width/2,windowHeight);
  image(pgright, windowWidth/2, 0, windowWidth/2, windowHeight);
   
   
}

function keyTyped(){ 
  if (key === 'u' ){
    myText1 = 'Utopias';
    myText2 = 'Utopias';
  }
  else if (key === 'c' ){ // the letter c not working/showing
    myText1 = 'Counteraction';
    myText2 = 'Counteraction';
  }
  else if (key === 'f'){ // the letter f not working/showing
    myText1 = 'Function';
    myText2 = 'Function'; 
    } 
    else if (key === 'g'){ // the letter g not working/showing
    myText1 = 'Glass';
    myText2 = 'Glass'; 
    } 
  if (key === 'v' ){
    myText1 = 'virtual space';
    myText2 = 'virtual space';
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
    myText2 = 'Joint experience';
  } 
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
    myText2 = 'Reality'; 
    } 
  else {
   myText1 = '';
   myText2 = '';
  }
  key='';
}
