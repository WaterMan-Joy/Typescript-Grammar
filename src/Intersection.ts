type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Joy",
  privilege: ["a", "b"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Nuberic = number | boolean;

function intersecionAdd(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const intersecionAdd1 = intersecionAdd(2, 4);
const intersecionAdd2 = intersecionAdd("12", "33");
const result = intersecionAdd("ji", "dd");
console.log(typeof result);
console.log(typeof intersecionAdd1);
console.log(typeof intersecionAdd2);

type UnKnownEmployee = Admin | Employee;
function printEmployeeInformation(emp: UnKnownEmployee) {
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
  loadCargo(amount: number) {
    console.log("Truck ... ", +amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(10);
  }
}
useVehicle(v1);
useVehicle(v2);

console.log("=============");

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function printAnimal(animal: Animal) {
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

const p = document.getElementById("p")!;
const inputEl = document.getElementById("user-input") as HTMLInputElement;

inputEl.value = "Hello";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  name: "Not found name",
  email: "Not found email",
};
