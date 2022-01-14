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
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
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
