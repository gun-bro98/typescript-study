function add(n1: number, n2: number): number{
  return n1 + n2;
}
//void
function printResult(num: number): void{
  console.log('Result: ' + num);
}
//undefined
function printResult2(num: number): undefined{
  console.log('Result2: ' + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  console.log(cb(result));
}

console.log(printResult(add(5, 12))); // => printResult가 return 값으로 void를 내놓지만 사실
//undefined라는 값을 도출하고 있다. 결국 void 타입이 아닌 undefined일지도 모른다.
printResult(add(5, 12));
// 이것은 그냥 함수 타입이다!
// let combineValues: Function; 
// 이것은 함수 타입이며, 매개변수 수와 타입과 return 되는 것의 타입도 맞아야한다!
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8,8));
addAndHandle(10, 20, (result) => {
  // console.log(result);
  return result;
});

