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

	createCanvas(700, 200);
	button = createButton("pause");
	button.mousePressed(toggleSong);
	button.position(875, 200);
  sel = createSelect();
  sel.position(220, 200);

  sel.option("Select an Utterance!");

  sel.option("Female - Anger");
  sel.option("Female - Disgust");
  sel.option("Female - Fear");
  sel.option("Female - Happiness");
  sel.option("Female - Sadness");

  sel.option("Male - Anger");
  sel.option("Male - Disgust");
  sel.option("Male - Fear");
  sel.option("Male - Happiness");
  sel.option("Male - Sadness");

  sel.changed(myUtterance);
	amp = new p5.Amplitude();
	
	
}

function draw() {
  background(0);

  if (drawAgain) {

  background(0);
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

function myUtterance() {
  var item = sel.value();
  switch(item) {

    case "Female - Anger": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      fea_f.stop();
      fea_m.stop();
      hap_f.stop();
      hap_m.stop();
      sad_f.stop();
      sad_m.stop();
      ang_m.stop();
      ang_f.play();
      currentSong = ang_f;
      break;

    case "Female - Disgust": 
      drawAgain = true;
      ang_f.stop();
      ang_m.stop();
      fea_f.stop();
      fea_m.stop();
      hap_f.stop();
      hap_m.stop();
      sad_f.stop();
      sad_m.stop();
      dis_m.stop();
      dis_f.play();
      currentSong = dis_f;
      break;

    case "Female - Fear": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      ang_f.stop();
      ang_m.stop();
      hap_f.stop();
      hap_m.stop();
      sad_f.stop();
      sad_m.stop();
      fea_m.stop();
      fea_f.play();
      currentSong = fea_f;
      break;

    case "Female - Happiness": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      fea_f.stop();
      fea_m.stop();
      ang_f.stop();
      ang_m.stop();
      sad_f.stop();
      sad_m.stop();
      hap_m.stop();
      hap_f.play();
      currentSong = hap_f;
      break;

    case "Female - Sadness": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      fea_f.stop();
      fea_m.stop();
      hap_f.stop();
      hap_m.stop();
      ang_f.stop();
      ang_m.stop();
      sad_m.stop();
      sad_f.play();
      currentSong = sad_f;
      break;

    case "Male - Anger": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      fea_f.stop();
      fea_m.stop();
      hap_f.stop();
      hap_m.stop();
      ang_f.stop();
      sad_f.stop();
      sad_m.stop();
      ang_m.play();
      currentSong = ang_m;
      break;

    case "Male - Disgust": 
      drawAgain = true;
      ang_f.stop();
      ang_m.stop();
      fea_f.stop();
      fea_m.stop();
      hap_f.stop();
      hap_m.stop();
      sad_f.stop();
      sad_m.stop();
      dis_f.stop();
      dis_m.play();
      currentSong = dis_m;
      break;

    case "Male - Fear": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      ang_f.stop();
      ang_m.stop();
      hap_f.stop();
      hap_m.stop();
      sad_f.stop();
      sad_m.stop();
      fea_f.stop();
      fea_m.play();
      currentSong = fea_m;
      break;

    case "Male - Happiness": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      fea_f.stop();
      fea_m.stop();
      ang_f.stop();
      ang_m.stop();
      sad_f.stop();
      sad_m.stop();
      hap_f.stop();
      hap_m.play();
      currentSong = hap_m;
      break;

    case "Male - Sadness": 
      drawAgain = true;
      dis_f.stop();
      dis_m.stop();
      fea_f.stop();
      fea_m.stop();
      hap_f.stop();
      hap_m.stop();
      ang_f.stop();
      ang_m.stop();
      sad_f.stop();
      sad_m.play();
      currentSong = sad_m;
      break;


  }





}





