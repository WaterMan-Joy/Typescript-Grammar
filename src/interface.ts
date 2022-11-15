interface Person {
  name: string;
  age: number;
  greet(str: string): void;
}

let inter1: Person;
inter1 = {
  name: "Joy",
  age: 20,
  greet(str: string) {
    console.log(str + this.name);
  },
};
console.log(inter1);
inter1.greet("Joy");
