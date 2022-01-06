// const names: Array<String> = []; //string[]
// // names[0].split(" ");

// //Promise<string>이라고 설정을 안해주면, 프로미스 체인할 때 인자에 대해서
// //어떤 함수를 적용할 수 있을지 모른다. 그게 문자열이라도 문자열 관련된 함수를 쓸 수 없다.
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(" THis is done");
//   }, 2000);
//   // reject(new Error("oh no"));
//   console.log(reject);
// });

// promise.then((data) => {
//   console.log(data.split(" "));
// });
//타입이 고정이 안되어 있을 때 사용하는 방식

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Park", hobbies: ["Sports"] },
//   { age: 25 }
// );
//T와 U를 object로 제한 인터페이스를 할당해서 제한 할 수도 있다.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Park", hobbies: ["Sports"] }, { age: 25 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["sports", "hiking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "gunbro" }, "name");
