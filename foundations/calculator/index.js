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
       
    input.value = doTheMath(operation);
})

buttonContainer.addEventListener("click", (e) => {

    let content = e.target.textContent;
    if (e.target.className == "digits") {


       if (digits === "0" && content === "0") return ;
       if (input.value === "0") input.value = "" 
      
       if (digits === "0" && content !== "0") {
        
        digits = "";
        if (input.value.endsWith("0")) {
            input.value = input.value.slice(0, -1);
        } 
       }
       if (isNaN(content) && (digits === "+" || digits === "-" || digits === "*" || digits === "/")) {

        digits = "+";
        if (input.value.endsWith("+")) {
            input.value = input.value.slice(0, -1);
        } 
       }

       input.value += content;
       digits += content;
    }

    if (e.target.className == "clear") {

        input.value = "0";
        digits = "0";
        operation = [];
    }

    if (e.target.className == "operator") {

        if ((input.value.endsWith("+") || input.value.endsWith("-") || input.value.endsWith("*") || input.value.endsWith("/")) 
            && (content === "+" || content === "-" || content === "*" || content === "/"))  return ;

        if (digits === "" && operation.length === 0) return;
        if (digits !== "") operation.push(digits);
        digits = "";
        operation.push(content);
        input.value += content;
    }
})

function doTheMath(operation) {

    let result  = 0;

    for (let i = 0; i < operation.length; i++) {
        
        if (i == 0) {
            result = parseFloat(operation[i++]);
        }
        switch (operation[i]) {

            case "+":
                result = parseFloat(add(result, parseFloat(operation[++i])));
                break ;
            case "-":
                result = parseFloat(substract(result, parseFloat(operation[++i])));
                break ;
            case "*":
                result = parseFloat(multiply(result, parseFloat(operation[++i])));
                break ;
            case "/":
                result = parseFloat(divide(result, parseFloat(operation[++i])));
                break ;
        }
        
    }
    return (result);
}

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