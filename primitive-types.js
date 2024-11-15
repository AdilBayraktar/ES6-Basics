// Primitive types is like spread operator but in spread operator we take a copy from the original object and make any change on it without affecting on the original object.
// In primitive types we take a copy of the original object and memory of the original object.

// For example "Spread operator":
let student = {
  name: "Adil",
};

let newStudent = { ...student };
student.name = "Ahmad";
console.log(newStudent); // Output: { name: "Adil"}    // Any change on the original object will not affect on the copied object

// For example "Spread operator":
let student1 = {
  name: "Adil",
};

let newstudent1 = student1;
student1.name = "Fatih";

console.log(newstudent1); // Output: { name: "Fatih"}   // Any change on the original object will affect on the copeid object
