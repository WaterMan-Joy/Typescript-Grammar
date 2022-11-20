"use strict";
const genericArray = [];
const genericArray2 = [];
const genericArray3 = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merge1 = merge({ name: "Joy" }, { age: 30 });
const merge2 = merge({ hobbies: ["swim", "coding"] }, { age: 30 });
console.log(merge1);
console.log(merge2);
console.log(merge1.name);
console.log(merge1.age);
console.log(merge2.hobbies[1]);
console.log(merge2.age);
console.log("===========");
function countAndDescription(element) {
    let descriptionText = "no value";
    if (element.length > 0) {
        descriptionText = element.length + " - count";
    }
    return [element, descriptionText];
}
const c1 = countAndDescription("gigi");
console.log(c1);
console.log("===========");
function extractAndConvert(obj, key) {
    return obj[key];
}
const e2 = extractAndConvert({ name: "Joy" }, "name");
console.log(e2);
console.log("=============");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removoeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textDataStorage = new DataStorage();
textDataStorage.addItem("A");
textDataStorage.addItem("B");
textDataStorage.addItem("C");
textDataStorage.removoeItem("B");
const all = textDataStorage.getItems();
console.log(all);
console.log(textDataStorage);
console.log("=================");
const numberDataStorage = new DataStorage();
numberDataStorage.addItem(10);
numberDataStorage.addItem(2);
numberDataStorage.addItem("Hi");
numberDataStorage.addItem("ABC");
numberDataStorage.removoeItem(10);
const all2 = numberDataStorage.getItems();
console.log(all2);
console.log("*****objDataStorage*****");
const objDataStorage = new DataStorage();
const myObj = { name: "Joy" };
console.log(myObj);
console.log(objDataStorage);
objDataStorage.addItem({ name: "Joy" });
objDataStorage.addItem({ name: "Han" });
objDataStorage.addItem({ name: "Kim" });
objDataStorage.removoeItem(myObj);
console.log(myObj);
const all3 = objDataStorage.getItems();
console.log(all3);
console.log("*****CourseGoal*****");
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {};
    (courseGoal.title = title),
        (courseGoal.description = description),
        (courseGoal.completeUntil = completeUntil);
    return courseGoal;
}
//# sourceMappingURL=generic.js.map