"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.emptyArray = [];
        this.emptyArray2 = [];
    }
    describe() {
        console.log(`person id : ${this.id}`);
    }
    emptyAdd(add) {
        this.emptyArray.push(add);
        this.emptyArray2.push(add);
    }
    printEmptyInformaion() {
        console.log(this.emptyArray.length);
        console.log(this.emptyArray);
    }
}
class ITPerson extends Person {
    constructor(id, admin) {
        super(id, "hh");
        this.admin = admin;
    }
}
class acountingPerson extends Person {
    constructor(id, report) {
        super(id, "t1");
        this.report = report;
        this.lastReport = report[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Not last report");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Not found add report value");
        }
        this.addReport(value);
    }
    addReport(add) {
        this.report.push(add);
        this.lastReport = add;
    }
    printReport() {
        console.log(this.report.length);
        console.log(this.report);
    }
    addEmpty(name) {
        if (name === "abc") {
            return;
        }
        this.emptyArray2.push(name);
    }
}
const person1 = new ITPerson("conde id", ["a", "b"]);
person1.describe();
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
//# sourceMappingURL=class.js.map