
function MethodDecorator(target: any, name: string, descriptor: PropertyDescriptor){
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ClassDecorator1(logString: string){
  return function<T extends {new (...args:any[]):{}}> (constructor: T){
    console.log(constructor.prototype);
    console.log(logString);
    // return class extends constructor {
    //   name="gunbro";
    //   kind="동물"
    // }
  }
}

function ClassDecorator2(logString: string){
  return function (constructor: Function){
    console.log(constructor.prototype);
    console.log(logString);
  }
}

function PropertyDecorator(target: any, name: string){
  console.log(target);
  console.log(name);
}

function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor){
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterDecorator(target: any, name: string | Symbol, position: number){
  console.log(target);
  console.log(name);
  console.log(position);
}
@ClassDecorator2('현재 로기기기기깅중')
@ClassDecorator1('현재 로깅 중')
class Animal {
  @PropertyDecorator
  protected name: string;
  protected kind: string;
  
  constructor(name: string, kind: string) {
    
    this.name = name;
    this.kind = kind;
  }

  @MethodDecorator
  printMessage() {
    console.log(
      "이 동물의 종류는" + this.kind + "이고, 이름은" + this.name + "이야"
    );
  }
}

class Cat extends Animal {
  private isCompanion: boolean;
  protected master?: string;
  constructor(
    name: string,
    kind: string,
    isCompanion: boolean,
    master?: string
  ) {
    super(name, kind);
    this.isCompanion = isCompanion;
    if(master){
      this.master = master;
    }
  }

  jumpUp() {
    console.log(this.name + "가(이) 점프했어!");
  }

  describeMaster() {
    if (this.isCompanion) {
      console.log(this.name + "의 주인은 " + this.master + "입니다.");
    } else {
      console.log(this.name + "의 주인은 없습니다.");
    }
  }
}

const cat = new Cat('쿠쿠', '고양이과', true, '김철수');
cat.describeMaster();
cat.jumpUp();
