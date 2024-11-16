let array = ["Ahmad", "Adil", "Abdullah", "Rami"];

// Map : Make a Loop in the array like foreach
const mappedArr = array.map((el) => {
  return el;
});

console.log(mappedArr);

// Slice : Remove values  between the first value and last value in the array, without Affected on the original Array
const slicedArr = array.slice(0, 2);
console.log(slicedArr); // Output : [ 'Abdullah', 'Rami' ]

// Splice : Remove values from array and return the elements between the first value and last value, And Affected on the original Array
const splicedArr = array.splice(0, 2);
console.log(array); // Output : [ 'Abdullah', 'Rami' ]
console.log(splicedArr); // Output : [ 'Ahmad', 'Adil' ]

array = ["Ahmad", "Adil", "Abdullah", "Rami"]; // Declared again because Splice function Affected on it
// Reverse : Reverse the Array
const reversedArr = array.reverse();
console.log(reversedArr);

// Concat : Add Elements to arrays
let array2 = [1, 2, 3];
const concatedArr = array.concat(array2);
console.log(concatedArr); // Output :  [ 'Rami', 'Abdullah', 'Adil', 'Ahmad', 1, 2, 3 ]

// Join : Add Seperator between elements of Array
const joinedArr = array.join("---");
console.log(joinedArr); // Output : Rami---Abdullah---Adil---Ahmad   Note: Join convert array values to be one string value
