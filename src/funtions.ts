const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
button?.addEventListener("click", (event) => console.log(`Hui ${event}`));

printOutput(add(4, 2));

type AddFn = (n1: number, n2: number) => number;
let add2: AddFn;
add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

const a1 = add2(2, 4);
console.log(a1);
