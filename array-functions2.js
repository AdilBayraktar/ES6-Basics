let array = ["Ahmad", "Adil", "Abdullah", "Rami", "Rami"];

// Filter : Return values based on filter that is applied
const filterArray = array.filter((el) => el.length > 4);
console.log(filterArray); // Output : [ 'Ahmad', 'Abdullah' ]

// Reduce: Return sum of values as normal variable "String, Number, etc"
const reduceArray = array.reduce((total, current) => total + current, "Adil");
console.log(reduceArray); // Output: AdilAhmadAdilAbdullahRamiRami

// Find: Return first element that matches the given condition
const findArray = array.find((el) => el === "Rami");
console.log(findArray); // Output : Rami

// Sort : Return the array sorted and affecte on the original array
const sortArray = array.sort();
console.log(sortArray); // Output : [ 'Abdullah', 'Adil', 'Ahmad', 'Rami', 'Rami' ]
console.log(array); // Output : [ 'Abdullah', 'Adil', 'Ahmad', 'Rami', 'Rami' ]   <= the original array after effect
