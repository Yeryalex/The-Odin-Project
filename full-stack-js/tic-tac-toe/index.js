
//Creatr a grid of 3 rows and 3 columns to store the options
//Create a function to fill  the grid with some rando character to see the table in the console (* * *)
//Create  a function that identifies each cell; this can be done in hands with objects.
//Create a Function that change the selected cell  or an assigned palyers character (X , O)
//Create a function that checks is the colums or rows have 3 of the same symbols to win.


const gameboard = {
    gameboard: [],
}

function fillGrid() {
    for (let i = 0; i < 3; i++) {
        gameboard.gameboard[i] = [];
        for (let j = 0; j < 3; j++) {
            gameboard.gameboard[i][j] = " * ";
        }
    }
}


fillGrid();

gameboard.gameboard[0][2] = "s"
console.log(gameboard.gameboard)
function checkWinner() {
    for (let i = 0; i < 3; i++) {
        let row = [" * ", " * ", " * "];
            if (row === gameboard.gameboard[i])
            {    
                console.log("row N0: ", i, "--------------> THIS ROW WINSs");
                break ;
            }
    }
}


checkWinner();