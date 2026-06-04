const main = document.createElement("main");
const gridContainer = document.createElement("div");

gridContainer.classList.add("grid-container");
main.appendChild(gridContainer);
document.body.appendChild(main);

for (let i = 0; i < 100 * 100; i++) {

    const gridUnit = document.createElement("div");
    gridUnit.classList.add("grid-unit");
    let witdhGrid = 480/100;
    let heightGrid = 480/100;
    gridUnit.style.width = `${witdhGrid}px`;
    gridUnit.style.height = `${heightGrid}px`;
    gridContainer.appendChild(gridUnit);
}