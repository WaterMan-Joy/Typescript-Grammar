"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.emptyArray = [];
    }
    describe() {
        console.log(`person id : ${this.id}`);
    }
    emptyAdd(add) {
        this.emptyArray.push(add);
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
    }
    addReport(add) {
        this.report.push(add);
    }
    printReport() {
        console.log(this.report.length);
        console.log(this.report);
    }
}
const person1 = new ITPerson("conde id", ["a", "b"]);
person1.describe();
person1.emptyAdd("aa");
person1.printEmptyInformaion();
console.log(person1.name);
console.log(person1);
const person2 = new acountingPerson("id2", ["re1", "rew2"]);
person2.addReport("asdasdas");
person2.printReport();
console.log(person2);
//# sourceMappingURL=class.js.map