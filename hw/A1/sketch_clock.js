function setup() {
  createCanvas(720, 560);

}

function draw() {
	background('AntiqueWhite');

	fill('MistyRose');

  	//arc(350, 200, 200, 225, -PI, 0);
  	arc(350, 200, 200, 225, -PI, 0);

  	fill('#4d2600');

    //ellipse(310, 200, 5, map(second(), 59, 0, 0, 59));
    //ellipse(310, 100, 5, map(second(), 0, 59, 300, 5));

  	fill('Wheat');
  	triangle(350-200 / 2, 200 + 5, 350 + 200 / 2, 200 + 5, 350, 200 + 200 * 1.3);

}

// reference aid: http://alpha.editor.p5js.org/ellacyt/sketches/ByaJx92j-