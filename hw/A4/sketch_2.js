// Data Source: 
// https://data.cityofnewyork.us/Transportation/Bus-Breakdown-and-Delays/ez4e-fazm

// dictionary to store number of times each bus company appears
busCompanyCount = {};
totalTimeDelayedbyBusCompany = {};
avgTime = {}
var nums;
  var avg_ = [];
  var bus_name_ = [];
  var items = [];

function preload() {
  data = loadTable("data/school_bus_delays_cleaned.csv", "csv", "header");
}

function setup() {

  createCanvas(1600,1700); 
  avgTimeDelayedByBusCompany();
  orderData();
}

function draw() {

  background(255, 230, 204);
  push();
  fill(204, 105, 0); 
  textSize(25);
  text("Average Bus Delay Times by Bus Company", 40, 30);
  pop();

  var x,y,w,h;
  margin = 40;
  translate(margin,margin);


  noStroke();
  //fill(255, 156, 51);

  var new_height = 3300;
  var new_width = 2000;

  for (var i = 0; i < items.length; i++) {
    x = 0;
    y = ((new_height-20)*(i/items.length))*0.5;
    w = (new_width+20)/80*items[i][1];
    h = ((new_height+20)/items.length)-30;
    //console.log(items[i][0]);

  if (mouseX >= x+margin && mouseX <= (x+w)+margin && mouseY >= y+margin && mouseY <= (y+h)+margin) {
    push();
    translate(x,y); 
    fill(204, 105, 0);
    rect(0,0,w,h);
    fill(255, 156, 51); 
    textStyle(BOLD);                
    text(String(items[i][1]).slice(0,2)+" minutes",10,(h+10)/2); 
    pop();

  }
  else {

    push();                    
    translate(x,y); 
    fill(255, 156, 51);          
    rect(0,0,w,h);             
    fill(204, 105, 0); 
    textStyle(BOLD);                
    text(items[i][0],10,(h+10)/2);      
    pop();                    
  }
}



}

function avgTimeDelayedByBusCompany() {
  var busCompany = data.getColumn("Bus_Company_Name");
  var timeDelayed = data.getColumn("How_Long_Delayed");

  for (var i = 0; i < busCompany.length; i++) {
    if (busCompany[i] in busCompanyCount) {
      busCompanyCount[busCompany[i]] += 1;
    }
    else {
      busCompanyCount[busCompany[i]] = 1;
    }
  }

 for (var i = 0; i < timeDelayed.length; i++) {

  if (busCompany[i] in totalTimeDelayedbyBusCompany) {
    totalTimeDelayedbyBusCompany[busCompany[i]] += Number(timeDelayed[i]);
  }
  else {
    totalTimeDelayedbyBusCompany[busCompany[i]] = Number(timeDelayed[i]);
  }
 }


var avgDelay;
for (var key in busCompanyCount) {
  avgDelay = totalTimeDelayedbyBusCompany[key]/busCompanyCount[key];
  avgTime[key] = avgDelay;
}
}

function orderData() {

    // Create items array
items = Object.keys(avgTime).map(function(key) {
    return [key, avgTime[key]];
});
  //Sort the array based on the second element
items.sort(function(first, second) {
    return second[1] - first[1];
});




}



