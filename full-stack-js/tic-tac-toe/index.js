
//Creatr a grid of 3 rows and 3 columns to store the options
//Create a function to fill  the grid with some rando character to see the table in the console (* * *)
//Create  a function that identifies each cell; this can be done in hands with objects.
//Create a Function that change the selected cell  or an assigned palyers character (X , O)
//Create a function that checks is the colums or rows have 3 of the same symbols to win.


// const gameboard = {
//     gameboard: [],
// }

// function fillGrid() {
//     for (let i = 0; i < 3; i++) {
//         gameboard.gameboard[i] = [];
//         for (let j = 0; j < 3; j++) {
//             gameboard.gameboard[i][j] = " * ";
//         }
//     }
// }


// fillGrid();

// gameboard.gameboard[0][2] = "s"
// console.log(gameboard.gameboard)
// function checkWinner() {
//     for (let i = 0; i < 3; i++) {
//         let row = [" * ", " * ", " * "];
//             if (row === gameboard.gameboard[i])
//             {    
//                 console.log("row N0: ", i, "--------------> THIS ROW WINSs");
//                 break ;
//             }
//     }
// }


// checkWinner();


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

    return ({getBoard, dropToken, printBoard});
}


function Cell() {
    let value = 0;

    const addToken = (playerToken) => {
        value = playerToken;
    }
    const getValue = () => value;

    return ({addToken, getValue});
}

let game = GameBoard();

game.dropToken("X", 0, 2);
game.dropToken("X", 1, 1);
game.dropToken("X", 2, 0);

game.printBoard();