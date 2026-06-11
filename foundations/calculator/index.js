let operation = [];
let digits = "";
let cleanZero = false;
const input = document.querySelector("#calculator");
const buttonContainer = document.querySelector(".button-container");
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {

    if (digits != ""){
        operation.push(digits);
        digits = "";
    }
        console.log(operation);

})

buttonContainer.addEventListener("click", (e) => {

    let content = e.target.textContent;
    if (e.target.className == "digits") {

       if (digits === "0" && content === "0") return ;
       if (input.value === "0") input.value = "";
      
       if (digits === "0" && content !== "0") {
        
        digits = "";
        if (input.value.endsWith("0")) {
            input.value = input.value.slice(0, -1);
        } 
       }
       input.value += content;
        digits += content;
    }
    if (e.target.className == "operator") {

        if (digits === "" && operation.length === 0) return;
        if (digits !== "") operation.push(digits);
        digits = "";
        operation.push(content);
        input.value += content;
    }
})

function add(a, b) {
    return (a + b);
}

function substract(a, b) {
    return (a - b);
}

function multiply (a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}