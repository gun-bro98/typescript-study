//TypeScript
//싱글톤 패턴의 개념이 녹아 있는 class

abstract class Animal {
  static readonly livingPlanet = "earth";
  constructor(protected kind: string, public habitat: string) {
    this.kind = kind;
    this.habitat = habitat;
  }

  get currentKind() {
    if (this.kind) {
      return this.kind;
    }
    throw new Error("There is no kind");
  }

  set currentKind(kind: string) {
    if (!kind) {
      throw new Error("There is no parameter");
    }
    this.kind = kind;
  }

  abstract printIntroduction(): void;

  static printLivingPlanet() {
    console.log("우리가 살고 있는 행성: " + this.livingPlanet);
  }
}

class Cat extends Animal {
  private static instance: Cat;
  private constructor(kind: string, habitat: string, public kindType: string) {
    super(kind, habitat);
  }

  static getInstance() {
    if (Cat.instance) {
      return this.instance;
    }
    return new Cat("포유류", "도시", "고양이과");
  }

  //override
  printIntroduction() {
    console.log("이 동물의 종류는 " + this.kind + "입니다.");
    console.log("그리고 서식지는 " + this.habitat + "입니다.");
    console.log("이 동물의 세부적인 종류는" + this.kindType + "입니다.");
  }
}
const cat = Cat.getInstance();
cat.printIntroduction();
