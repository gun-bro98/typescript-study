class Department {
  // name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log(` Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna";
// accounting.id = 'd5';

accounting.describe();
accounting.printEmployeeInformation();

// const accoutingCopy = { name: "ss", describe: accounting.describe };
// accoutingCopy.describe();
