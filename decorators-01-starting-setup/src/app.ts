//데코레이터는 함수이다.

function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}
//@은 타입스크립트에서 인식하는 특별한 식별자
//@뒤에는 함수가 나오는데 이건 실행이 아니라 지목이다.
//자바스크립트가 클래스 정의, 생성자 함수 정의를 찾으면 데코레이터가 실행됨
@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
