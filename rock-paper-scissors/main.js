var content = document.getElementById("content");
var game = {
    player: "",
    computer: ""
}


// Event Listeners

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", init(game));
content.addEventListener("click", humanPlay);

function init() {
    content.innerHTML = renderGame(game);
}


// Your Turn

function humanPlay(humanTurn) {
    computerPlay(game);

    var target = humanTurn.target
    if (target.id === "rock") {
        game.player = "Rock";

    } else if (target.id === "paper") {
        game.player = "Paper";

    } else if (target.id === "scissor") {
        game.player = "Scissor";

    } else{
        return;
    }

    // Check for Winner after human turn.
    checkWinner();
}



// Computer Turn
// Used Math.random() to randomize computer choices from switch statement.
// Math.random() * (max - min) + min; This formula gets a random number between 2 values. 

function computerPlay() {
    var cpu = Math.round(Math.random() * (3 -1) +1);
    switch (cpu) {
        case 1:
            game.computer = "Paper";
            break;
        case 2:
            game.computer = "Scissor";
            break;
        case 3:
            game.computer = "Rock";
            break;
        default:
            break;
    }
}


// Winning Conditions

function checkWinner() {
    // Condition for Rock
    if (game.player === "Rock") {
        if (game.computer === "Rock") {
            renderDraw();
            return;
        }
    
        if (game.computer === "Paper"){
            renderLose();
            return;
        }
    
        if (game.computer === "Scissor"){
            renderWin();
            return;
        }
    }

    // Condition for Paper
    if (game.player === "Paper") {
        if (game.computer === "Rock") {
            renderWin();
            return;
        }
    
        if (game.computer === "Paper"){
            renderDraw();
            return;
        }

        if (game.computer === "Scissor"){
            renderLose();
            return;
        }
    }

    // Condition for Scissor
    if (game.player === "Scissor") {
        if (game.computer === "Rock") {
            renderLose();
            return;
        }

        if (game.computer === "Paper"){
            renderWin();
            return;
        }

        if (game.computer === "Scissor"){
            renderDraw();
            return;
        }
    }
}



//Rendering Functions

// Result messages and human/cpu play
function renderWin() {
    renderResults();
    document.getElementById("result-text").innerHTML = "You Win";
}

function renderLose() {
    renderResults();
    document.getElementById("result-text").innerHTML = " You Lose";
}

function renderDraw() {
    renderResults();
    document.getElementById("result-text").innerHTML = "Draw! Try again!";
}

function renderResults (){
    document.getElementById("human-play").innerHTML = `You played: <b> ${game.player} </b>`;
    document.getElementById("computer-play").innerHTML = `Computer played: <b> ${game.computer} </b>`;
}



function renderGame() {

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary" id="rock">Rock</button>
                <button class="btn btn-primary" id="paper">Paper</button>
                <button class="btn btn-primary" id="scissor">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5" id="human-play">You played: </div>
                <div class="m-5" id="computer-play">The computer played: </div>
            </div>
            <h1 class="text-center" id="result-text"></h1>
        </div>
    `
}