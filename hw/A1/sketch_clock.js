function setup() {
  createCanvas(720, 560);
}

function draw() {

  // canvas color
	background('AntiqueWhite');

  // ice cream color
	fill('MistyRose');

  // ice cream shape
  // arc shifts according to seconds
  arc(350, 200, 200, 225, map(minute(), 59, 0, 30, 60), 0);

  // chocolate cherry color
  fill('#4d2600');

  // chocolate cherry grows according to hours
  ellipse(350, 80, map(hour(), 0, 59, 10, 150), map(hour(), 0, 59, 10, 150));
  
  // cone color
  fill('Wheat');

  triangle(240, 205, 460, 205, 350, 460);

  // text color
  fill('Black');

  // translate text according to seconds
  translate(10, map(second(), 0, 59, 10, 150));

  // print text
  textSize(20);
  text("Now " + hour() + ":" + minute() + ":" + second(), 10, 150);

}

// reference aid (for cone): http://alpha.editor.p5js.org/ellacyt/sketches/ByaJx92j-