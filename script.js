// script.js

// Define possible choices
const choices = ['rock', 'paper', 'scissors'];

// Variables to keep track of rounds and scores
let round = 1;
let userScore = 0;
let computerScore = 0;
const totalRounds = 5;

// Event listeners for user choices
document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', playGame);
});

// Event listener for reset button
document.getElementById('reset').addEventListener('click', resetGame);

// Play the game
function playGame(event) {
    if (round > totalRounds) return;

    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, winner);
    updateScores(winner);

    if (round > totalRounds) {
        document.getElementById('winner').textContent = userScore > computerScore ? 'You are the overall winner!' : 'Computer is the overall winner!';
        document.getElementById('winner').classList.add('animate');
    }
}

// Get random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Display the result
function displayResult(userChoice, computerChoice, winner) {
    document.getElementById('userChoice').textContent = `Your Choice: ${capitalizeFirstLetter(userChoice)}`;
    document.getElementById('computerChoice').textContent = `Computer's Choice: ${capitalizeFirstLetter(computerChoice)}`;
    document.getElementById('winner').textContent = `Result: ${winner}`;
    document.getElementById('winner').classList.add('animate');
    setTimeout(() => document.getElementById('winner').classList.remove('animate'), 1000);
}

// Update the scores and round number
function updateScores(winner) {
    if (winner === 'You win!') {
        userScore++;
    } else if (winner === 'Computer wins!') {
        computerScore++;
    }
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    round++;
    document.getElementById('round').textContent = round;
}

// Reset the game
function resetGame() {
    round = 1;
    userScore = 0;
    computerScore = 0;
    document.getElementById('round').textContent = round;
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('userChoice').textContent = 'Your Choice: ';
    document.getElementById('computerChoice').textContent = 'Computer\'s Choice: ';
    document.getElementById('winner').textContent = 'Result: ';
    document.getElementById('winner').classList.remove('animate');
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
