const playerOptions = document.querySelectorAll('.throw-option');
const computerChoice = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const tiesDisplay = document.getElementById('ties');
const resetButton = document.getElementById('reset');

const choices = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let ties = 0;

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScoreboard();
}

function updateScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
}

function selectPlayerOption() {
    playerOptions.forEach(option => option.classList.remove('selected'));
    this.classList.add('selected');
    let playerChoice = this.getAttribute('alt').toLowerCase();
    startComputerChoice(playerChoice);
}

function startComputerChoice(playerChoice) {
    let counter = 0;
    const interval = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoice.src = randomChoice + '.png';
        counter++;
        if (counter > 5) {
            clearInterval(interval);
            determineWinner(playerChoice, randomChoice);
        }
    }, 500);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
        ties++;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        resultDisplay.textContent = "You win!";
        wins++;
    } else {
        resultDisplay.textContent = "You lose!";
        losses++;
    }
    updateScoreboard();
}

playerOptions.forEach(option => option.addEventListener('click', selectPlayerOption));
resetButton.addEventListener('click', resetGame);

resetGame(); // Initialize the game