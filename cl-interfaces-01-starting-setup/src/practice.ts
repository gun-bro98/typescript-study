class Animal {
  kind: string;
  constructor(kind: string) {
    this.kind = kind;
  }
  beBorn(this: Animal) {
    console.log(this.kind);
  }
}

const cat = new Animal("Mammalia");
const cat2 = { kind: "Mammalia", beBorn: cat.beBorn };
cat.beBorn();
//결과
//Mammalia
