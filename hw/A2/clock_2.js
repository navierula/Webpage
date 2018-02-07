function setup() {
  createCanvas(800, 600);
}

// draw multiple clock of varying times
function draw() {

  // set background to light blue
  background(230, 255, 255);

  push();
  scale(0.4,0.4);
  drawClockBubble(hour()-8, minute()-10, second()-1, 77, 195, 255, 130, 200);
  scale(0.3,0.3);
  drawClockBubble(hour()-2, minute()-3, second()+22, 77, 195, 255, 130, 200);
  pop();

  // clock displays current time
  // clock is a couple shades darker than other clocks
  // all other clocks display random times
  push();
  translate(100, 100);
  scale(1, 1);
  drawClockBubble(hour(), minute(), second(), 26, 178, 255, 200, 240);
  pop();

  push();
  scale(0.8, 0.8);
  translate(0, 4);
  drawClockBubble(hour()-4, minute()+42, second()-30, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.5, 0.5);
  translate(500,0);
  drawClockBubble(hour()-2, minute()+1, second()-2, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.5, 0.5);
  translate(900,100);
  drawClockBubble(hour()+3, minute()+49, second()-8, 77, 195, 255, 130, 200);
  scale(0.3, 0.3);
  drawClockBubble(hour()-12, minute()-12, second()+21, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.5, 0.5);
  translate(-30,600);
  drawClockBubble(hour()+5, minute()+36, second()-30, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.5, 0.5);
  translate(-250,700);
  drawClockBubble(hour()-7, minute()-19, second()+55, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.5, 0.5);
  translate(-200,300);
  drawClockBubble(hour()-10, minute()+10, second()-2, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.2, 0.2);
  translate(-50,4);
  drawClockBubble(hour()-10, minute()-5, second()-28, 77, 195, 255, 130, 200);
  pop();

  push();
  scale(0.3, 0.3);
  translate(2000,10);
  drawClockBubble(hour()-1, minute(), second()-5, 77, 195, 255, 130, 200);
  pop();

  // add thought-provoking question about time
  fill(26, 178, 255); 
  textSize(15);
  textStyle(ITALIC);
  text("What if you could live in a time that is not now?", 450, 570);

}

// function to drawClockBubble
// modified code from TA example: https://shruti3101.github.io/Q4/index.html
function drawClockBubble(hour_now, minute_now, second_now, r, g, b, transparency_1, transparency_2) {
  
  var seconds_hand = map(second_now, 0, 60, 0, 2 * PI);
  var minutes_hand = map(minute_now, 0, 60, 0, 2 * PI);

  if (hour_now >= 12) {
    hour_now = hour_now - 12
  }

  // adjust hours hand accordingly 
  var hours_hand = map(hour_now, 0, 12, 0, 2 * PI);

  // position clock 
  translate(width/2,height/2)

  // draw clock circle
  push();
  noStroke();
  fill(r, g, b, transparency_1);
  ellipse(0, 0, 220, 220);
  fill(r, g, b, transparency_2);
  ellipse(0, 0, 20, 20);
  pop();

  // seconds hand
  push();
  stroke(r, g, b, transparency_2);
  rotate(seconds_hand -( PI/2));
  strokeWeight(3);
  line(0, 0, 105, 0);
  pop();

  // minutes hand
  push();
  stroke(r, g, b, transparency_2);
  rotate(minutes_hand - (PI/2));
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  // hours hand
  push();
  stroke(r, g, b, transparency_2);
  rotate(hours_hand - (PI/2));
  strokeWeight(5);
  line(0,0,70,0);
  pop();

}