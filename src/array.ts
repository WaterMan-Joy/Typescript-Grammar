const hobbies = ["swimming", "codding", "climming", "arting"];
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

const addArray2 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  });
};

const addNumber = addArray(1, 2, 3, 4, 5);
const addNumber2 = addArray2(1, 2, 3);

const [ho1, ho2, ...ranHo] = hobbies;
