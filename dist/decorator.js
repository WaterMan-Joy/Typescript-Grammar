"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(customString) {
    return function (constructor) {
        console.log("LOGGER FACTORY");
        console.log(customString);
        console.log(constructor);
    };
}
function WithTemplete(templete, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("RENDERING TEMPLETE");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = templete;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let CustomClass = class CustomClass {
    constructor() {
        this.name = "Ham";
        console.log("create person class");
    }
};
CustomClass = __decorate([
    Log("LOGGING"),
    WithTemplete("<h1>Hi</h1>", "app")
], CustomClass);
const pers = new CustomClass();
console.log(pers);
console.log("*****Product*****");
function ProductLogger(target, propertyName) {
    console.log("PROPERTY DESCRIPTOR");
    console.log(target);
    console.log(propertyName);
}
function ProductLogger2(target, name, descriptor) {
    console.log("AECCESS DESCRIPTOR");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function ProductLogger3(target, name, descriptor) {
    console.log("METHOD DESCRIPTOR");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
}
function ProductLogger4(target, name, position) {
    console.log("PARAMETER DESCRIPTOR");
    console.log("target", target);
    console.log("name", name);
    console.log("position", position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("get price is negative");
        }
    }
    getTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    ProductLogger
], Product.prototype, "title", void 0);
__decorate([
    ProductLogger2
], Product.prototype, "price", null);
__decorate([
    ProductLogger3,
    __param(0, ProductLogger4)
], Product.prototype, "getTax", null);
console.log("******");
const p1 = new Product("A", 10);
const p2 = new Product("B", 20);
console.log(p1);
console.log(p2);
console.log("************");
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
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
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const printBtn = new Printer();
const btn = document.getElementById("decoratorButton");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", printBtn.showMessage);
const registeredValidator = {};
function Required1(target, propertyName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propertyName]: ["required"] });
}
function PositiveNumber(target, propertyName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propertyName]: ["positive"] });
}
function Validate(obj) {
    const objValidatorConfig = registeredValidator[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const property in objValidatorConfig) {
        console.log(property);
        for (const validator of objValidatorConfig[property]) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required1
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!Validate(createdCourse)) {
        alert("invalid input!, please try again!");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=decorator.js.map