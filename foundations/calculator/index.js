let operation = [];
let digits = "";
let cleanZero = false;
const input = document.querySelector("#calculator");
const buttonContainer = document.querySelector(".buttonContainer");
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {

    if (digits != ""){
        operation.push(digits);
        digits = "";
    }
        console.log(operation);

})

buttonContainer.addEventListener("click", (e) => {

    if (e.target.className == "digits") {

        if (digits == "0") digits = "";
        digits += e.target.textContent;

        if (input.value == "0") input.value = "";

        if (digits != "0") {
            if (cleanZero) {

                cleanZero = false;
                input.value = input.value.slice(0, input.value.length - 1);
                input.value += e.target.textContent;
                console.log("hola", input.value)

            }
            else
            {
                input.value += e.target.textContent;
                console.log("mundo", input.value)

            }
        }
        else {
            
            if (input.value.lastIndexOf("0") == -1){
                input.value += e.target.textContent;
                cleanZero = true;
            }

        }
    }
    if (e.target.className == "operator") {

        if (digits != "") operation.push(digits);
        digits = "";
        operation.push(e.target.textContent);
        input.value += e.target.textContent;
    }
    console.log(digits);
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