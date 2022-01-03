type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  //타입가드 키워드: typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  // 타입가드 키워드: in
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date" + emp.startDate);
  }
}
printEmployeeInformation(el);

class Car {
  drive() {
    console.log("Driving");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
  // 클래스 형태일 때의 타입 가드
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Hourse {
  type: "hourse";
  runningSpeed: number;
}

type Animal = Bird | Hourse;

function moveAnimal(animal: Animal) {
  let speed;
  // 인터페이스는 in 키워드를 사용해서 타입가드 처럼 쓸 수가 있긴하다.
  // 다만 스트링 형태로 적는거라 틀릴 수도 있다.
  // 그러니 discriminated Unions이라는 명칭이지만 스위치 문 사용을 뜻한다.
  // 인터페이스말고도 다른 객체들도 사용가능
  // 이것은 if문 양이 많을 때 사용하면 된다.
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "hourse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("달리는 속도" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 30 });
