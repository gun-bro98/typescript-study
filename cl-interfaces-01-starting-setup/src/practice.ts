abstract class Animal {
  protected kind: string;
  constructor(kind: string) {
    this.kind = kind;
  }
  abstract beBorn(this: Animal): void;

  get currentKind() {
    return this.kind;
  }

  set currentKind(value: string) {
    if (!value) {
      throw new Error("No Parameter");
    }
    this.kind = value;
  }
}

class Cat extends Animal {
  constructor(kind: string, public name: string) {
    super(kind);
  }

  printName() {
    console.log(`이 ${this.kind}의 이름은 ${this.name}`);
  }

  beBorn() {
    console.log(this.kind + "로 태어났다.");
  }
}
const cat = new Cat("고양이", "고양희");
cat.printName();
cat.beBorn();
console.log(cat.currentKind);

// const cat = new Animal("Mammalia");

//결과
//Mammalia
