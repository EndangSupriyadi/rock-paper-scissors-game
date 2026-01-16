// create a function getComputerChoice to get a random computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}


// create a function getHumanChoice to get the human choice from the input
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors): ");
    return choice.toLowerCase();
}

// create a score variable declaration to store the human (humanScore) and computer (computerScore) scores with an initial value of 0
let humanScore = 0;
let computerScore = 0;

// create a function playRound to play a single round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}

// create a function playGame to play the game until 5 rounds and display the final score and winner
function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log("\nFinal Score:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time!");
    } else {
        console.log("The game ends in a tie!");
    }
}

// call the playGame function to start the game
playGame();