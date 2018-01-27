function setup() {
  createCanvas(680, 520);
}

// function draw() {
//   if (mouseIsPressed) {
//   	fill(0);
//   } else {
//   	fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

function draw() {
	background('MistyRose');
	fill('MediumVioletRed' );
	rect(40, 40, 80, 80);
	fill('Plum ' );
	translate(10, 200);
	triangle(20, 70, 58, 10, 86, 70);
	fill('Orchid');
	translate(200, 0);
	ellipse(56, 46, 55, 55);
	translate(200, 0);
	textSize(32);
	fill('Black');
	text('Navie draws!', 10, 60);
}