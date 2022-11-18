"use strict";
const genericArray = [];
const genericArray2 = [];
const genericArray3 = [];
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const merge1 = merge({ name: "Joy" }, { age: "30" });
const merge2 = merge({ hobbies: ["swim", "coding"] }, { age: "30" });
console.log(merge1.name);
console.log(merge2.hobbies[1]);
//# sourceMappingURL=generic.js.map