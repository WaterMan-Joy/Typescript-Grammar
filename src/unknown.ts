let userInput: unknown;
let anyUserInput: any;
let userName: string;

userInput = "ss";
console.log(typeof userInput);

if (typeof userInput === "string") {
  userName = userInput;
  console.log("username : ", userName);
} else {
  console.log("not str");
}

// userName = userInput;
// // Type 'unknown' is not assignable to type 'string'.ts(2322)
// console.log(userName);

anyUserInput = 10;
console.log(anyUserInput);
anyUserInput = "hihi";
console.log(typeof anyUserInput);
userName = anyUserInput;
console.log(anyUserInput);
