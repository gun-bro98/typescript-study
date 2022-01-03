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
