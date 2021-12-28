//바닐라 자바스크립트에는 interface가 없다.
//interface 내부의 속성들은 초기화 x
//이 객체의 프로퍼티 처럼 타입을 가져야할 때 틀을 만든 것
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person = {
  name: "gunbro",
  age: 24,
  greet(pram) {
    console.log(pram);
  },
};

user1.greet("안녕");

//커스텀 타입과 인터페이스는 비슷하지만, 커스텀 타입이 더 융통성이 있다는 점에서
//다르다. 인터페이스는 명확하게 해야할 때 사용된다.
//클래스가 객체를 만들 때 인터페이스는 명세서 느낌으로 쓰인다.
