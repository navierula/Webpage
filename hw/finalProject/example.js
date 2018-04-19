var input, button, promptText, infoText;
var canvas;
var bgcolor = 210;
var a;

function setup() {


  // create canvas
    canvas = createCanvas(710, 400);
    fill(0);
    background(bgcolor);

    infoText = createElement('blockquote');

    promptText = createElement('h2', 'what is the name of your hero?');
    //promptText.position(20, 5);

    input = createInput();
    //input.position(20, 100);

    button = createButton('submit');
    //button.position(200, 150);
    button.mousePressed(greet);

    //textAlign(LEFT)
    textSize(30);
}

function greet() {
    button.hide();

    var name = input.value();

    //  shows the greeting for a new hero, inside the canvas
    text(name+' lives in a peaceful and beautiful village called Scranton.  The only village not yet completely ravaged by the chaos and war surrounding daily life everywhere else.',  20, 0, 700, 400);

    // calls the set up of the next question
    prepareQuestion(1);

}

function prepareQuestion(questNum) {

    switch (questNum) {
        case 1:
            input.value('').hide();

            //  writes the new question for a user
            promptText.html('<p>Do you want to go left or right?</p>');

            btnLeft = createButton('Left');
            btnRight = createButton('Right');

            btnLeft.mousePressed(function() {
                clearCanvas();
                text('Going left!', 20, 30);
                // or do anything else
            });
            btnRight.mousePressed(function() {
                clearCanvas();
                text('Going right!', 20, 30);
            });
        break;

        case 2:
            //  add here the code for question 2
            break;
    }
}

function clearCanvas() {
    rect(0, 0, canvas.width, canvas.height);
    background(bgcolor);
}