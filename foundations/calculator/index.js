let operation = [];
let digits = "";
let zero = false;

const input = document.querySelector("#calculator");
const buttonContainer = document.querySelector(".buttonContainer");
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {

    if (digits != ""){
        operation.push(digits)
        digits = "";
    };
    console.log(operation);

})

buttonContainer.addEventListener("click", (e) => {

    if (e.target.className == "digits") {
        
        digits += e.target.textContent;
        console.log(digits)

        if (input.value == "0") {
            input.value = "";
            input.value += e.target.textContent;
            return ;
        };
        input.value += e.target.textContent;
            
        };
    
    if (e.target.className == "operator") {

        console.log(digits);
        if (digits != "0"){
            operation.push(digits)
        };
        input.value += e.target.textContent;
        operation.push(e.target.textContent);
        digits = "";
       
    }
})

// function tokenizer(stringOperation) {

//     let numberOperand = "";
//     let splitValues = stringOperation.split("");
//     for (let i = 0; i < splitValues.length; i++) {
//         if (!isNaN(splitValues[i]))
//             numberOperand += splitValues[i];

//         if (isNaN(splitValues[i])) {
//             if (numberOperand != "") operators.push(numberOperand);
//             operators.push(splitValues[i]);
//             numberOperand = "";
//         }
//     }
//     if (numberOperand != "") operators.push(numberOperand);
//     console.log(operators);
// }

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