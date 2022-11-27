//Event listener that starts game when Start Button is clicked
startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    startButton.style.display = "none";
    hourGlass = setInterval(startTime, 1000);
    chooseQ();
    startGame();
});

//Event listeners that advance game when choice is selected, checks answer, adds score/subtracts time, and/or ends game after all questions have been asked
optAButton.addEventListener("click", function() {
    if ( askedQs.length === 5 && optAButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        numCorrect ++;
        runBonus();
        console.log('Correct! Your score is: ' + currentScore);
    } else if (askedQs.length === 5 && optAButton.textContent !== questions[currentQ].answer) {
        timeLeft -= 8;
        runBonus();
        console.log('Wrong! Your Time Remaining : ' + timeLeft);
    } else if ( askedQs.length === 6 ) {
        currentScore += 50
        endGame();
        console.log('Your final score is! ' + currentScore);
    } else {
        chooseQ();
        nextQ();  
    };

    if ( optAButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        numCorrect ++;
        console.log('Correct! Your current score is: ' + currentScore)
    } else {
        timeLeft -= 8;
        console.log('Incorrect! Time Left: ' + timeLeft)
    }
});
optBButton.addEventListener("click", function() {
    if ( askedQs.length === 5 && optBButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        numCorrect ++;
        runBonus();
        console.log('Correct! Your score is: ' + currentScore);
    } else if (askedQs.length === 5 && optBButton.textContent !== questions[currentQ].answer) {
        timeLeft -= 8;
        runBonus();
        console.log('Wrong! Your Time Remaining : ' + timeLeft);
    } else if ( askedQs.length === 6 ) {
        currentScore += 50
        endGame();
        console.log('Your final score is! ' + currentScore);
    } else {
        chooseQ();
        nextQ();  
    };

    if ( optBButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        numCorrect ++;
        console.log('Correct! Your current score is: ' + currentScore)
    } else {
        timeLeft -= 8;
        console.log('Incorrect! Time Left: ' + timeLeft)
    }
});
optCButton.addEventListener("click", function() {
    if ( askedQs.length === 5 && optCButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        numCorrect ++;
        runBonus();
        console.log('Correct! Your score is: ' + currentScore);
    } else if (askedQs.length === 5 && optCButton.textContent !== questions[currentQ].answer) {
        timeLeft -= 8;
        runBonus();
        console.log('Wrong! Your Time Remaining : ' + timeLeft);
    } else if ( askedQs.length === 6 ) {
        currentScore += 50
        endGame();
        console.log('Your final score is! ' + currentScore);
    } else {
        chooseQ();
        nextQ();  
    };

    if ( optCButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        console.log('Correct! Your current score is: ' + currentScore)
    } else {
        timeLeft -= 8;
        console.log('Incorrect! Time Left: ' + timeLeft)
    }
});
optDButton.addEventListener("click", function() {
    if ( askedQs.length === 5 && optDButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        runBonus();
        console.log('Correct! Your score is: ' + currentScore);
    } else if (askedQs.length === 5 && optDButton.textContent !== questions[currentQ].answer) {
        timeLeft -= 8;
        runBonus();
        console.log('Wrong! Your Time Remaining : ' + timeLeft);
    } else if ( askedQs.length === 6 ) {
        currentScore += 50
        endGame();
        console.log('Your final score is! ' + currentScore);
    } else {
        chooseQ();
        nextQ();  
    };

    if ( optDButton.textContent === questions[currentQ].answer ) {
        currentScore += 10;
        console.log('Correct! Your current score is: ' + currentScore)
    } else {
        timeLeft -= 8;
        console.log('Incorrect! Time Left: ' + timeLeft)
    }
});

//View High Scores/ Return to Game
scoreButton.addEventListener("click", function() {
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {    
        modal.style.display = "flex";
        mButton.textContent = "Go Back";
    }
});

//Controls Modal Button
mButton.addEventListener("click", function() {
    if (mButton.textContent === "Play Again?"){
        modal.style.display = "none";
        startNew();
        for (i = 0; i < savedScores.length; i++) {
            console.log("High Score #" + i + ": " + JSON.stringify(savedScores[i]));
        }
    } else if (mButton.textContent === "Submit"){
        if (pInput.value === "ASS") {
            alert("Grow Up.");
            console.log("rude.");
            return;
        } else {
        player.name = pInput.value;
        player.score = currentScore;
        mContents.removeChild(pInput);
        savedScores.push(JSON.stringify(player));
        endGame();
        console.log("New High Scores Are: " + JSON.stringify(savedScores));
        }
    } else {
        modal.style.display = "none";
    }
});