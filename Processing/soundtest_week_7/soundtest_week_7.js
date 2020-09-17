var song;
var analyzer;
let img;

function preload() {
song = loadSound ('data/HeartBeat[SOUNDEFFECT].mp3');
}

function setup() {
//song = loadSound ('data/HeartBeat[SOUNDEFFECT].mp3');//associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(0, 10);
  fill(255,0,0);
  var volume = analyzer.getLevel();
  volume*=400;
  ellipse(width/2,height/2,volume,volume);
  fill(255);
  textSize(volume);
  text('IM ALIVE!', width/2, height/2);

  
}

function mousePressed() {
  if (song.isPlaying()) {
    background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play();
    
  }
}
