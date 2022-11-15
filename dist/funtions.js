"use strict";
const add = (a, b) => a + b;
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => console.log(`Hui ${event}`));
printOutput(add(4, 2));
let add2;
add2 = (n1, n2) => {
    return n1 + n2;
};
const a1 = add2(2, 4);
console.log(a1);
//# sourceMappingURL=funtions.js.map