class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID : " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
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

const employee1 = Department.createEmployee("Joy");
console.log(employee1);
console.log("=================");
const it = new ITDepartment("d1", []);
it.addEmployee("A");
it.addEmployee("B");
it.describe();
it.printEmployeeInformation();
console.log(it);
console.log("=================");

const accounting1 = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting1);
console.log(accounting2);
accounting1.describe();

// class Person {
//   protected readonly age: number;
//   constructor(public readonly name: string) {
//     this.age = 30;
//   }
// }

// const p1 = new Person("aa");
// console.log(p1);
// console.log(p1.name);
// console.log("======================");

console.log("**************");

function Logger(cusString: string) {
  return function (constructor: Function) {
    console.log(cusString);
    console.log(constructor);
  };
}
@Logger("Person2 Logging")
class Person2 {
  name = "Joy";
  constructor() {
    console.log("Hi");
  }
}
const pers1 = new Person2();
console.log(pers1);
