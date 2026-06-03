const containerDiv = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const humanPoints = document.createElement("div");
const computerPoints = document.createElement("div");
const scoreContainer = document.createElement("div");
const messageScore = document.createElement("div");
const resetGame = document.createElement("button");
const buttonsContainer = document.createElement("div");

let humanScore = 0;
let computerScore = 0;

resetGame.innerText = "START OVER";
rockButton.innerText = "ROCK";
rockButton.className = "buttons"
paperButton.innerText = "PAPER";
paperButton.className = "buttons";
scissorsButton.innerText = 'SCISSORS';
scissorsButton.className = "buttons"
resetGame.id = "reset";
resetGame.classList.add("buttons");
humanPoints.innerText = humanScore;
computerPoints.innerText = computerScore;

buttonsContainer.classList.add("buttons-container");
scoreContainer.classList.add("score-container");
scoreContainer.appendChild(humanPoints);
scoreContainer.appendChild(computerPoints);

containerDiv.classList.add("container-div");
containerDiv.appendChild(scoreContainer);
buttonsContainer.appendChild(rockButton);
buttonsContainer.appendChild(paperButton);
buttonsContainer.appendChild(scissorsButton);
containerDiv.appendChild(buttonsContainer);

document.body.appendChild(containerDiv);
messageScore.classList.add("message-score");
document.body.appendChild(messageScore);
resetGame.classList.toggle("hidden");
buttonsContainer.appendChild(resetGame);

resetGame.addEventListener("click", () => {
    
    hideButtons();
    resetGame.classList.toggle("hidden");
    messageScore.innerText = "";
    humanScore = 0;
    computerScore = 0;
    humanPoints.innerText = 0;
    computerPoints.innerText = 0;
});

containerDiv.addEventListener("click", (e) => {

    if (e.target.tagName == "BUTTON" && e.target.id !== "reset"){
        playRound(e, getComputerChoice());
    }
});

function hideButtons() {

    rockButton.classList.toggle("hidden");
    paperButton.classList.toggle("hidden");
    scissorsButton.classList.toggle("hidden");
}

function playRound(event, computerChoice) {
    

    let humanChoice = event.target.innerText;

    if (humanChoice == computerChoice) {
    
        
        messageScore.innerText = "It is a tied! None of you deserve a point.";
        return ;
    }
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS" 
        || humanChoice == "PAPER" && computerChoice == "ROCK"
        ||humanChoice == "SCISSORS" && computerChoice == "PAPER")
    {
        messageScore.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
        humanPoints.innerText = ++humanScore;

    } else {
        messageScore.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerPoints.innerText = ++computerScore;
    }
    if (humanScore == 5) {
        messageScore.innerText = `CONGRATULATIONS!!! YOU WIN THE GAME!`;
        hideButtons();
        resetGame.classList.toggle("hidden");
    }
    if (computerScore == 5) {
        messageScore.innerText = `OOPS!!! YOU LOSE THE GAME!`;
        hideButtons();
        resetGame.classList.toggle("hidden");
    }

}

function getComputerChoice() {
 
    let throwOptions = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.floor(Math.random() * 3);

    return(throwOptions[index]);
}