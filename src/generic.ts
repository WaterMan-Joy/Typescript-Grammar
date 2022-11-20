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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// (method) ObjectConstructor.assign<T extends {}, U>(target: T, source: U): T & U (+3 overloads)

const merge1 = merge<{ name: string }, { age: number }>(
  { name: "Joy" },
  { age: 30 }
);
const merge2 = merge<{ hobbies: string[] }, { age: number }>(
  { hobbies: ["swim", "coding"] },
  { age: 30 }
);

console.log(merge1);
console.log(merge2);
console.log(merge1.name);
console.log(merge1.age);
console.log(merge2.hobbies[1]);
console.log(merge2.age);
console.log("===========");

interface lengthy {
  length: number;
}

function countAndDescription<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "no value";
  if (element.length > 0) {
    descriptionText = element.length + " - count";
  }
  return [element, descriptionText];
}
const c1 = countAndDescription("gigi");
console.log(c1);

console.log("===========");

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const e2 = extractAndConvert({ name: "Joy" }, "name");
console.log(e2);

console.log("=============");

class DataStorage<T extends string | number | boolean | object> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removoeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textDataStorage = new DataStorage<string>();
textDataStorage.addItem("A");
textDataStorage.addItem("B");
textDataStorage.addItem("C");
textDataStorage.removoeItem("B");
const all = textDataStorage.getItems();
console.log(all);
console.log(textDataStorage);
console.log("=================");

const numberDataStorage = new DataStorage<number | string>();
numberDataStorage.addItem(10);
numberDataStorage.addItem(2);
numberDataStorage.addItem("Hi");
numberDataStorage.addItem("ABC");
numberDataStorage.removoeItem(10);
const all2 = numberDataStorage.getItems();
console.log(all2);
console.log("*****objDataStorage*****");

const objDataStorage = new DataStorage<object>();
const myObj = { name: "Joy" };
console.log(myObj);
console.log(objDataStorage);
objDataStorage.addItem({ name: "Joy" });
objDataStorage.addItem({ name: "Han" });
objDataStorage.addItem({ name: "Kim" });
objDataStorage.removoeItem(myObj);
console.log(myObj);
const all3 = objDataStorage.getItems();
console.log(all3);

console.log("*****CourseGoal*****");
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  (courseGoal.title = title),
    (courseGoal.description = description),
    (courseGoal.completeUntil = completeUntil);
  return courseGoal as CourseGoal;
}
