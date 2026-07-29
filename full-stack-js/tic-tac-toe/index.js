const GameBoard = (() => {
    
    const board = [];
    const row = 3;
    const column = 3;

    for (let i = 0; i < row; i++) {
        board[i] = [];
        for (let j = 0; j < column; j++) {
            board[i].push(Cell());
        }
    }

    const dropToken = (playerToken, rowPos, columnPos) => {
        
        if (board[rowPos][columnPos].getValue() === "")
        {
            board[rowPos][columnPos].addToken(playerToken);
        }
    };

    const getBoard = () => board;

    const threeInLine = () => {
        
        let gameEnd = false;
        
        gameEnd = board.some((rows) => {
        
           return (rows.every((cell) => cell.getValue() === "X")) || rows.every((cell) => cell.getValue() === "O");

        });

        if (gameEnd) return (gameEnd);

        for (let i = 0; i < row; i++) {
            if ((board[0][i].getValue() === board[1][i].getValue()
                 && board[1][i].getValue() === board[2][i].getValue()) ){

                    if (board[0][i].getValue() !== "" 
                    && board[1][i].getValue() !==  ""
                    && board[2][i].getValue() !== "") {
                        return(true);
                    }
            }
        }

            if ((board[0][0].getValue() === board[1][1].getValue()
                 && board[1][1].getValue() === board[2][2].getValue()) ){

                    if (board[0][0].getValue() !== "" 
                    && board[1][1].getValue() !==  ""
                    && board[2][2].getValue() !== "") {
                        return(true);
                    }
            }
            if ((board[0][2].getValue() === board[1][1].getValue()
                && board[1][1].getValue() === board[2][0].getValue()) ){

                   if (board[0][2].getValue() !== "" 
                   && board[1][1].getValue() !==  ""
                   && board[2][0].getValue() !== "git ") {
                       return(true);
                   }
           }
        return (gameEnd)
    };

    return ({getBoard, dropToken, threeInLine});
})();


function Cell() {
    let value = "";

    const addToken = (playerToken) => {
        value = playerToken;
    }
    const getValue = () => value;

    return ({addToken, getValue});
}


function DisplayController(player1, player2) {

    let board = GameBoard;
    let canPlay = true;

    const players = [
        {
            name: player1,
            token: "X",
        },
        {
            name: player2,
            token: "O",
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    const playRound = (row, column) => {
      
        if (board.getBoard()[row][column].getValue() === "") {

            board.dropToken(getActivePlayer().token, row, column);
            if (board.threeInLine()) {
                return null;
            }
            switchPlayerTurn();
        }
    }

    return ({playRound, getActivePlayer, getBoard: board.getBoard(), canPlay});
}

const ticTacToe = (() => {

const board = document.querySelector(".game-container");
const winnerMessage = document.querySelector(".winner-message");
const winnerContainer = document.querySelector(".winner-container")
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const form = document.querySelector("#form-section");
const modal = document.querySelector(".modal");
const h1 = document.querySelector("h1");
const restartContainer = document.querySelector(".restart-container");
const restartButton = document.querySelector(".restart-button");
const playerTurn = document.querySelector("h3");
let game;
restartButton.innerText = "Restart";
restartButton.hidden = true;

form.addEventListener("submit", startGame);
board.addEventListener("click", handleClickCell);
restartButton.addEventListener("click", restartGame)

function displayBoardScreen() {
    
    board.textContent = "";
    
    game.getBoard.forEach((row, rowIndex) =>
        row.forEach((column, columnIndex) => {
            
            const button = document.createElement("button")
            button.classList.add("cell");
            button.dataset.column = columnIndex;
            button.dataset.row = rowIndex;
            button.id = `cr${columnIndex}${rowIndex}`;
            button.innerText = column.getValue();
            board.appendChild(button);
        })
    );      
}

function  startGame(e) {
    
    e.preventDefault();
    game = DisplayController(player1.value === "" ? "Player One" : player1.value , player2.value === "" ? "Player Two" : player2.value);
    playerTurn.hidden = false;
    playerTurn.innerText = `${game.getActivePlayer().name}'s turn`;
    modal.hidden = true;
    h1.style.paddingBottom = null;
    displayBoardScreen();
};

function draw() {

    let x = game.getBoard.some((row) =>
        row.some((column) =>  column.getValue() === "")
    );  
    console.log(x);
}

function handleClickCell(e) {
    
draw();
    if (!e.target.classList.contains("cell")) return;
    
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;
    
    if (game.canPlay) {
        
        if (game.playRound(selectedRow, selectedColumn) === null) {
            
            restartButton.hidden = false;
            restartContainer.appendChild(restartButton);
            winnerContainer.classList.add("show");
            winnerMessage.classList.add("show-message");
            winnerMessage.innerText = `${game.getActivePlayer().name} wins!`;
            game.canPlay = false;
            playerTurn.hidden = true;
        }
        
        playerTurn.innerText = `${game.getActivePlayer().name}'s turn`;
        displayBoardScreen();
    }
}

function restartGame() {
    
    game.getBoard.forEach((rows) => rows.forEach((column) => column.addToken("")));
        
    board.textContent = "";
    modal.hidden = false;
    winnerContainer.classList.remove("show");
    winnerMessage.innerText = "";
    game.canPlay = true;
    form.reset();
    restartButton.hidden = true;
}
})();