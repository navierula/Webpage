function setup() {
  createCanvas(1200, 500);
}


function draw() {
  background(223, 191, 159);

  // draw seconds-appearing trees
  var width_change_seconds = -160; 
  for (var i = 0; i < second(); i++) {
    push();
    scale(0.3,0.3);
    translate(width_change_seconds,1400);
    drawTree(153, 204, 0, 200);
    width_change_seconds += width/20;
    pop();
  }

  // draw minutes-appearing trees
  var width_change_minutes = -160; 
  for (var i = 0; i < minute(); i++) {
    push();
    scale(0.35,0.35);
    translate(width_change_minutes,1050);
    drawTree(85, 128, 0, 170);
    width_change_minutes += width/20;
    pop();
  }

  // draw hours-appearing trees
  var width_change_hours = -160; 
  for (var i = 0; i < hour(); i++) {
    push();
    scale(0.4,0.4);
    translate(width_change_hours,770);
    drawTree(0, 102, 0, 150);
    width_change_hours += width/20;
    pop();
  }

  // display time
  fill(102, 51, 0);
  textSize(30);
  text(hour() + ":" + minute() + ":" + second(), 1073,489)

  // stand-alone trees:

  // push();
  // scale(0.3,0.3);
  // translate(-160,1400);
  // drawTree(153, 204, 0);
  // pop();

  // scale(0.3,0.3);
  // translate(-100,1400);
  // drawTree(153, 204, 0);
}

// define function to draw tree
function drawTree(r, g, b, transparency) {
  noStroke();
  fill(r, g, b, transparency);
  ellipse(200, 200, 50, 100); // can modify width and height (to postion center items (width/2))
  stroke(102, 51, 0);
  line(200, 175, 200, 275); 

}