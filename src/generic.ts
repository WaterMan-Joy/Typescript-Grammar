const genericArray: Array<string> = [];
const genericArray2: Array<string | number> = [];
const genericArray3: string[] = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("dd");
//     resolve("done!");
//   }, 3000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}
// (method) ObjectConstructor.assign<T extends {}, U>(target: T, source: U): T & U (+3 overloads)

const merge1 = merge({ name: "Joy" }, { age: "30" });
const merge2 = merge({ hobbies: ["swim", "coding"] }, { age: "30" });
console.log(merge1.name);
console.log(merge2.hobbies[1]);
