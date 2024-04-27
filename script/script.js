"use strict";

let num_1 = 0;
let num_2 = 0;
let operator = "";

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

function operate(num_1, operator, num_2) {
    if (operator === "+") {
        return add(num_1, num_2);
    } else if (operator === "-") {
        return subtract(num_1, num_2);
    } else if(operator === "*") {
        return multiply(num_1, num_2);
    } else if (operator === "/") {
        return divide(num_1, num_2);
    } else {
        return "error";
    }
}
console.log(`${operate(2, "+", 2)}`);
console.log(`${operate(10, "-", 2)}`);
console.log(`${operate(8, "*", 2)}`);
console.log(`${operate(8, "/", 2)}`);