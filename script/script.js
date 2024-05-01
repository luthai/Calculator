"use strict";

let operator = "";
const inputs = [];
let new_number = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function sum(num_1, operator, num_2) {
    switch (operator) {
        case "+":
            return add(num_1, num_2);
        case "-":
            return subtract(num_1, num_2);
        case "*":
            return multiply(num_1, num_2);
        case "/":
            if (num_2 === 0) {
                return "NaN";
            }
            return divide(num_1, num_2);
    }
}

const input_field = document.querySelector(".calculator-input");
const keypad_numbers = document.querySelectorAll(".btn-numbers");
keypad_numbers.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        if (input_field.value === "error" || input_field.value === "NaN") input_field.value = "";

        if (new_number) {
            input_field.value = "";
            new_number = false;
        }

        if (e.target.textContent === "." && input_field.value.indexOf(".") !== -1) return;
        
        input_field.value += e.target.textContent;
    })
})

const keypad_operators = document.querySelectorAll(".btn-operators");
keypad_operators.forEach((elem) => {
    elem.addEventListener("click", (e) => {       
        inputs.push(parseFloat(input_field.value)); 
        if (e.target.textContent === "=" && new_number === true) {
            clearScreen();
            input_field.value = "error";
            return;
        }

        if (inputs.length === 2) {
            let result = sum(inputs[0], operator, inputs[1]);
            if (e.target.textContent === "=") {
                inputs.length = 0;
            } else {
                inputs.pop();
                inputs[0] = result;
            }
            
            if (result === "NaN") {
                clearScreen();
                input_field.value = "NaN";
                return;
            } else {
                input_field.value = (result / Math.trunc(result) === 1) ? result : parseFloat(result.toFixed(7));
            }
        }

        if (e.target.textContent !== "=") operator = e.target.textContent;

        new_number = true;  
    })
})

const clear_button = document.querySelector(".btn-clear");
clear_button.addEventListener("click", (e) => {
    clearScreen();
})

function clearScreen () {
    input_field.value = "";
    inputs.length = 0;
    new_number = false;
}

const backspace_button = document.querySelector(".btn-backspace");
backspace_button.addEventListener("click", (e) => {
    input_field.value = input_field.value.slice(0, -1);
})