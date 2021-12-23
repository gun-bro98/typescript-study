class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department " + this.name);
  }
}

const accounting = new Department("Accounting");
const accoutingCopy = { name: "ss", describe: accounting.describe };
accoutingCopy.describe();
