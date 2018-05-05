// Data Source: 
// https://data.cityofnewyork.us/Transportation/Bus-Breakdown-and-Delays/ez4e-fazm

// Data Source: 
// https://data.cityofnewyork.us/Transportation/Bus-Breakdown-and-Delays/ez4e-fazm

busCompanyCount = {};
totalTimeDelayedbyBusCompany = {};
totalNumberofStudentsbyBusCompany = {};

yes = {};
no = {};

busCompanyCount_Two = {};

avgStudents = {}
mostNotifiedOrNot = {};

var nums;
  var avg_ = [];
  var bus_name_ = [];
  var items = [];

var state = 0;

function preload() {
  data = loadTable("data/school_bus_delays_cleaned.csv", "csv", "header");
}

function setup() {
  createCanvas(1907, 1800);

  button = createButton('Toggle');
  button.mousePressed(toggleState);
  button.position(80, 50);

  avgNumberofStudentsinEachBusCompany();
  parentsInformed();
  orderData();
}

function draw() {
  drawData();
}

function toggleState() {
  state = (state == 0) ? 1 : 0;
  // console.log(state);
  drawData();
}



function draw() {

  drawData();


}

function avgNumberofStudentsinEachBusCompany() {
  var busCompany = data.getColumn("Bus_Company_Name");
  var studentNum = data.getColumn("Number_Of_Students_On_The_Bus");

  for (var i = 0; i < busCompany.length; i++) {
    if (busCompany[i] in busCompanyCount) {
      busCompanyCount[busCompany[i]] += 1;
    }
    else {
      busCompanyCount[busCompany[i]] = 1;
    }
  }


 for (var i = 0; i < studentNum.length; i++) {
  if (busCompany[i] in totalNumberofStudentsbyBusCompany) {
    totalNumberofStudentsbyBusCompany[busCompany[i]] += Number(studentNum[i]);
  }
  else {
    totalNumberofStudentsbyBusCompany[busCompany[i]] = Number(studentNum[i]);
  }
 }


var avgStuNum;
for (var key in busCompanyCount) {
  avgStuNum = Math.ceil(totalNumberofStudentsbyBusCompany[key]/busCompanyCount[key]);
  avgStudents[key] = avgStuNum;
}
}



function parentsInformed() {
  var busCompany = data.getColumn("Bus_Company_Name");
  var parentsNotified = data.getColumn("Has_Contractor_Notified_Parents");

  for (var i = 0; i < busCompany.length; i++) {
    if (busCompany[i] in busCompanyCount_Two) {
      busCompanyCount_Two[busCompany[i]] += 1;
    }
    else {
      busCompanyCount_Two[busCompany[i]] = 1;
    }
  }


 for (var i = 0; i < parentsNotified.length; i++) {
  if (parentsNotified[i] == "Yes") {
    if (busCompany[i] in yes) {
      yes[busCompany[i]] += 1;
    }
    else {
      yes[busCompany[i]] = 1;
    }

  }
  if (parentsNotified[i] == "No") {
if (busCompany[i] in no) {
      no[busCompany[i]] += 1;
    }
    else {
      no[busCompany[i]] = 1;
    }
  }


}


for (var key in busCompanyCount_Two) {
  if (yes[key] > no[key]) {
    mostNotifiedOrNot[key] = "Yes";
  }
  else {
    mostNotifiedOrNot[key] = "No";
  }
}
console.log(mostNotifiedOrNot);

}

// var avgStuNum;
// for (var key in busCompanyCount) {
//   avgStuNum = Math.ceil(totalNumberofStudentsbyBusCompany[key]/busCompanyCount[key]);
//   avgStudents[key] = avgStuNum;
// }
// }

function orderData() {

    // Create items array
items = Object.keys(avgStudents).map(function(key) {
    return [key, avgStudents[key]];
});
  //Sort the array based on the second element
items.sort(function(first, second) {
    return second[1] - first[1];
});
//console.log(items);


// for (var key in avgTime) {
//     append(bus_name_, key);
//     append(avg_, avgTime[key]);
// }

}

function drawData() {
  margin = 80;
  if (state == 0) {
    background(217, 217, 217);
  push();
  fill(0); 
  textSize(25);
  text("Average Number of Students per Bus Company During Delays", 80, 30);
  pop();

  textSize(10);
  var x,y,w,h;

  translate(margin,margin);


  noStroke();
  fill(179, 179, 255);

  var new_height = 3300;
  var new_width = 2000;

  for (var i = 0; i < items.length; i++) {
    x = 0;
    y = ((new_height-20)*(i/items.length))*0.5;
    w = (new_width+20)/20*items[i][1];
    h = ((new_height+20)/items.length)-30;
    //console.log(items[i][0]);

  if (mouseX >= x+margin && mouseX <= (x+w)+margin && mouseY >= y+margin && mouseY <= (y+h)+margin) {
    push();
    translate(x,y); 
    fill(255);
    rect(0,0,w,h);
    fill(140, 140, 140); 
    textStyle(BOLD);                
    text(String(items[i][1]).slice(0,2)+" students",10,(h+10)/2); 
    pop();

  }

  else {

    push();                    
    translate(x,y); 
    fill(140, 140, 140);         
    rect(0,0,w,h);             
    fill(255); 
    textStyle(BOLD);                
    text(items[i][0],10,(h+10)/2);      
    pop();                    
  }
}

  }
  else {
    background(217, 217, 217);
  push();
  fill(0); 
  textSize(25);
  text("Were the Majority of Parents Notified of Bus Delays by the Bus Company?", 80, 30);
  pop();

  var x,y,w,h;
  margin = 80;
  translate(margin,margin);


  noStroke();
  fill(255, 204, 255);

  var new_height = 3300;
  var new_width = 2000;

  for (var i = 0; i < items.length; i++) {
    x = 0;
    y = ((new_height-20)*(i/items.length))*0.5;
    w = (new_width+20)/20*items[i][1];
    h = ((new_height+20)/items.length)-30;

    if (mostNotifiedOrNot[items[i][0]] == "No"){
    fill(153, 0, 0);
    }
    else {
      fill(0, 102, 34);
    }
    push();
    translate(x,y);
    textStyle(BOLD); 
    text(items[i][0],10,(h+10)/2);  
    pop();




  //     if (mouseX >= x+margin && mouseX <= (x+w)+margin && mouseY >= y+margin && mouseY <= (y+h)+margin) {
  //   push();
  //   translate(x,y); 
  //   fill(255, 77, 255);
  //   rect(0,0,w,h);
  //   fill(255, 204, 255); 
  //   textStyle(BOLD);                
  //   text(mostNotifiedOrNot[(items[i][0])],10,(h+10)/2); 
  //   pop();

  // }
  //  else {

  //   push();                    
  //   translate(x,y);            
  //   rect(0,0,w,h);             
  //   fill(255, 77, 255); 
  //   textStyle(BOLD);                
  //   text(items[i][0],10,(h+10)/2);      
  //   pop();                    
  // }
}

  }
}











