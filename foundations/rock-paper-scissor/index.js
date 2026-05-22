
playGame();

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    
        if (humanChoice == computerChoice) {
        
            console.log("It is a tied! None of you deserve a point.");
            return ;
        }
        if (humanChoice == "ROCK" && computerChoice == "SCISSORS" 
            || humanChoice == "PAPER" && computerChoice == "ROCK"
            ||humanChoice == "SCISSORS" && computerChoice == "PAPER")
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
    
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == computerScore) console.log("Oops! It is a tied, nobody wins the game.");
    else if (humanScore > computerScore)
        console.log("You win the game!");
    else 
        console.log("You lose the game!");
}

function getComputerChoice() {
 
    let throwOptions = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.floor(Math.random() * 3);

    return(throwOptions[index]);
}

function getHumanChoice() {
    
    return(prompt("Enter your option!", "Rock, paper or scissors...").toUpperCase());
}

