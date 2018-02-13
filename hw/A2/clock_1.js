//var cursive;
// function preLoad() {
// 	cursive = loadFont('Amarillo.otf');
// }

function setup() {
  createCanvas(640, 690);
  //cursive = loadFont("CurlzMT.ttf");
}

function draw() {

	// define relevant time arrays
	var seconds_minutes_array;
	var hours_array;

	//var cursive = loadFont("CurlzMT.ttf");
	
	seconds_minutes_array = ["zero", "one", "two", "three", "four",
	"five", "six", "seven", "eight", "nine", "ten", "eleven",
	"twelve", "thirteen", "fourteen", "fifteen", "sixteen",
	"seventeen", "eighteen", "nineteen", "twenty", "twenty-one",
	"twenty-two", "twenty-three", "twenty-four", "twenty-five",
	"twenty-size", "twenty-seven", "twenty-eight", "twenty-nine",
	"thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four",
	"thirty-five", "thirty-six", "thirty-seven", "thirty-eight",
	"thirty-nine", "forty", "forty-one", "forty-two", "forty-three",
	"forty-four", "forty-five", "forty-six", "forty-seven",
	"forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two",
	"fifty-three", "fifty-four", "fifty-five", "fifty-six",
	"fifty-seven", "fifty-eight", "fifty-nine"];

	hours_array = ["twelve", "one", "two", "three", "four",
	"five", "six", "seven", "eight", "nine", "ten", "eleven",
	"twelve", "one", "two", "three", "four",
	"five", "six", "seven", "eight", "nine", "ten", "eleven",
	"twelve"];

    // notebook paper color
	background(255, 255, 153, 150);

	noStroke();

	// notebook line 
	push();
	stroke(255,0,0, 150);
	line(100, 0, 100, 800);
	pop();

	// retrieve relevant time interval
	var seconds = seconds_minutes_array[second()];
	var minutes = seconds_minutes_array[minute()];
	var hours = hours_array[hour()];

	// text specifications
	fill("Black");
	textSize(20);
	textFont("Comic Sans MS");

	// conditionals to distinguish between AM/PM time
	if (hour() > 12) 
	{
  		text("It's currently " + hours + " o'clock", 230, 220)
  		text("and", 340, 240)
  		text(minutes  +" minutes", 260, 260)
  		text("and",340, 280)
  		text(seconds + " seconds", 260, 300)
  		text("in the PM.", 310, 320);
  	}

  	else 
  	{
  		text("It's currently " + hours + " o'clock", 230, 220)
  		text("and", 340, 240)
  		text(minutes  +" minutes", 260, 260)
  		text("and",340, 280)
  		text(seconds + " seconds", 260, 300)
  		text("in the AM.", 310, 320);
  	}

  	// draw hole punches
  	drawHolePunch(50, 40);
  	drawHolePunch(50, 290);
  	drawHolePunch(50, 540);

}

// function to draw hole punches
function drawHolePunch(x, y) {
	fill(140, 140, 140, 150);
	ellipse(x, y, 15 ,15);
}
