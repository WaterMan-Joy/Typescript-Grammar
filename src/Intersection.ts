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
