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
