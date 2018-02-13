// define list to hold NYT abstracts
var abstracts = [];

function preload() {

  // perform API call to connect to NYT top stories
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5624c871205c4fc7aa6265643581d711"; 
  url += "?api-key=" + apikey;

  // retrieve response
  nytResponse = loadJSON(url);
}

function setup() {
  //createCanvas(70, 4000);
  createCanvas(700, 2790);

 // console.log(nytResponse);
  extractAbstracts();
}

function draw() {

  background(140,140,140);
  noStroke();

  translate((width-40)/2, 50);

  // style text
  stroke(color(26, 26, 26));
  strokeWeight(0.2);
  fill(128, 0, 0);
  textSize(12);
  text("Scroll down to see the average number of words", -320, -20);
  text("per abstract for New York Times' articles", -320, -10);
  text("on their home page!",-320,0);


  // style text
  strokeWeight(1.5);
  fill(255, 77, 77);
  textSize(40);

  change = 0; // designate change to positioning
  sum_each_abstract = 0; // keep track of abstract length
  count_each_abstract = []; // keep track of number of abstracts

  for (var i = 0; i < abstracts.length; i++) {
    var words = abstracts[i].split(" ");
    text(words.length, 0, change); 
    append(count_each_abstract, words.length);
    sum_each_abstract += words.length;
    change += 55
    }
    
  fill(128, 0, 0);
  // calculate average number of words per abstract
  text(Math.round(sum_each_abstract/count_each_abstract .length),(width-695)/2, change);
  
}

function extractAbstracts() {
  for (var i = 0; i < nytResponse.results.length; i++) {
    var a = nytResponse.results[i].abstract;
    append(abstracts, a);
  }
   //console.log(abstracts); 
}