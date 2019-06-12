var content = document.getElementById('content');

var winningConditions = {
    "rock": { "paper": "Player Wins", "scissors": "Computer Wins", "rock": "Tie" },
    "paper": { "scissors": "Player Wins", "rock": "Computer Wins", "paper": "Tie" },
    "scissors": { "rock": "Player Wins", "paper": "Computer Wins", "scissors": "Tie" }
}

var rockPaperScissors = {
    playerChoice: "",
    computerChoice: "",
    message: ""
}

// Math.floor(Math.random() * 3);

function updateGameState(playerChoice) {
    rockPaperScissors.playerChoice = playerChoice;
    rockPaperScissors.computerChoice = generateComputerChoice();
    rockPaperScissors.message = generateMessage();
    renderGame(rockPaperScissors);
}

function generateComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function generateMessage() {
    let winCondition = winningConditions[rockPaperScissors.playerChoice];
    return winCondition[rockPaperScissors.computerChoice];
}

renderGame(rockPaperScissors);

function renderGame(game) {
    // Change this render function to use the "game" parameter

    content.innerHTML = `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <div class="w-50 text-center">
                <button class="btn btn-primary" id="r" onClick="updateGameState('rock');">Rock</button>
                <button class="btn btn-primary" id="p" onClick="updateGameState('paper');">Paper</button>
                <button class="btn btn-primary" id="s" onClick="updateGameState('scissors');">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${game.playerChoice}</b></div>
                <div class="m-5">The computer played: <b>${game.computerChoice}</b></div>
            </div>
            <h1 class="text-center">${game.message}</h1>
        </div>
    `
}