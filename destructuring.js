// Arrays Destructuring

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [num] = arr;
console.log(num); // Output: 1

const [, , , num2] = arr;
console.log(num2);

// Object Destructuring

const obj = { name: "Adil", age: 27, title: "Software Engineer" };

const { name } = obj;
console.log(name);
