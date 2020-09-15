//Getting button elements
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

//Getting computer turn elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Getting containers
const gameContainer = document.getElementById('game-container');
const winContainer = document.getElementById('win-container');
const lostContainer = document.getElementById('lost-container');

//Defining scores
let playerScore = document.getElementById('score_player');
let computerScore = document.getElementById('score_computer');

let turn = 0; //Defining turn variable

function play(playerChoice) {
    const computerChoice = Math.floor(Math.random() * Math.floor(3)); //Making random computer choice
    
    //Color the computer turn message
    if (computerChoice === 0) {
        rock.style.display = 'block';
        paper.style.display = 'none';
        scissors.style.display = 'none';
    }
    else if (computerChoice === 1) {
        rock.style.display = 'none';
        paper.style.display = 'block';
        scissors.style.display = 'none';
    }
    else if (computerChoice === 2) {
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'block';
    }

    if (((playerChoice === 1) && (computerChoice === 2)) || ((playerChoice === 2) && (computerChoice === 0)) || ((playerChoice === 3) && (computerChoice === 1))) {
        //Player wins
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
        rock.style.color = 'green';
        paper.style.color = 'green';
        scissors.style.color = 'green';
        turn++;
    }
    else if (((playerChoice === 1) && (computerChoice === 1)) || ((playerChoice === 2) && (computerChoice === 2)) || ((playerChoice === 3) && (computerChoice === 0))) {
        //Computer wins
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        rock.style.color = 'red';
        paper.style.color = 'red';
        scissors.style.color = 'red';
        turn++;
    }
    else {
        //Draw
        rock.style.color = 'black';
        paper.style.color = 'black';
        scissors.style.color = 'black';
    }

    if (turn === 3) {
        //Tells player if he/she won after 1 sec delay
        setTimeout(() => {
            document.getElementById('game-container').style.display = 'none';
            if ((parseInt(playerScore.innerText) === 3) || ((parseInt(playerScore.innerText) === 2) && (parseInt(computerScore.innerText) === 1))) {
                //Player wins
                winContainer.style.display = 'flex';
            }
            else {
                //Computer wins
                lostContainer.style.display = 'flex';
            }
        }, 1000)

    }
}

function reset() {
    //Resets the game to initial state
    turn = 0;
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    gameContainer.style.display = 'block';
    winContainer.style.display = 'none';
    lostContainer.style.display = 'none';
    playerScore.innerText = 0;
    computerScore.innerText = 0;
}