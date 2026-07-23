function GameBoard() {
    
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
        
        board[rowPos][columnPos].addToken(playerToken);
    };

    const getBoard = () => board;

    const printBoard = () => {
        
        let currentBoard = board.map((row) =>
            row.map((cell) => cell.getValue()));

        currentBoard.forEach((e) => console.log(e))
    }

    const threeInLine = () => {
        
        let gameEnd = false;
        
        gameEnd = board.some((rows) => {
        
           return (rows.every((cell) => cell.getValue() === "X" || cell.getValue() === "O"));
        });
        if (gameEnd) return (gameEnd);

        for (let i = 0; i < row; i++) {
            if ((board[0][i].getValue() === board[1][i].getValue()
                 && board[1][i].getValue() === board[2][i].getValue()) ){

                    if (board[0][i].getValue() !== 0 
                    && board[1][i].getValue() !==  0
                    && board[2][i].getValue() !== 0) {
                        return(true);
                    }
            }
        }

            if ((board[0][0].getValue() === board[1][1].getValue()
                 && board[1][1].getValue() === board[2][2].getValue()) ){

                    if (board[0][0].getValue() !== 0 
                    && board[1][1].getValue() !==  0
                    && board[2][2].getValue() !== 0) {
                        return(true);
                    }
            }
            if ((board[0][2].getValue() === board[1][1].getValue()
                && board[1][1].getValue() === board[2][0].getValue()) ){

                   if (board[0][2].getValue() !== 0 
                   && board[1][1].getValue() !==  0
                   && board[2][0].getValue() !== 0) {
                       return(true);
                   }
           }

        return (gameEnd)
    };

    return ({getBoard, dropToken, printBoard, threeInLine});
}


function Cell() {
    let value = 0;

    const addToken = (playerToken) => {
        value = playerToken;
    }
    const getValue = () => value;

    return ({addToken, getValue});
}


function DisplayController(player1 = "1st player", player2 = "2nd player") {

    let board = GameBoard();


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

    return ({getActivePlayer, board});
}



// game.dropToken("X", 0, 2);
// game.dropToken("X", 1, 1);
// game.dropToken("X", 2, 2);

// game.dropToken("X", 0, 2);
// game.dropToken("X", 1, 2);
// game.dropToken("X", 2, 2);

// game.dropToken("O", 0, 0);
// game.dropToken("O", 0, 1);
// game.dropToken("O", 0, 2);


// game.printBoard();

DisplayController().board.printBoard();