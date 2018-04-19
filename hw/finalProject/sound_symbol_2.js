var drawAgain = false;

// global variable for current song
var currentSong;

var volhistory = [];
var state;

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

	ang_f = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_ANG_XX.mp3");
  dis_f = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_DIS_XX.mp3");
  fea_f = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_FEA_XX.mp3");
  hap_f = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_HAP_XX.mp3");
  sad_f = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_SAD_XX.mp3");

  ang_m = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_ANG_XX.mp3");
  dis_m = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_DIS_XX.mp3");
  fea_m = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_FEA_XX.mp3");
  hap_m = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_HAP_XX.mp3");
  sad_m = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_SAD_XX.mp3");


}

function setup() {

	createCanvas(1100, 700);

	amp = new p5.Amplitude();
	
	
}

function draw() {
background(255);

var incr = 40;
for (var i = 0; i < 5; i++) {
  noStroke();
  if (i == 1) {
    fill(0, 153, 0);
  }
  else if (i == 2) {
    fill(153, 51, 153);
  }
  else if (i == 3) {
    fill(255, 204, 0);
  }
  else if (i == 4) {
    fill(0, 102, 255);
  }
  else {
    fill(204, 0, 0);
  }
  ellipse(50, incr, 30,30);
  incr += 60;
}

// if (state == 0) {
//   background(255);
// }

if (state == 1) {

  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255,0,0);
  noFill();
  push();
  var currentY = map(vol, 0, 1, height, 0);
  //translate(0, height / 2 - currentY);

  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    //ellipse(i,y, 5, 5);
    //console.log(volhistory[i]);
    star(300, 200, volhistory[i]*1000, volhistory[i]*100, volhistory[i]*100); 
  } 
}

if (state == 2) {

  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255,0,0);
  noFill();
  push();
  var currentY = map(vol, 0, 1, height, 0);
  //translate(0, height / 2 - currentY);

  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    //ellipse(i,y, 5, 5);
    //console.log(volhistory[i]);
    star(300, 200, volhistory[i]*1000, volhistory[i]*100, volhistory[i]*100); 
  } 
}

else if (state == 3) {
    fill(0,255,0);
    rect(200, 200, 100, 100);
  }



}

function mousePressed() {
  if (dist(mouseX, mouseY, 50, 40) < 30/2) {
    state = 1;
    ang_f.play();
   
  }
  else if (dist(mouseX, mouseY, 50, 40+60) < 30/2) {
    state = 2;
    dis_f.play();
    redraw();

  }

  else if (dist(mouseX, mouseY, 50, 40+60+60) < 30/2) {
    state = 3;
    drawAgain = true;
    fea_f.play();
  }

  else if (dist(mouseX, mouseY, 50, 40+60+60+60) < 30/2) {
    drawAgain = true;
    hap_f.play();
  }

  else if (dist(mouseX, mouseY, 50, 40+60+60+60+60) < 30/2) {
    drawAgain = true;
    sad_f.play();
  }

 
}

// from p5.js
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}




