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
//# sourceMappingURL=generic.js.map