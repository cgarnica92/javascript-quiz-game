var optA = document.querySelector(".option-a");
var optB = document.querySelector(".option-b");
var optC = document.querySelector(".option-c");
var optD = document.querySelector(".option-d");
var allOpts = [optA, optB, optC, optD];
var startButton = document.querySelector(".start-button");
var qDisplay = document.querySelector(".text-area");
var startScreen = document.querySelector(".game-launch");
var options = document.querySelector(".options");
var qText = document.createElement("h2");
var optAButton = document.createElement("button");
var optBButton = document.createElement("button");
var optCButton = document.createElement("button");
var optDButton = document.createElement("button");

var currentQ = 0;
var finishAsked = [0,1,2,3,4];
var askedQs = [];
var currentScore = 0;

console.log('these have been asked ' + askedQs)

//Starts the timer and begins the game, displaying the first question and choices
function startGame(){ 
    options.removeAttribute("class", "hide");
    qDisplay.appendChild(qText);
    qText.textContent = questions[currentQ].question;
    optA.appendChild(optAButton);
    optB.appendChild(optBButton);
    optC.appendChild(optCButton);
    optD.appendChild(optDButton);
    optAButton.textContent = questions[currentQ].choices[0];
    optBButton.textContent = questions[currentQ].choices[1];
    optCButton.textContent = questions[currentQ].choices[2];
    optDButton.textContent = questions[currentQ].choices[3];
    askedQs.push(currentQ);
};

//Ends game when timer runs out
function timeOut(){

};

function chooseQ (){
    currentQ = Math.floor(Math.random() * questions.length);
    console.log('chosen randomly was: ' + currentQ);
    return currentQ;
}
//Removes question from array and advances to next question
function nextQ(){
    console.log('these have been asked: ' + JSON.stringify(askedQs));
    if (currentQ === askedQs) {
        chooseQ();
    }; 
    qText.textContent = questions[currentQ].question;
    optAButton.textContent = questions[currentQ].choices[0];
    optBButton.textContent = questions[currentQ].choices[1];
    optCButton.textContent = questions[currentQ].choices[2];
    optDButton.textContent = questions[currentQ].choices[3];
    askedQs.push(currentQ);
   // if (currentQ === askedQs) {
   //     chooseQ();
   // };
    //var chosenQ = advanceQ();
    //var qChoices = setChoices();
    //qText.textContent = chosenQ;
    //optAButton.textContent = qChoices[0];
    //optBButton.textContent = qChoices[1];
    //optCButton.textContent = qChoices[2];
    //optDButton.textContent = qChoices[3];
}

function endGame(){
    
}

//Event listener that starts game when Start Button is clicked
startButton.addEventListener("click", function() {
    startScreen.setAttribute("style", "display:none");
    startButton.setAttribute("style", "display:none");
    chooseQ();
    console.log('chosen q is: ' + currentQ)
    startGame();
});

//Event listener that advances game when choice is selected, or ends game after all questions have been asked
optAButton.addEventListener("click", function() {
    if (qText.textContent === bonusQ.question) {
        endGame();
    }
    chooseQ(); {
        if (currentQ === askedQs) {
            chooseQ();
        }; 
    }
    nextQ();
});
optBButton.addEventListener("click", function() {
    if (qText.textContent === bonusQ.question) {
        endGame();
    }
    chooseQ(); {
        if (currentQ === askedQs) {
            chooseQ();
        }; 
    }
    nextQ();
});
optCButton.addEventListener("click", function() {
    if (qText.textContent === bonusQ.question) {
        endGame();
    }
    chooseQ(); {
        if (currentQ === askedQs) {
            chooseQ();
        }; 
    }
    nextQ();
});
optDButton.addEventListener("click", function() {
    if (qText.textContent === bonusQ.question) {
        endGame();
    }
    chooseQ(); {
        if (currentQ === askedQs) {
            chooseQ();
        }; 
    }
    nextQ();
});

