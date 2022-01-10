//데코레이터는 함수이다.
//데코레이터 팩토리 => 데코레이터를 반환하는 함수
function Logger(logString: string) {
  // 반환되는 내부 데코레이터 함수가 사용하는 값을 전달 할 수 있다는 이점이
  //있다.
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
//@은 타입스크립트에서 인식하는 특별한 식별자
//@뒤에는 함수가 나오는데 이건 실행이 아니라 지목이다.
//자바스크립트가 클래스 정의, 생성자 함수 정의를 찾으면 데코레이터가 실행됨
@Logger("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
