function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    return choice;
}

function getRandomChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    let choice;
    
    switch (randomNumber) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getRandomChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();
