var button_ma;
var button_md;
var button_mf;
var button_mh;
var button_ms;

var button_fa;
var button_fd;
var button_ff;
var button_fh;
var button_fs;



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

	createCanvas(1100, 700);


  button_ma = createButton("Male - Anger");
  button_md = createButton("Male - Disgust");
  button_mf = createButton("Male - Fear");
  button_mh = createButton("Male - Happiness");
  button_ms = createButton("Male - Sadness");

  button_fa = createButton("Female - Anger");
  button_fd = createButton("Female - Disgust");
  button_ff = createButton("Female - Fear");
  button_fh = createButton("Female - Happiness");
  button_fs = createButton("Female - Sadness");


	button_ma.position(width/3, 200);
  button_ma.mousePressed(play_am);
  button_md.position(width/3, 300);
  button_md.mousePressed(play_dm);
  button_mf.position(width/3, 400);
  button_mf.mousePressed(play_fm);
  button_mh.position(width/3, 500);
  button_mh.mousePressed(play_hm);
  button_ms.position(width/3, 600);
  button_ms.mousePressed(play_sm);

  button_fa.position(width/2, 200);
  button_fa.mousePressed(play_af);
  button_fd.position(width/2, 300);
  button_fd.mousePressed(play_df);
  button_ff.position(width/2, 400);
  button_ff.mousePressed(play_ff);
  button_fh.position(width/2, 500);
  button_fh.mousePressed(play_hf);
  button_fs.position(width/2, 600);
  button_fs.mousePressed(play_sf);


	amp = new p5.Amplitude();
	
	
}

function draw() {
background(255,169,10);

  if (drawAgain) {

  background(255,169,10);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

 
  //translate(0, height / 2 - currentY);

  for (var i = 0; i < volhistory.length; i++) {
    //ellipse(i,y, 5, 5);
    //console.log(volhistory[i]);
    ellipse(500, i+500, volhistory[i]*10000, volhistory[i]*10000);
  }



  // if (volhistory.length > width - 50) {
  //   volhistory.splice(0, 1);
  // }



}

}


function play_am() 
{
  if(ang_m.isPlaying() == false) 
  {
    ang_m.play();
    drawAgain = true;
  } 
} 

function play_dm() 
{
  if(dis_m.isPlaying() == false) 
  {
    dis_m.play();
    drawAgain = true;
  } 
} 

function play_fm() 
{
  if(fea_m.isPlaying() == false) 
  {
    fea_m.play();
    drawAgain = true;
  } 
} 

function play_hm() 
{
  if(hap_m.isPlaying() == false) 
  {
    hap_m.play();
    drawAgain = true;
  } 
} 

function play_sm() 
{
  if(sad_m.isPlaying() == false) 
  {
    sad_m.play();
    drawAgain = true;
  } 
} 

function play_af() 
{
  if(ang_f.isPlaying() == false) 
  {
    ang_f.play();
    drawAgain = true;
  } 
} 

function play_df() 
{
  if(dis_f.isPlaying() == false) 
  {
    dis_f.play();
    drawAgain = true;
  } 
} 

function play_ff() 
{
  if(fea_f.isPlaying() == false) 
  {
    fea_f.play();
    drawAgain = true;
  } 
} 

function play_hf() 
{
  if(hap_f.isPlaying() == false) 
  {
    hap_f.play();
    drawAgain = true;
  } 

} 

function play_sf() 
{
  if(sad_f.isPlaying() == false) 
  {
    sad_f.play();
    drawAgain = true;
  } 
} 


