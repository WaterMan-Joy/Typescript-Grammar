class Person {
  // private id: string;
  // public name: string;
  private emptyArray: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  describe(this: Person) {
    console.log(`person id : ${this.id}`);
  }
  emptyAdd(add: string) {
    this.emptyArray.push(add);
  }

  printEmptyInformaion() {
    console.log(this.emptyArray.length);
    console.log(this.emptyArray);
  }
}

class ITPerson extends Person {
  constructor(id: string, public admin: string[]) {
    super(id, "hh");
  }
}

const person1 = new ITPerson("conde id", ["a", "b"]);
person1.describe();

// const personCopy = { name: "Jo", describe: person1.describe };
// personCopy.describe();
person1.emptyAdd("aa");

person1.printEmptyInformaion();
// person1.name = "a";
console.log(person1.name);
console.log(person1);
