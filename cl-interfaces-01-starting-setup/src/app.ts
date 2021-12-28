//바닐라 자바스크립트에는 interface가 없다.
//interface 내부의 속성들은 초기화 x
//이 객체의 프로퍼티 처럼 타입을 가져야할 때 틀을 만든 것
interface Greetable {
  //readonly를 달 수 있다. 그리고 접근 제어자는 못 단다.
  readonly name: string;
  greet(phrase: string): void;
}
//여러 개의 인터페이스를 사용할 수 있다. Greetable 뒤에 콤마를 달아서 연달아서 달 수 있다는 것
class Person implements Greetable {
  constructor(public name: string) {}

  greet(pram: string) {
    console.log(pram + this.name);
  }
}

let user1: Greetable = {
  name: "gunbro",
  greet(pram) {
    console.log(pram + this.name);
  },
};

let user2 = new Person("박건형");

console.log(user2);

user1.greet("안녕");

//커스텀 타입과 인터페이스는 비슷하지만, 커스텀 타입이 더 융통성이 있다는 점에서
//다르다. 인터페이스는 명확하게 해야할 때 사용된다.
//클래스가 객체를 만들 때 인터페이스는 명세서 느낌으로 쓰인다.

//추상클래스와 인터페이스는 또 다르다.
//추상클래스는 실제로 값이 들어있는 것과 선언만 되어 있는 것으로 혼합이 되어있다.
//인터페이스는 실제로 값이 모두 없다.
