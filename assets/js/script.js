//DOM Elements
var optA = document.querySelector(".option-a");
var optB = document.querySelector(".option-b");
var optC = document.querySelector(".option-c");
var optD = document.querySelector(".option-d");
var startButton = document.querySelector(".start-button");
var qDisplay = document.querySelector(".text-area");
var startScreen = document.querySelector(".game-launch");
var options = document.querySelector(".options");
var timer = document.querySelector(".timer");
var modal = document.querySelector(".modal");
var mContents = document.querySelector(".modal-contents");
var scoreButton = document.querySelector(".hs-button");
var hsBanner = document.querySelector(".hs-banner");
var hsContent = document.querySelector(".high-scores");
var mButton = document.querySelector(".m-button");
var goBack = document.createElement("button");
var qText = document.createElement("h2");
var optAButton = document.createElement("button");
var optBButton = document.createElement("button");
var optCButton = document.createElement("button");
var optDButton = document.createElement("button");
var saveButton = document.createElement("button");
var newGame = document.createElement("button");
var pInput = document.createElement("input");

//Dynamic game variables
var currentQ = 0;
var askedQs = [];
var currentScore = 0;
var timeLeft = 6;
var hourGlass;
var savedScores = JSON.parse(window.localStorage.getItem("highscores"));
var isWorthy;
var numCorrect = 0;

//Current Player
var player = {
    name:  "",
    score: "",
}

//Starts and displays timer; ends game if time reaches 0
function startTime(){
    timeLeft--
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
        alert("Time's Up!");
        checkScores();
        if(isWorthy === false) {
            endGame();
            console.log("Sorry Amigo, Not this time.");
        }
    }
    console.log('Current time: ' + timeLeft)
};

//Begins the game; displays the first question/choices and starts the timer
function startGame(){
    console.log("Sorted Scores: " + JSON.stringify(savedScores));
    scoreButton.style.display = "none";
    options.style.display = "flex";
    qDisplay.appendChild(qText);
    qText.textContent = questions[currentQ].question;
    optA.appendChild(optAButton);
    optB.appendChild(optBButton);
    optC.appendChild(optCButton);
    optD.appendChild(optDButton);
    optButtons = [ optAButton, optBButton, optCButton, optDButton ];
    optAButton.textContent = questions[currentQ].choices[0];
    optBButton.textContent = questions[currentQ].choices[1];
    optCButton.textContent = questions[currentQ].choices[2];
    optDButton.textContent = questions[currentQ].choices[3];
    askedQs.push(currentQ);
};

//Randomly selects question, re-rolls if question has been asked
function chooseQ() {
    for ( i = 0; i < askedQs.length; i++ ) {
        currentQ = Math.floor(Math.random() * questions.length);
        if (askedQs.includes(currentQ)) {
            currentQ = Math.floor(Math.random() * questions.length);
        } else {
            return currentQ;
        };
    };
};

//Advances page to next question and selections
function nextQ() {
    console.log('these have been asked: ' + JSON.stringify(askedQs));

    qText.textContent = questions[currentQ].question;
    optAButton.textContent = questions[currentQ].choices[0];
    optBButton.textContent = questions[currentQ].choices[1];
    optCButton.textContent = questions[currentQ].choices[2];
    optDButton.textContent = questions[currentQ].choices[3];
    askedQs.push(currentQ);
};

//Bonus question
function runBonus() {
    currentQ = 'BONUS'
    qText.textContent = bonusQ.question;
    optAButton.textContent = bonusQ.choices[0];
    optBButton.textContent = bonusQ.choices[1];
    optCButton.textContent = bonusQ.choices[2];
    optDButton.textContent = bonusQ.choices[3];
    askedQs.push(currentQ);
    };

//Function that ends game    
function endGame() {
    timer.textContent = 'DONE!';
    qDisplay.style.display = "none";
    options.style.display = "none";
    modal.style.display = "flex";
    mContents.appendChild(goBack);
    printScores();
    goBack.textContent = "Exit"
    mButton.textContent = "Play Again?";
    hsBanner.textContent = ("GAME OVER\nYour Score is: " + currentScore + "\nYou got " + numCorrect + " out of 5 correct!");
    clearInterval(hourGlass);
};

//Resets and launches new game
function startNew() {
    qDisplay.style.display = "flex";
    hourGlass = setInterval(startTime, 1000);
    timeLeft = 6;
    currentScore = 0;
    askedQs = [];
    pInput.value = "";
    currentQ = 0;
    numCorrect = 0;
    chooseQ();
    startGame();
};
