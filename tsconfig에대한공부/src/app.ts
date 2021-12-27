// let userInput: unknown;
// let text: string;
// userInput = 5;
// userInput = "10";
// if(typeof userInput === 'string'){
//   text=userInput;
// }

// console.log('Hi');

// function generateError(message: string, code: number){
//   throw {message: message, errorCode: code};
// }

// generateError('An error occurred!', 500);
const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

button.addEventListener("click", clickHandler.bind(null, "hi"));
function addOthers(...numbers: number[]) {
  console.log(numbers);
  const data = numbers.reduce((currentResult, currentValue) => {
    console.log("currentResult " + currentResult);
    console.log("currentValue " + currentValue);
    return currentResult + currentValue;
  }, 0);
  console.log(data);
}
addOthers(1, 3, 5);
