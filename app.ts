let userInput: unknown;
let text: string;
userInput = 5;
userInput = "10";
if(typeof userInput === 'string'){
  text=userInput;
}

function generateError(message: string, code: number){
  throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);