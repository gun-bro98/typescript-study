class Department {
  // name: string;
  protected employees: string[] = [];
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

class ITDeparment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    // this.admins = admins; //딱히 쓸 필요가 없다. 매개변수 설정할 때 이미 선언을 한 것
  }
}

class AccountingDeparment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDeparment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.name = "New Name";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDeparment("d2", []);

accounting.addReport("Something went wrong...");

accounting.addEmployee("박건형");
accounting.addEmployee("Max");

accounting.printReports();

accounting.printEmployeeInformation();

console.log(accounting);

// const accoutingCopy = { name: "ss", describe: accounting.describe };
// accoutingCopy.describe();
