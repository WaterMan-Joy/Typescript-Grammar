"use strict";
let userInput;
let anyUserInput;
let userName;
userInput = "ss";
console.log(typeof userInput);
if (typeof userInput === "string") {
    userName = userInput;
    console.log("username : ", userName);
}
else {
    console.log("not str");
}
anyUserInput = 10;
console.log(anyUserInput);
anyUserInput = "hihi";
console.log(typeof anyUserInput);
userName = anyUserInput;
console.log(anyUserInput);
//# sourceMappingURL=unknown.js.map