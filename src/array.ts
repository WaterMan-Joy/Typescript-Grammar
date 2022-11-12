const hobbies = ["swimming", "codding"];
const activeHobbiew = ["swimming"];

activeHobbiew.push(...hobbies);

const person = {
  name: "Joy",
  age: 30,
};

const copyPerson = person;
const copyPerson2 = { ...person };

const addArray = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  });
};

const addNumber = addArray(1, 2, 3, 4, 5);
