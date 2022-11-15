"use strict";
let inter1;
inter1 = {
    name: "Joy",
    age: 20,
    greet(str) {
        console.log(str + "-" + this.name);
    },
};
console.log(inter1);
inter1.greet("Hi");
class PersonClass {
    constructor(n, age, e) {
        this.name = n;
        this.age = age;
        this.ex = e;
    }
    greet(str) {
        console.log(str + this.age);
    }
}
class PersonClass2 {
    constructor(n) {
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
console.log(pp1.age);
console.log(pp1.name);
console.log("===========");
let add3;
add3 = (a, b) => {
    return a + b;
};
const a3 = add3(2, 4);
console.log(a3);
//# sourceMappingURL=interface.js.map