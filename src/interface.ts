interface Named {
  name?: string;
  outputName?: string;
}

interface Person extends Named {
  readonly age: number;
  greet(str: string): void;
}
interface Active {
  ex: string;
}

let inter1: Person;
inter1 = {
  name: "Joy",
  age: 20,
  greet(str: string) {
    console.log(str + "-" + this.name);
  },
};
console.log(inter1);
inter1.greet("Hi");
// inter1.age = 23;

class PersonClass implements Person, Active {
  name?: string;
  age: number;
  ex: string;
  constructor(n: string, age: number, e: string) {
    this.name = n;

    this.age = age;
    this.ex = e;
  }
  greet(str: string): void {
    console.log(str + this.age);
  }
}
class PersonClass2 implements Named {
  name?: string;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
}

const pp2 = new PersonClass2();
console.log(pp2.name);

const pp1 = new PersonClass("a", 30, "swim");

console.log(pp1);
console.log(pp1.name);
console.log(pp1.age);
pp1.age = 2;
// pp1.name = "w";
console.log(pp1.age);
console.log(pp1.name);

console.log("===========");

interface addFcc {
  (a: number, b: number): number;
}

let add3: addFcc;
add3 = (a: number, b: number) => {
  return a + b;
};
const a3 = add3(2, 4);
console.log(a3);
