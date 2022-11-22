function Log(customString: string) {
  return function (constructor: Function) {
    console.log("LOGGER FACTORY");
    console.log(customString);
    console.log(constructor);
  };
}
function WithTemplete(templete: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("RENDERING TEMPLETE");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = templete;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Log("LOGGING")
@WithTemplete("<h1>Hi</h1>", "app")
class CustomClass {
  name = "Ham";
  constructor() {
    console.log("create person class");
  }
}

const pers = new CustomClass();
console.log(pers);

console.log("*****Product*****");

function ProductLogger(target: any, propertyName: string | symbol) {
  console.log("PROPERTY DESCRIPTOR");
  console.log(target);
  console.log(propertyName);
}
function ProductLogger2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("AECCESS DESCRIPTOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ProductLogger3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("METHOD DESCRIPTOR");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
}

function ProductLogger4(target: any, name: string | symbol, position: number) {
  console.log("PARAMETER DESCRIPTOR");
  console.log("target", target);
  console.log("name", name);
  console.log("position", position);
}

class Product {
  @ProductLogger
  title: string;
  private _price: number;
  @ProductLogger2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("get price is negative");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @ProductLogger3
  getTax(@ProductLogger4 tax: number) {
    return this._price * (1 + tax);
  }
}

console.log("******");

const p1 = new Product("A", 10);
const p2 = new Product("B", 20);
console.log(p1);
console.log(p2);

console.log("************");

function Autobind(
  _: any,
  _2: string | symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printBtn = new Printer();
const btn = document.getElementById("decoratorButton");
btn?.addEventListener("click", printBtn.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}
const registeredValidator: ValidatorConfig = {};

function Required1(target: any, propertyName: string): void {
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: [
      ...(registeredValidator[target.constructor.name]?.[propertyName] ?? []),
      "required",
    ],
  };
}
function PositiveNumber(target: any, propertyName: string): void {
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: [
      ...(registeredValidator[target.constructor.name]?.[propertyName] ?? []),
      "positive",
    ],
  };
}
function Validate(obj: any): boolean {
  const objValidatorConfig = registeredValidator[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const property in objValidatorConfig) {
    console.log(property);
    for (const validator of objValidatorConfig[property]) {
      console.log(validator);
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[property];
          break;
        case "positive":
          isValid = isValid && obj[property] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required1
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;
  const createdCourse = new Course(title, price);
  if (!Validate(createdCourse)) {
    alert("invalid input!, please try again!");
    return;
  }
  console.log(createdCourse);
});
