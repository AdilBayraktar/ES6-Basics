// Example 1
const arr1 = [1, 2, 3, 4];
console.log(arr1);

// Spread Method ... : Copy values of old object into the new one
const arr2 = [0, ...arr1, 5, 6, 7];
console.log(arr2);

// Example 2
const obj1 = { name: "Adil", Surname: "BAYRAKTAR" };
console.log(obj1);
const obj2 = { ...obj1, age: 27 };
console.log(obj2);

// Override Example: if we change the value of spreated object will be change
const obj3 = { ...obj2, name: "Fatih" };
console.log(obj3);

// Args Parameters: Able to take any count of params
let sum = (...args) => {
  return args.filter((arg) => arg > 15);
};

console.log(sum(8, 2, 12, 24, 18));
