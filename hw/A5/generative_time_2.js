// Code Credit: https://p5js.org/examples/simulate-snowflakes.html
// Modified by Navie Narula to reflect elements of time (minutes/hour)


let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(800, 800);
  fill(255);
  noStroke();
}

function draw() {
  background(77, 210, 255);
  let t = frameCount / 60; // update time

  // define minute variable
  minute_change = map(minute(), 0, 59, 10, 10);

  // create a random number of snowflakes each frame
  for (var i = 0; i < random(20); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 3))); //two --> three, create swirls

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle * minute_change; // manipulate angle based on minute
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height*minute_change) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    // change size of snowflake depending on the hour
    ellipse(this.posX, this.posY, this.size*hour());
  };
}



