var optA = document.querySelector(".option-a");
var optB = document.querySelector(".option-b");
var optC = document.querySelector(".option-c");
var optD = document.querySelector(".option-d");
var allOpts = [optA, optB, optC, optD];
var startButton = document.querySelector(".start-button");
var qDisplay = document.querySelector(".text-area");
var startScreen = document.querySelector(".game-launch");
var qText = document.createElement("h2");
var optAButton = document.createElement("button");
var optBButton = document.createElement("button");
var optCButton = document.createElement("button");
var optDButton = document.createElement("button");

var askedQs = [""];

//Quiz questions
var questions = [ 
    "q1",
    "q2",
    "q3",
    "q4"
];

var bonusQ = ("BONUS");

//Arrays containing the options for each question
var q1Choices = [
    "1-1",
    "1-2",
    "1-3",
    "1-4"
];
var q2Choices = [
    "2-1",
    "2-2",
    "2-3",
    "2-4"
];
var q3Choices = [
    "3-1",
    "3-2",
    "3-3",
    "3-4"
];
var q4Choices = [
    "4-1",
    "4-2",
    "4-3",
    "4-4"
];
var q5Choices = [
    "5-1",
    "5-2",
    "5-3",
    "5-4"
];
var bonusChoices = [
    "B-1",
    "B-2",
    "B-3",
    "B-4",
];


function init (){

}

//Function that starts the timer and begins the game, displaying the first question and answers
function startGame(){
    var chosenQ = questions[Math.floor(Math.random() * questions.length)];
    if (chosenQ === questions[0]) {
        var qChoices = (q1Choices);
    } else if (chosenQ === questions[1]) {
        var qChoices = (q2Choices);
    } else if (chosenQ === questions[2]) {
        var qChoices = (q3Choices);
    } else {
        var qChoices = (q4Choices);
    }
    qDisplay.appendChild(qText);
    optA.appendChild(optAButton);
    optB.appendChild(optBButton);
    optC.appendChild(optCButton);
    optD.appendChild(optDButton);
    qText.textContent = chosenQ;
    optAButton.textContent = qChoices[0];
    optBButton.textContent = qChoices[1];
    optCButton.textContent = qChoices[2];
    optDButton.textContent = qChoices[3];
    //console.log("Asked:" + askedUpdated);
    askedQs + chosenQ;
    return askedQs;
}
console.log("These Qs have been asked:" + askedQs);

//Ends game when timer runs out
function timeOut(){

}


//Removes question from array and advances to next question
function nextQ(){
    var chosenQ = questions[Math.floor(Math.random() * questions.length)];

    if (chosenQ === askedQs) {
        var chosenQ = questions[Math.floor(Math.random() * questions.length)];
    }
    console.log("Second Question is:" + chosenQ);
    if (chosenQ === questions[0]) {
        var qChoices = (q1Choices);
    } else if (chosenQ === questions[1]) {
        var qChoices = (q2Choices);
    } else if (chosenQ === questions[2]) {
        var qChoices = (q3Choices);
    } else {
        var qChoices = (q4Choices);
    }
    var askedUpdated = askedQs.push(chosenQ);
    qText.textContent = chosenQ;
    optAButton.textContent = qChoices[0];
    optBButton.textContent = qChoices[1];
    optCButton.textContent = qChoices[2];
    optDButton.textContent = qChoices[3];
    //console.log("Asked:" + askedUpdated);
    return askedQs;
}

function endGame(){

}

//Event listener that starts game when Start Button is clicked
startButton.addEventListener("click", function() {
    startScreen.setAttribute("style", "display:none")
    startButton.setAttribute("style", "display:none")
    startGame()
});

//Event listener that advances game when answer is selected
optAButton.addEventListener("click", function() {
    nextQ()
});
optBButton.addEventListener("click", function() {
    nextQ()
});
optCButton.addEventListener("click", function() {
    nextQ()
});
optDButton.addEventListener("click", function() {
    nextQ()
});
