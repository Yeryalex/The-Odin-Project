const containerDiv = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const humanPoints = document.createElement("div");
const computerPoints = document.createElement("div");
const scoreContainer = document.createElement("div");

let humanScore = 0;
let computerScore = 0;

rockButton.innerText = "ROCK";
paperButton.innerText = "PAPER";
scissorsButton.innerText = 'SCISSORS';
humanPoints.innerText = humanScore;
computerPoints.innerText = computerScore;

scoreContainer.appendChild(humanPoints);
scoreContainer.appendChild(computerPoints);

containerDiv.appendChild(scoreContainer);
containerDiv.appendChild(rockButton);
containerDiv.appendChild(rockButton);
containerDiv.appendChild(rockButton);
containerDiv.appendChild(paperButton);
containerDiv.appendChild(scissorsButton);

document.body.appendChild(containerDiv);



containerDiv.addEventListener("click", (e) => {

    if (e.target.tagName == "BUTTON"){

        playRound(e, getComputerChoice());
        console.log(humanScore);
        console.log(computerScore);
    }
});


function playRound(event, computerChoice) {
    

    let humanChoice = event.target.innerText;

    if (humanChoice == computerChoice) {
    
        console.log("It is a tied! None of you deserve a point.");
        return ;
    }
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS" 
        || humanChoice == "PAPER" && computerChoice == "ROCK"
        ||humanChoice == "SCISSORS" && computerChoice == "PAPER")
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanPoints.innerText = humanScore++;

    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerPoints.innerText = computerScore++;
    }
    if (humanScore == 5) {
        console.log("YOU WIN THE GAME!");
        return ;
    }
    if (computerScore == 5) {
        console.log("YOU LOSE THE GAME");
    }

}

function getComputerChoice() {
 
    let throwOptions = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.floor(Math.random() * 3);

    return(throwOptions[index]);
}