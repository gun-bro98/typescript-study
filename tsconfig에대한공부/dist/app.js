"use strict";
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked! " + message);
}
button.addEventListener("click", clickHandler.bind(null, "hi"));
function addOthers(...numbers) {
    console.log(numbers);
    const data = numbers.reduce((currentResult, currentValue) => {
        console.log("currentResult " + currentResult);
        console.log("currentValue " + currentValue);
        return currentResult + currentValue;
    }, 0);
    console.log(data);
}
addOthers(1, 3, 5);
