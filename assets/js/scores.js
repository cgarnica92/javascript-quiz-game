//Score Handlers

function sortScores() {

};

//Checks if score is worthy of the board
function checkScores() {
    for (i = 0; i < savedScores.length; i++) {
        if (currentScore >= JSON.stringify(savedScores[i].score)) {
            isWorthy = true;
            playerInput();
            console.log("You did it! New HS");
            return;
        } else {
            isWorthy = false;
        }
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