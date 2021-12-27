abstract class Department {
  static fiscalYear = "2021";
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    this.name = name;
    this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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
  describe() {
    console.log("IT Department - ID " + this.id);
  }
}

class AccountingDeparment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDeparment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.name = "New Name";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDeparment("d2", []);
accounting.mostRecentReport = "Year End Project";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("박건형");
accounting.addEmployee("Max");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accoutingCopy = { name: "ss", describe: accounting.describe };
// accoutingCopy.describe();
