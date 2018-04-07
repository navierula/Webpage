var song_1;
var song_2;

var button;


var drawAgain = false;

// global variable for current song
var currentSong;

var volhistory = [];

function toggleSong() {
  if (currentSong.isPlaying()) {
    currentSong.pause();
    button.html("play");
  } else {
    currentSong.play();
    button.html("pause");
  }
}

// pass in a different variable


function preload() {
	song_1 = loadSound("crazyInLove.mp3");
  song_2 = loadSound("ifIWereABoy.mp3");

}

function setup() {

	createCanvas(700, 200);
	button = createButton("pause");
	button.mousePressed(toggleSong);
	button.position(500, 200);
  sel = createSelect();
  sel.position(210, 200);
  sel.option("Select a Song!")
  sel.option("Crazy In Love");
  sel.option("If I Were A Boy");
  sel.changed(mySong);
	amp = new p5.Amplitude();
	
	
}

function draw() {
  background(0);

  if (drawAgain) {

  background(27, 185, 150);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  push();
  var currentY = map(vol, 0, 1, height, 0);
  //translate(0, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    //ellipse(i,y, 5, 5);
    //console.log(volhistory[i]);
    vertex(i, y);
  }
  push();
  fill(255);
  ellipse(i,y, 3, 3);
  pop();
  endShape();

  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  push();
  stroke(0);
  line(volhistory.length, 0, volhistory.length, height);
  pop();

}

}

function mySong() {
  var item = sel.value();
  switch(item) {
    case "Crazy In Love":
      drawAgain = true;
      song_2.stop();
      song_1.play();
      currentSong = song_1;
      break;
    case "If I Were A Boy":
      drawAgain = true;
      song_1.stop();
      song_2.play();
      currentSong = song_2;
      break;
  }

}





