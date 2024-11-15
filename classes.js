// Create Class
class Car {
  constructor() {
    // Build in, Working on Class initialize
    console.log("Printed In Constructor");
  }
  model = "BMW";
  color = "White";
  printCar = () => {
    console.log(`Car Model is ${this.model} And Color is ${this.color}`);
  };
}

// Another Class With inheritance
class MercidesCar extends Car {
  constructor() {
    super(); // Will Do Actions of Main Class "Car" First
  }
  printMercidesCar = () => {
    console.log(`Car Model is Mercides and Color is ${this.color}`);
  };
}

// Create Object from the Class
let car = new Car();
car.printCar();
console.log(car.color);
console.log(car.model);

// inheritance Car Class inside MercidesCar Class
let mer = new MercidesCar();
mer.printMercidesCar();
console.log(mer.model);
