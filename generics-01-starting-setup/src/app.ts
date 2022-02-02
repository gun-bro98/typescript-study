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
//제네릭 타입은 타입 안전성과 융통성의 완벽한 조화를 준다.
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

console.log(extractAndConvert({ name: "gunbro" }, "name"));
//만약 제네릭 쓰지 않고 유니온 타입으로 해결한다고 하면, 일일이 타입을 다 정해줘야한다.
//그리고 유니온 타입만으로 관리한다면 클래스에 하나의 타입으로 고수한다기 보다는 여러 타입을 쓸수
//있다가 된다.

//유니온 타입은 매번 여러 타입 중 하나로 함수를 호출하려고 하는 경우
//제네릭 타입은 전체 클래스 인스턴스를 생성하거나 함수를 생성하고 그다음부터 계속 같은 타입을
//사용해서 해당 타입으로 고정하고 싶을 때 사용. 그래서 하나의 타입만 사용하고 싶을 때 사용하자
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // item이 참조형 타입일 때 -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Park");
textStorage.removeItem("Park");
console.log(textStorage.getItems());

// const numberStorage = new DataStorage<string>();
// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Park" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

//일반 유틸리티 타입
//1. partial를 사용하면 인터페이스에 있는 모든 속성이 객체 안에 있을 필요가 없다.
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
//2. Readonly
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Park");

type Name = [
  {
    name: string;
  }
];

let array: Name= [{name: "park"}];

const insertData = <T extends object>(data: T, array: object[]): object[]  => {
  array.push(data);
  return array;
}
console.log(insertData({name: "gunbro"}, array));
