// define list to hold NYT abstracts
var des_facets = [];
var titles = [];
var cartoonFont;


function preload() {

  // perform API call to connect to NYT top stories
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5624c871205c4fc7aa6265643581d711"; 
  url += "?api-key=" + apikey;

  // retrieve response
  cartoonFont = loadFont("SFCartoonistHand-Bold.ttf");

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(1200, 2500);

  extractNYTData();
}

function draw() {

  background(51, 0, 24);
  noStroke();

  var margin = 40;

  textAlign(CENTER);
  text("Word Size of NYT Headlines as Bubbles", 142, 20);
  textFont(cartoonFont);
  textSize(15);
  for (var i = 1; i < titles.length; i++) {

    var words = titles[i].split(" ");
    var x = 50;

    for (var j = 0; j < words.length; j++) {
      var wordWidth = textWidth(words[j]);
      console.log(j);

    if (dist(mouseX, mouseY, x, i*50) < (wordWidth*0.5)/2) {
      fill(64, 64, 64);
      ellipse(x, i*50, wordWidth*0.5, wordWidth*0.5);
      fill(255);
      text(words[j], x, i*50);
      x += 70;
    }

    else {

      if (wordWidth < 15) {
        fill(255, 204, 229, 170);
      }
      else if (wordWidth < 30) {
        fill(255, 179, 215, 170);
      }
      else if (wordWidth < 45) {
        fill(255, 102, 173, 170);
      }
       else if (wordWidth < 60) {
        fill(255, 51, 146, 170);
      }
      else if (wordWidth < 75) {
        fill(230, 0, 107, 170);
      }
      else {
        fill(153, 0, 71, 170);
      }
      ellipse(x, i*50, wordWidth*0.5, wordWidth*0.5);
      x += 70;
    }

  }

}
}
//des_facet= descriptive subject terms
function extractNYTData() {
  for (var i = 0; i < nytResponse.results.length; i++) {
    var d = nytResponse.results[i].des_facet;
    var t = nytResponse.results[i].title;
    append(des_facets, d);
    append(titles, t);
  }
}

