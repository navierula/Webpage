// Data Source: 
// https://data.cityofnewyork.us/Transportation/Bus-Breakdown-and-Delays/ez4e-fazm

// dictionary to store number of times each bus company appears
busCompanyCount = {};
totalTimeDelayedbyBusCompany = {};
avgTime = {}
var nums;

function preload() {
  data = loadTable("data/Bus_Breakdown_and_Delays.csv", "csv", "header");
}

function setup() {
  avgTimeDelayedByBusCompany();
  createCanvas(900,900);
}

function draw() {

  background(64,64,64);
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

 var val;
 nums = ["0","1","2","3","4","5","6","7","8","9"];
 for (var i = 0; i < timeDelayed.length; i++) {
  if (timeDelayed[i].length > 2 && nums.includes(timeDelayed[i].slice(0,1))) {
    if (nums.includes(timeDelayed[i].slice(1,2))) {
      val = Number(timeDelayed[i].slice(0,2));
  }
  else {
    val = Number(timeDelayed[i].slice(0,1));
  }
  }
  if (busCompany[i] in totalTimeDelayedbyBusCompany) {
    totalTimeDelayedbyBusCompany[busCompany[i]] += val;
  }
  else {
    totalTimeDelayedbyBusCompany[busCompany[i]] = val;
  }
 }
 delete busCompanyCount["RELIANT TRANS, INC. (B232"];
 delete busCompanyCount["`"];
 delete totalTimeDelayedbyBusCompany["RELIANT TRANS, INC. (B232"];
 delete totalTimeDelayedbyBusCompany["`"];


var avgDelay;
for (var key in busCompanyCount) {
  avgDelay = totalTimeDelayedbyBusCompany[key]/busCompanyCount[key];
  avgTime[key] = avgDelay;
}
}
