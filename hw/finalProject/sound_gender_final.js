// define variable for title's font
var hangingLetters;
var exo;

// initialize variables to draw female utterances
var drawFA = false;
var drawFD = false;
var drawFF = false;
var drawFH = false;
var drawFS = false;

// initialize variables to draw male utterances
var drawMA = false;
var drawMD = false;
var drawMF = false;
var drawMH = false;
var drawMS = false;

// initialize arrays to store female voice amplitude
var volFA = [];
var volFD = [];
var volFF = [];
var volFH = [];
var volFS = [];

// initialize arrays to store male voice amplitude
var volMA = [];
var volMD = [];
var volMF = [];
var volMH = [];
var volMS = [];

// reset variables to reset drawings for female utterances
var resetFA = false;
var resetFD = false;
var resetFF = false;
var resetFH = false;
var resetFS = false;

// reset variables to reset drawings for male utterances
var resetMA = false;
var resetMD = false;
var resetMF = false;
var resetMH = false;
var resetMS = false;


function preload() {

  // load ttf font file
  hangingLetters = loadFont("hangingLetters.ttf");
  exo = loadFont("exo-medium.ttf")

  // female utterances
	ang_f_1 = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_ANG_XX.mp3");
  dis_f_1 = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_DIS_XX.mp3");
  fea_f_1 = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_FEA_XX.mp3");
  hap_f_1 = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_HAP_XX.mp3");
  sad_f_1 = loadSound("utterances/female_voices/MaybeTomorrowItWillBeCold/audio/1074_MTI_SAD_XX.mp3");

  ang_f_2 = loadSound("utterances/female_voices/TheAirplaneIsAlmostFull/audio/1091_TAI_ANG_XX.mp3");
  dis_f_2 = loadSound("utterances/female_voices/TheAirplaneIsAlmostFull/audio/1091_TAI_DIS_XX.mp3");
  fea_f_2 = loadSound("utterances/female_voices/TheAirplaneIsAlmostFull/audio/1091_TAI_FEA_XX.mp3");
  hap_f_2 = loadSound("utterances/female_voices/TheAirplaneIsAlmostFull/audio/1091_TAI_HAP_XX.mp3");
  sad_f_2 = loadSound("utterances/female_voices/TheAirplaneIsAlmostFull/audio/1091_TAI_SAD_XX.mp3");

  ang_f_3 = loadSound("utterances/female_voices/IWonderWhatThisIsAbout/audio/1002_IWW_ANG_XX.mp3");
  dis_f_3 = loadSound("utterances/female_voices/IWonderWhatThisIsAbout/audio/1002_IWW_DIS_XX.mp3");
  fea_f_3 = loadSound("utterances/female_voices/IWonderWhatThisIsAbout/audio/1002_IWW_FEA_XX.mp3");
  hap_f_3 = loadSound("utterances/female_voices/IWonderWhatThisIsAbout/audio/1002_IWW_HAP_XX.mp3");
  sad_f_3 = loadSound("utterances/female_voices/IWonderWhatThisIsAbout/audio/1002_IWW_SAD_XX.mp3");

  // male utterances
  ang_m_1 = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_ANG_XX.mp3");
  dis_m_1 = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_DIS_XX.mp3");
  fea_m_1 = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_FEA_XX.mp3");
  hap_m_1 = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_HAP_XX.mp3");
  sad_m_1 = loadSound("utterances/male_voices/ThatIsExactlyWhatHappened/audio/1070_TIE_SAD_XX.mp3");

  ang_m_2 = loadSound("utterances/male_voices/We'llStopInACoupleOfMinutes/audio/1068_WSI_ANG_XX.mp3");
  dis_m_2 = loadSound("utterances/male_voices/We'llStopInACoupleOfMinutes/audio/1068_WSI_DIS_XX.mp3");
  fea_m_2 = loadSound("utterances/male_voices/We'llStopInACoupleOfMinutes/audio/1068_WSI_FEA_XX.mp3");
  hap_m_2 = loadSound("utterances/male_voices/We'llStopInACoupleOfMinutes/audio/1068_WSI_HAP_XX.mp3");
  sad_m_2 = loadSound("utterances/male_voices/We'llStopInACoupleOfMinutes/audio/1068_WSI_SAD_XX.mp3");

  ang_m_3 = loadSound("utterances/male_voices/IWouldLikeANewAlarmClock/audio/1001_IWL_ANG_XX.mp3");
  dis_m_3 = loadSound("utterances/male_voices/IWouldLikeANewAlarmClock/audio/1001_IWL_DIS_XX.mp3");
  fea_m_3 = loadSound("utterances/male_voices/IWouldLikeANewAlarmClock/audio/1001_IWL_FEA_XX.mp3");
  hap_m_3 = loadSound("utterances/male_voices/IWouldLikeANewAlarmClock/audio/1001_IWL_HAP_XX.mp3");
  sad_m_3 = loadSound("utterances/male_voices/IWouldLikeANewAlarmClock/audio/1001_IWL_SAD_XX.mp3");

  // create lists to store emotion type for females
  ang_f_lst = [ang_f_1, ang_f_2, ang_f_3];
  dis_f_lst = [dis_f_1, dis_f_2, dis_f_3];
  fea_f_lst = [fea_f_1, fea_f_2, fea_f_3];
  hap_f_lst = [hap_f_1, hap_f_2, hap_f_3];
  sad_f_lst = [sad_f_1, sad_f_2, sad_f_3];

  // create lists to store emotion type for males
  ang_m_lst = [ang_m_1, ang_m_2, ang_m_3];
  dis_m_lst = [dis_m_1, dis_m_2, dis_m_3];
  fea_m_lst = [fea_m_1, fea_m_2, fea_m_3];
  hap_m_lst = [hap_m_1, hap_m_2, hap_m_3];
  sad_m_lst = [sad_m_1, sad_m_2, sad_m_3];

}

function setup() {

	createCanvas(1300, 700);
	amp = new p5.Amplitude();
  frameRate(10);
  img_f = loadImage("woman_face.jpg");
  img_m = loadImage("man_face.jpg");
	
}

function draw() {
background(0);
noStroke();
img_f.resize(600,600);
img_m.resize(600,600);
image(img_f, -410, 30);
image(img_m, 1090, -40);

incr = 150;
for (var i = 0; i < 5; i++) {

  if (i == 0) {
    fill(255, 77, 77);
  }

  else if (i == 1) {
    fill(153, 204, 0);
  }

  else if (i == 2) {
    fill(172, 57, 172);
  }

  else if (i == 3) {
    fill(255, 255, 77);
  }

  else {
    fill(51, 153, 255);
  }

  ellipse((width/2)-200, incr, 60,60);
  incr += 85;

}

push();
textSize(70);
fill(255);
textAlign(CENTER);
textFont(hangingLetters);
text("Emotion Echo Chamber", (width/2), 60);
pop();

push();
textSize(13);
fill(255);
textAlign(CENTER);
textFont(exo);
text("Anne Frank once said:", (width/2), 140);
text("'But feelings can't be ignored...",(width/2), 155);
text("no matter how unjust or ungrateful they seem.'", (width/2), 170);

text("Emotions pervade every aspect of our lives",(width/2), 195);
text("and sometimes are most visible in the way we choose", (width/2), 210);
text("to communicate thoughts to one another.", (width/2), 225);

text("This project visualizes the amplitude of utterances", (width/2), 240);
text("pertaining to five emotion categories:",(width/2), 255);

fill(255, 77, 77);
text("ANGER", (width/2), 280);
fill(153, 204, 0);
text("DISGUST", (width/2), 295);
fill(172, 57, 172);
text("FEAR",(width/2), 310);
fill(255, 255, 77);
text("HAPPINESS",(width/2), 325);
fill(51, 153, 255);
text("SADNESS",(width/2), 340);
fill(255);
text("Speech on the left is spoken by females.", (width/2), 365);
text("Speech on the right is spoken by males.", (width/2), 380);

text("Data was retrieved from the CREMA-D dataset.", (width/2), 405);


// text("This project seeks to visualize the differences")

pop();

incr = 150;
for (var i = 0; i < 5; i++) {

  if (i == 0) {
    fill(255, 77, 77);
  }

  else if (i == 1) {
    fill(153, 204, 0);
  }

  else if (i == 2) {
    fill(172, 57, 172);
  }

  else if (i == 3) {
    fill(255, 255, 77);
  }

  else {
    fill(51, 153, 255);
  }

  // if (dist(mouseX, mouseY, (width/2)+200, incr) < 60/2) {
  //   fill(255);
  //   ellipse((width/2)+200, incr, 60,60);
  // }

  ellipse((width/2)+200, incr, 60,60);
  incr += 85;

}

// switch bool values of reset variables to reset drawings
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
  stroke(255, 77, 77);
  noFill();
  push();

  decr = (width/2)-250;
  for (var i = 0; i < 7; i++) {
    ellipse(decr,150,volFA[i]*650,volFA[i]*650)
    decr -=25; 
  }
}

if (drawFD) {
  var vol = amp.getLevel();

  volFD.push(vol);
  stroke(153, 204, 0);
  noFill();
  push();

  decr = (width/2)-250;
  for (var i = 0; i < 7; i++) {
    ellipse(decr,150+85,volFD[i]*650,volFD[i]*650)
    decr -=25;
  }
}

if (drawFF) {
  var vol = amp.getLevel();

  volFF.push(vol);
  stroke(172, 57, 172);
  noFill();
  push();

  decr = (width/2)-250;
  for (var i = 0; i < 7; i++) {
    ellipse(decr,150+85+85,volFF[i]*650,volFF[i]*650)
    decr -=25;
  }
}

if (drawFH) {
  var vol = amp.getLevel();

  volFH.push(vol);
  stroke(255, 255, 77);
  noFill();
  push();

  decr = (width/2)-250;
  for (var i = 0; i < 7; i++) {
    ellipse(decr,150+85+85+85,volFH[i]*650,volFH[i]*650)
    decr -=25;
  }
}

if (drawFS) {
  var vol = amp.getLevel();

  volFS.push(vol);
  stroke(51, 153, 255);
  noFill();
  push();

  decr = (width/2)-250;
  for (var i = 0; i < 7; i++) {
    ellipse(decr,150+85+85+85+85,volFS[i]*650,volFS[i]*650)
    decr -=25;
  }
}

if (drawMA) {
  var vol = amp.getLevel();

  volMA.push(vol);
  stroke(255, 77, 77);
  noFill();
  push();

  incr = (width/2)+250;
  for (var i = 0; i < 7; i++) {
    ellipse(incr,150,volMA[i]*650,volMA[i]*650)
    incr +=25; 
  }
}

if (drawMD) {
  var vol = amp.getLevel();

  volMD.push(vol);
  stroke(153, 204, 0);
  noFill();
  push();

  incr = (width/2)+250;
  for (var i = 0; i < 7; i++) {
    ellipse(incr,150+85,volMD[i]*650,volMD[i]*650)
    incr +=25; 
  }
}

if (drawMF) {
  var vol = amp.getLevel();

  volMF.push(vol);
  stroke(172, 57, 172);
  noFill();
  push();

  incr = (width/2)+250;
  for (var i = 0; i < 7; i++) {
    ellipse(incr,150+85+85,volMF[i]*650,volMF[i]*650)
    incr +=25; 
  }
}

if (drawMH) {
  var vol = amp.getLevel();

  volMH.push(vol);
  stroke(255, 255, 77);
  noFill();
  push();

  incr = (width/2)+250;
  for (var i = 0; i < 7; i++) {
    ellipse(incr,150+85+85+85,volMH[i]*650,volMH[i]*650)
    incr +=25; 
  }
}

if (drawMS) {
  var vol = amp.getLevel();

  volMS.push(vol);
  stroke(51, 153, 255);
  noFill();
  push();

  incr = (width/2)+250;
  for (var i = 0; i < 7; i++) {
    ellipse(incr,150+85+85+85+85,volMS[i]*650,volMS[i]*650)
    incr +=25; 
  }
}
}

// function to play sound when each circle is clicked
function mousePressed() {
  if (dist(mouseX, mouseY, (width/2)-200, 150) < 60/2) {
    resetFA = true;
    volFA = [];
    drawFA = true;
    random(ang_f_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85) < 60/2) {
    resetFD = true;
    volFD = [];
    drawFD = true;
    random(dis_f_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85+85) < 60/2) {
    resetFF = true;
    volFF = [];
    drawFF = true;
    random(fea_f_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85+85+85) < 60/2) {
    resetFH = true;
    volFH = [];
    drawFH = true;
    random(hap_f_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)-200, 150+85+85+85+85) < 60/2) {
    resetFS = true;
    volFS = [];
    drawFS = true;
    random(sad_f_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150) < 60/2) {
    resetMA = true;
    volMA = [];
    drawMA = true;
    random(ang_m_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85) < 60/2) {
    resetMD = true;
    volMD = [];
    drawMD = true;
    random(dis_m_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85+85) < 60/2) {
    resetMF = true;
    volMF = [];
    drawMF = true;
    random(fea_m_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85+85+85) < 60/2) {
    resetMH = true;
    volMH = [];
    drawMH = true;
    random(hap_m_lst).play();
  }

  else if (dist(mouseX, mouseY, (width/2)+200, 150+85+85+85+85) < 60/2) {
    resetMS = true;
    volMS = [];
    drawMS = true;
    random(sad_m_lst).play();
  }
}









