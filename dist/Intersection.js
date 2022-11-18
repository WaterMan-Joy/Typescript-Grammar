"use strict";
const e1 = {
    name: "Joy",
    privilege: ["a", "b"],
    startDate: new Date(),
};
console.log(e1);
function intersecionAdd(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const intersecionAdd1 = intersecionAdd(2, 4);
const intersecionAdd2 = intersecionAdd("12", "33");
const result = intersecionAdd("ji", "dd");
console.log(typeof result);
console.log(typeof intersecionAdd1);
console.log(typeof intersecionAdd2);
function printEmployeeInformation(emp) {
    if ("privilege" in emp) {
        console.log("privilege : " + emp.privilege);
    }
    if ("startDate" in emp) {
        console.log("startDate : " + emp.startDate);
    }
}
printEmployeeInformation(e1);
console.log("=============");
class Car {
    drive() {
        console.log("Drive ...");
    }
}
class Truck {
    drive() {
        console.log("Drive Truck ...");
    }
    loadCargo(amount) {
        console.log("Truck ... ", +amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);
console.log("=============");
function printAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("animal speed : " + speed);
}
printAnimal({ type: "horse", runningSpeed: 10 });
console.log("==================");
const p = document.getElementById("p");
const inputEl = document.getElementById("user-input");
inputEl.value = "Hello";
const errorBag = {
    name: "Not found name",
    email: "Not found email",
};
//# sourceMappingURL=intersection.js.map