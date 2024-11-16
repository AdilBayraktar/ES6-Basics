// Promise
let myPromise = new Promise((resolve, reject) => {
  const num = 0;
  num === 1 ? resolve("Success") : reject("Failed");
});

myPromise.then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

console.log("test First"); // This will print before the function above
