// jshint esversion:6




var final = "";



(function init() {
    var numberValue, operator;




    let presentingArea = document.getElementById("presentingArea");

    // ================================== NumberPad Listening ===========================

    let numbersPad = document.querySelectorAll(".numberpad");
    numbersPad.forEach((numberPad) => {
        numberPad.addEventListener("click", (event) => {
            if (final) {
                numberValue = Number(event.target.innerText);
                console.log(numberValue);
                presentingArea.value += numberValue;

            } else {
                final = Number(event.target.innerText);
                // console.log(final);
                presentingArea.value += Number(final);
            }
        });
    });

    // =================================== Operator Listening =========================


    let operatorsContainer = document.querySelectorAll(".operator");
    operatorsContainer.forEach((operatorsContainer) => {
        operatorsContainer.addEventListener("click", (event) => {
            operator = event.target.innerText;
            presentingArea.value += operator;
        });
    });

    // =================================== Equal Listening ===========================


    let equalSign = document.getElementById("equals");
    equalSign.addEventListener("click", (event) => {
        compute(presentingArea, operator);
    });

    // =================================== Clear Listening =================================
    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", (event) => {
        presentingArea.value = "";
    });



})();





function compute(presentingArea, operator) {
    let expression = presentingArea.value;

    expression = expression.split(operator);

    if (operator === "+") {
        clearDisplay(presentingArea);
        setDisplay(presentingArea, add(expression));


    } else if (operator === "-") {
        clearDisplay(presentingArea);
        setDisplay(presentingArea, subtract(expression));


    } else if (operator === "*") {
        clearDisplay(presentingArea);
        setDisplay(presentingArea, multiply(expression));


    } else if (operator === "/") {
        clearDisplay(presentingArea);
        setDisplay(presentingArea, divide(expression));


    } else if (operator === "^") {
        clearDisplay(presentingArea);
        setDisplay(presentingArea, power(expression));


    } else if (operator === "√") {
        console.log("Test")
        clearDisplay(presentingArea);
        setDisplay(presentingArea, sqrt(expression[0]));


    }
}



function add(numbers) {


    let sum = 0;


    numbers.forEach(function(value) {
        sum += Number(value);
    });
    return sum;
}




function subtract(numbers) {

    let difference = Number(numbers[0]);

    numbers.forEach(function(value, index) {
        if (index === 0) {} else {
            difference -= Number(value);
        }
    });
    return difference;
}



function multiply(numbers) {

    let product = 1;



    numbers.forEach(function(value) {
        product *= Number(value);
    });
    return product;
}


function divide(numbers) {


    let quotient = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            quotient = "Error";
            break;
        } else {
            quotient = quotient / Number(numbers[i]);
        }
    }
    return quotient;
}

function power(numbers) {

    return numbers[0] ** numbers[1];
}

function sqrt(number) {

    let final = Math.sqrt(number);
    return final;
}


function clearDisplay(presentingArea) {
    presentingArea.value = "";
}

function setDisplay(presentingArea, valueToSet) {
    presentingArea.value = valueToSet;
}