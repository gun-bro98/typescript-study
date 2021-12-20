"use strict";
let userInput;
let text;
userInput = 5;
userInput = "10";
if (typeof userInput === 'string') {
    text = userInput;
}
console.log('Hi');
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
