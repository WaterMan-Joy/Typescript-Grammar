class Person {
  // private id: string;
  // public name: string;
  private emptyArray: string[] = [];
  protected emptyArray2: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  describe(this: Person) {
    console.log(`person id : ${this.id}`);
  }
  emptyAdd(add: string) {
    this.emptyArray.push(add);
    this.emptyArray2.push(add);
  }

  printEmptyInformaion() {
    console.log(this.emptyArray.length);
    console.log(this.emptyArray);
  }
}

class ITPerson extends Person {
  public admin: string[];
  constructor(id: string, admin: string[]) {
    super(id, "hh");
    this.admin = admin;
  }
}

class acountingPerson extends Person {
  lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Not last report");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Not found add report value");
    }
    this.addReport(value);
  }

  constructor(id: string, private report: string[]) {
    super(id, "t1");
    this.lastReport = report[0];
  }

  addReport(add: string) {
    this.report.push(add);
    this.lastReport = add;
  }
  printReport() {
    console.log(this.report.length);
    console.log(this.report);
  }
  addEmpty(name: string) {
    if (name === "abc") {
      return;
    }
    this.emptyArray2.push(name);
  }
}

const person1 = new ITPerson("conde id", ["a", "b"]);
person1.describe();

// const personCopy = { name: "Jo", describe: person1.describe };
// personCopy.describe();
// person1.emptyAdd("aa");

// person1.printEmptyInformaion();
// person1.name = "a";
// console.log(person1.name);
// console.log(person1);

const person2 = new acountingPerson("id2", ["re1", "re2"]);
console.log("last : ", person2.lastReport);
person2.addReport("re3");
person2.addReport("re4");
person2.addReport("re5");
person2.addEmpty("c");
person2.printReport();
console.log(person2);
console.log("-----------");
console.log(person2.mostRecentReport);
person2.mostRecentReport = "";
