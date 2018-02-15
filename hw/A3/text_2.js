// define preload font variable
var hangingLetters;

// initialize lists and dictionaries
var sections = [];
var section_categories = {};
var category_counts = [];


function preload() {

  // perform API call to connect to NYT top stories
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5624c871205c4fc7aa6265643581d711"; 
  url += "?api-key=" + apikey;

  // load ttf font file
  hangingLetters = loadFont("hangingLetters.ttf");

  // retrieve response
  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(900, 800);

  extractSections();

  // create dictionary to store section name
  // and section count
  for (var i = 0; i < sections.length; i++) {
    if (sections[i] in section_categories) {
      section_categories[sections[i]] += 1;
    }
    else {
    section_categories[sections[i]] = 1;
  }
}
//console.log(section_categories);

category_counts = Object.keys(section_categories).map(function(key) {
    return [key, section_categories[key]];
});

// sort dictionary by second item (i.e. value)
category_counts.sort(function(first, second) {
    return second[1] - first[1];
});

// console.log(category_counts);
}

function draw() {

  background(242, 230, 255);
  noStroke();

  // style title text
  textSize(50);
  textFont(hangingLetters);
  fill(62, 0, 128);
  text("Top NYT Articles by Section", (width-550)/2, 45);

  // style secondary text
  textSize(20);
  textStyle(BOLD);
  textFont("Georgia");

  // iteratre through ordered dictionary
  // to display sections by ascending order
  change = 85;
  for (var i = 0; i < category_counts.length; i++) {
    text(category_counts[i][0],(width-550)/2, change);
    text(category_counts[i][1],(width+500)/2, change);
    change += 27
  }

}

// extract section names from NYT API
function extractSections() {
  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].section;
    append(sections, s);
  }

}