//Score Handlers

//Checks if score is worthy of the board
function checkScores() {
    if (savedScores === null) {
        savedScores = [];
    }
    if (currentScore > 0) {
        if ( savedScores.length < 10 ) {
            isWorthy = true;
            playerInput();
            console.log("You did it! New HS");
            return;
        } 
        for (i = 0; i < savedScores.length; i++) {
            if ( currentScore >= JSON.stringify(savedScores[i].score) ) {
                isWorthy = true;
                playerInput();
                console.log("You did it! New HS");
                return;
            } else {
                isWorthy = false;
            }
        }
    } else {
        console.log("Zero Don't Cut it.");
        isWorthy = false;
        return
    }
    console.log("ARE YE WORTHY?: " + isWorthy);
};

//Ends Game and Asks Player for Initials
function playerInput() {
    clearInterval(hourGlass);
    timer.textContent = 'DONE!';
    qDisplay.style.display = "none";
    options.style.display = "none";
    modal.style.display = "flex";
    mButton.textContent = "Submit";
    hsBanner.textContent = ("NEW HIGH SCORE\nYou Scored: " + currentScore + " points" + "\nYou got " + numCorrect + " out of 5 correct!");
    pInput.setAttribute("type", "text");
    mContents.appendChild(pInput);
    if (mButton.clicked === true) {
            player.name = pInput.value;
    }
};

//Prints high scores
function printScores () {
    var scoreZone = document.createElement("ol");
    hsContent.appendChild(scoreZone);
    var scorePost = JSON.parse(JSON.stringify(savedScores));
    for ( i = 0; i < scorePost.length; i++) {
        var scoreSlot = document.createElement("li");
        scoreZone.appendChild(scoreSlot);
        scoreSlot.textContent = scorePost[i]
    }
};

