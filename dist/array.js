"use strict";
const hobbies = ["swimming", "codding"];
const activeHobbiew = ["swimming"];
activeHobbiew.push(...hobbies);
const person = {
    name: "Joy",
    age: 30,
};
const copyPerson = person;
const copyPerson2 = Object.assign({}, person);
const addArray = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    });
};
const addArray2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    });
};
const addNumber = addArray(1, 2, 3, 4, 5);
const addNumber2 = addArray2(1, 2, 3);
//# sourceMappingURL=array.js.map