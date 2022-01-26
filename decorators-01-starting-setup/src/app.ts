//데코레이터는 함수이다.
//데코레이터는 다른 개발자들이 클래스에 더해서 쓰는 도구
//데코레이터 팩토리 => 데코레이터를 반환하는 함수
function Logger(logString: string) {
  // 반환되는 내부 데코레이터 함수가 사용하는 값을 전달 할 수 있다는 이점이
  //있다.
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // '_'는 이 인수가 있는 건 알겠는데 필요 없다는 신호이다.
  // return function (_: Function) {
  //   const hookEl = document.getElementById(hookId);
  //   if (hookEl) {
  //     hookEl.innerHTML = template;
  //   }
  // };
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //원래는 리턴이 없었는데, 인스턴스화 할 때만 발생 시키기 위해서 리턴할 때 클래스를 보내주는 것
    //기존에 있던 클래스의 내용이 그대로 유지 되면서 내용이 추가된다.
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

//@은 타입스크립트에서 인식하는 특별한 식별자
//@뒤에는 함수가 나오는데 이건 실행이 아니라 지목이다.
//자바스크립트가 클래스 정의, 생성자 함수 정의를 찾으면 데코레이터가 실행됨
//실행 순서는 아래에서 위로 순이다.
//대신 데코레이터 팩토리를 써서 사용하는 경우 반환하기 전에
//어떠한 이벤트를 발생시킨다면 그게 먼저 실행된다.
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object<h2>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!"); //속성 데코레이터
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator"); //접근자 데코레이터
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator"); //함수 데코레이터
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator"); //매개변수 데코레이터
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      //this는 PropertyDescriptor 이것을 가리키므로 예전에 있던 설명자에 덮어쓴다.
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This work!";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
//bind를 쓰는 이유는 this가 가리키는 게 정확하게 잡히지 않을 때
//bind를 써서 p를 정확하게 잡아서 this가 정확하게 message를 찾음
button.addEventListener("click", p.showMessage);

//  ---

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};
// 속성을 대상으로 할 때는 설명자 없음 => descriptor: PropertyDescriptor => X
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[target] ?? []),
      "required",
    ],
  };
  console.log(registeredValidators["Course"]);
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
  console.log(registeredValidators["Course"]);
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  console.log(registeredValidators);
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      console.log(validator);
      switch (validator) {
        case "required":
          // !!는 true나 false 값으로 만들기 위해 사용함
          //원래 obj[prop]은 boolean으로 안나오지만, 부정하면서 bollean 값으로 바뀌고, 다시
          //부정해서 원래 값이 있었더라면 true를 주는 것
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }

  console.log(createdCourse);
});
