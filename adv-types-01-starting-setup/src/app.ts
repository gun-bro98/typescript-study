type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// intersection type
type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
//function overload
//3번 째 add처럼 사용해서 return 값을 string과 number로 한다고 쳐도
//문자열 전용 함수를 쓸 수 있을지는 모른다. 그래서 function overload를 사용
//이것을 사용하면 인자에 맞게 결과를 보내준다.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  //타입가드 키워드: typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("a", "b");
result.split(" ");

//optional chaining(선택적 연결)

const fetchedUserData = {
  id: "u1",
  name: "gunbro",
  job: {
    title: "FE Developer",
    description: "I am currently a college student. ",
  },
};
//일반 자바스크립트에서 오류 피하기
// console.log(fetchedUserData.job && fetchedUserData.job.title );
//타입스크립트에서 사용하는 optional chaining
//물음표 앞에 있는 요소가 정의되지 않았다면 해당 요소에 접근하지 않는다.
console.log(fetchedUserData?.job?.title);

// Nullish coalescing => 무효 합체? nullish 병합

const userInput = null;
//null과 undefined에만 한정해서 fallback 값(뒤의 값)이 사용되어야한다.
//이게 nullish 병합
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   // 타입가드 키워드: in
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date" + emp.startDate);
//   }
// }
// printEmployeeInformation(el);

// class Car {
//   drive() {
//     console.log("Driving");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   if ("loadCargo" in vehicle) {
//     vehicle.loadCargo(1000);
//   }
//   // 클래스 형태일 때의 타입 가드
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Hourse {
//   type: "hourse";
//   runningSpeed: number;
// }

// type Animal = Bird | Hourse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   // 인터페이스는 in 키워드를 사용해서 타입가드 처럼 쓸 수가 있긴하다.
//   // 다만 스트링 형태로 적는거라 틀릴 수도 있다.
//   // 그러니 discriminated Unions이라는 명칭이지만 스위치 문 사용을 뜻한다.
//   // 인터페이스말고도 다른 객체들도 사용가능
//   // 이것은 if문 양이 많을 때 사용하면 된다.
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "hourse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("달리는 속도" + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 30 });
// //HTMLInputElement 사용하기 1: 타입을 정확하게 알 때
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // userInputElement.value = "Hi there!";

// //HTMLInputElement 사용하기 2: 타입을 정확하게 알 때
// // const userInputElement = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// // userInputElement.value = "Hi there!";

// //HTMLInputElement 사용하기 3: 타입이 정확하지 않을 때 모를 때
// const userInputElement = document.getElementById("user-input");
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   // {email: 'Not a valid email', username: 'Must start with a character'}
//   //이게 인덱스 속성이다. => 인터페이스에 속성의 이름이 정해진 게 아니고 타입만 정한 것이기에 유연성 향상
//   //속성들의 이름은 문자열이어야하고, 값들도 문자열이어야한다.
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
// };
