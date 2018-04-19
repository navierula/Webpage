var drawFA = false;
var drawFD = false;
var drawFF = false;
var drawFH = false;
var drawFS = false;

var drawMA = false;
var drawMD = false;
var drawMF = false;
var drawMH = false;
var drawMS = false;

var volFA = [];
var volFD = [];
var volFF = [];
var volFH = [];
var volFS = [];

var volMA = [];
var volMD = [];
var volMF = [];
var volMH = [];
var volMS = [];

var resetFA = false;
var resetFD = false;
var resetFF = false;
var resetFH = false;
var resetFS = false;

var resetMA = false;
var resetMD = false;
var resetMF = false;
var resetMH = false;
var resetMS = false;


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
background(0);

noStroke();

incr = 150;
for (var i = 0; i < 5; i++) {
  fill(255, 153, 153);
  ellipse((width/2)-200, incr, 60,60);
  incr += 85;

}

push();
textSize(30);
fill(255);
textAlign(CENTER);
text("Emotion Viz :)", (width/2), 200);
pop();

incr = 150;
for (var i = 0; i < 5; i++) {
  fill(102, 204, 255);
  ellipse((width/2)+200, incr, 60,60);
  incr += 85;

}

if (resetFA) {
  resetFA = false;
}

if (resetFD) {
  resetFD = false;
}

if (resetFF) {
  resetFF = false;
}

if (resetFH) {
  resetFH = false;
}

if (resetFS) {
  resetFS = false;
}

if (resetMA) {
  resetMA = false;
}

if (resetMD) {
  resetMD = false;
}

if (resetMF) {
  resetMF = false;
}

if (resetMH) {
  resetMH = false;
}

if (resetMS) {
  resetMS = false;
}



if (drawFA) {

  var vol = amp.getLevel();
  volFA.push(vol);
  //print("vol="+vol); //DEBUG
  stroke(255);
  noFill();
  push();

  decr = (width/2)-250;
  //print("LENGTH="+volFA.length);
  for (var i = 0; i < 15; i++) {
   // print("volFA i="+i);
    ellipse(decr,150,volFA[i]*500,volFA[i]*500)
    decr -=30; 
  }
}

if (drawFD) {

  var vol = amp.getLevel();
  volFD.push(vol);
  stroke(255);
  noFill();
  push();

  decr = (width/2)-250;

  for (var i = 0; i < 15; i++) {
    ellipse(decr,150+85,volFD[i]*500,volFD[i]*500)
    decr -=30;
}

}

if (drawFF) {
  //volFF.length

  var vol = amp.getLevel();
  volFF.push(vol);
  stroke(255);
  noFill();
  push();

  decr = (width/2)-250;

  for (var i = 0; i < 15; i++) {

    ellipse(decr,150+85+85,volFF[i]*500,volFF[i]*500)
    decr -=30;
}

}

if (drawFH) {


  var vol = amp.getLevel();
  volFH.push(vol);
  stroke(255);
  noFill();
  push();

  decr = (width/2)-250;

  for (var i = 0; i < volFH.length; i++) {

    ellipse(decr,150+85+85+85,volFH[i]*500,volFH[i]*500)
    decr -=30;


}

}

if (drawFS) {

  var vol = amp.getLevel();
  volFS.push(vol);
  stroke(255);
  noFill();
  push();

  decr = (width/2)-250;

  for (var i = 0; i < volFS.length; i++) {

    ellipse(decr,150+85+85+85+85,volFS[i]*500,volFS[i]*500)
    decr -=30;
}

}

if (drawMA) {

  var vol = amp.getLevel();
  volMA.push(vol);
  //print("vol="+vol); //DEBUG
  stroke(255);
  noFill();
  push();

  incr = (width/2)+250;
  //print("LENGTH="+volFA.length);
  for (var i = 0; i < 15; i++) {
   // print("volFA i="+i);
    ellipse(incr,150,volMA[i]*500,volMA[i]*500)
    incr +=30; 
  }

}


if (drawMD) {

  var vol = amp.getLevel();
  volMD.push(vol);
  //print("vol="+vol); //DEBUG
  stroke(255);
  noFill();
  push();

  incr = (width/2)+250;
  //print("LENGTH="+volFA.length);
  for (var i = 0; i < 15; i++) {
   // print("volFA i="+i);
    ellipse(incr,150+85,volMD[i]*500,volMD[i]*500)
    incr +=30; 
  }

}

if (drawMF) {

  var vol = amp.getLevel();
  volMF.push(vol);
  //print("vol="+vol); //DEBUG
  stroke(255);
  noFill();
  push();

  incr = (width/2)+250;
  //print("LENGTH="+volFA.length);
  for (var i = 0; i < 15; i++) {
   // print("volFA i="+i);
    ellipse(incr,150+85+85,volMF[i]*500,volMF[i]*500)
    incr +=30; 
  }

}

if (drawMH) {

  var vol = amp.getLevel();
  volMH.push(vol);
  //print("vol="+vol); //DEBUG
  stroke(255);
  noFill();
  push();

  incr = (width/2)+250;
  //print("LENGTH="+volFA.length);
  for (var i = 0; i < 15; i++) {
   // print("volFA i="+i);
    ellipse(incr,150+85+85+85,volMH[i]*500,volMH[i]*500)
    incr +=30; 
  }

}

if (drawMS) {

  var vol = amp.getLevel();
  volMS.push(vol);
  //print("vol="+vol); //DEBUG
  stroke(255);
  noFill();
  push();

  incr = (width/2)+250;
  //print("LENGTH="+volFA.length);
  for (var i = 0; i < 15; i++) {
   // print("volFA i="+i);
    ellipse(incr,150+85+85+85+85,volMS[i]*500,volMS[i]*500)
    incr +=30; 
  }

}





}
// play sounds when each circle is clicked
function mousePressed() {

  if (dist(mouseX, mouseY, (width/2)-200, 150) < 60/2) {

    resetFA = true;
    volFA = [];

    drawFA = true;
    ang_f.play();
}

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85) < 60/2) {

    resetFD = true;
    volFD = [];

    drawFD = true;
    dis_f.play();
  
  }

    else if (dist(mouseX, mouseY, (width/2)-200, 150+85+85) < 60/2) {

    resetFF = true;
    volFF = [];

    drawFF = true;
    fea_f.play();
  
  }

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85+85+85) < 60/2) {

    resetFH = true;
    volFH = [];

    drawFH = true;
    hap_f.play();

  }

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85+85+85+85) < 60/2) {

  resetFS = true;
  volFS = [];

  drawFS = true;
  sad_f.play();

  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150) < 60/2) {

  resetMA = true;
  volMA = [];

  drawMA = true;
  ang_m.play();

  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85) < 60/2) {

  resetMD = true;
  volMD = [];

  drawMD = true;
  dis_m.play();

  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85+85) < 60/2) {

  resetMF = true;
  volMF = [];

  drawMF = true;
  fea_m.play();

  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85+85+85) < 60/2) {

  resetMH = true;
  volMH = [];

  drawMH = true;
  hap_m.play();

  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85+85+85+85) < 60/2) {

  resetMS = true;
  volMS = [];

  drawMS = true;
  sad_m.play();

  }

}









