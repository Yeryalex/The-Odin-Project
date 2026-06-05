let GRID_SIZE = 600;
let isDrawing = false;

const main = document.createElement("main");
const gridContainer = document.createElement("div");
const button = document.createElement("button");

gridContainer.classList.add("grid-container");
gridContainer.style.width = `${GRID_SIZE}px`;
gridContainer.style.height = `${GRID_SIZE}px`;
button.innerText = "CHANGE GRID SIZE";
main.appendChild(button);
main.appendChild(gridContainer);

document.body.appendChild(main);

displayGrid(80);

function displayGrid(squaresNumber) {

    for (let i = 0; i < squaresNumber * squaresNumber; i++) {

        const gridUnit = document.createElement("div");
        gridUnit.classList.add("grid-unit");
        let witdhGrid = GRID_SIZE / squaresNumber;
        let heightGrid = GRID_SIZE / squaresNumber;
        gridUnit.style.width = `${witdhGrid}px`;
        gridUnit.style.height = `${heightGrid}px`;
        gridContainer.appendChild(gridUnit);
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return (`rgb(${r}, ${g}, ${b})`);
}



gridContainer.addEventListener("mousedown", (e) => {

    isDrawing = true;

    if (e.target.tagName === "DIV" && e.target.classList.value == "grid-unit") {
        e.target.style.background = randomColor();
    }
});


gridContainer.addEventListener("mouseover", (e) => {

    if(!isDrawing) return ;
    
    if (e.target.tagName === "DIV" && e.target.classList.value == "grid-unit") {
        e.target.style.background = randomColor();
    }
});

gridContainer.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });

window.addEventListener("mouseup", () => {
    isDrawing = false;
})

button.addEventListener("click", () => {

    let squaresNumber = parseInt(prompt("Change the grid size", "from 1-100"));

    if (!squaresNumber || squaresNumber < 1 || squaresNumber > 100) {
        alert("Something went wrong! Please, try a valid value.")
        return ; 
    }
    const gridUnit = document.querySelectorAll(".grid-unit");
    gridUnit.forEach(div => div.remove())
    
    displayGrid(parseInt(squaresNumber));
});
