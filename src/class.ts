class Person {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  discribe() {
    console.log("aa" + this.name);
  }
}
const person1 = new Person("hi");
person1.discribe();
