"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Lo(customString) {
    return function (constructor) {
        console.log(customString);
        console.log(constructor);
    };
}
function WithTemplete(templete, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = templete;
        }
    };
}
let CustomClass = class CustomClass {
    constructor() {
        this.name = "Joy";
        console.log("custom Class");
    }
};
CustomClass = __decorate([
    WithTemplete("<h1>Hello</h1>", "app")
], CustomClass);
//# sourceMappingURL=decorator.js.map