var song;
var button;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
	song = loadSound("ophelia.mp3");

}

function setup() {
	createCanvas(500, 500);
  angleMode(DEGREES);
	button = createButton("play");
	button.mousePressed(toggleSong);
	button.position(500, 200);
	song.play();
	amp = new p5.Amplitude();
	
	
}

function draw() {
  background(0);
  push();
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  translate(width/2, height/2);
  beginShape();

  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10,100);
    var x = r * cos(i);
    var y = r * sin(i);

    curveVertex(x, y);
    ellipse(x,y, 10,10);
  }



  // for (var i = 0; i < volhistory.length; i++) {
  //   var y = map(volhistory[i], 0, 1, height, 0);
  //   vertex(i, y);
  // }
  endShape();
  pop();
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }






  //ellipse(100, 100, 200, vol * 200);

}



