// Decorators/CarDecoration.ts
import { ICar } from './Interfaces';

// apply decorators to myCar class
@changeDoorStatus(true)
@changeAmountOfFuel(75)
class myCar implements ICar {
  // default values for properties
  fuel:string = "50%";
  open:boolean = true;
  freeSeats:number = 3;
   // method to check if doors are open or closed
  isOpen() {
	console.log(`Fuel level: ${this.fuel}`);
	return this.open ? "doors open" : "doors close";
  }
};

// changeDoorStatus(changeAmountOfFuel(myCar))
// returns decorator to change door status of class
function changeDoorStatus(status: boolean) {
  console.log("door init");
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
	console.log("door changed");
	return class extends constructor {
	  open = status;
	};
  };
};

// returns decorator to change amount of fuel of class
function changeAmountOfFuel(amount: number) {
  console.log("fuel init");
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
	console.log("fuel changed");
	return class extends constructor {
	  fuel = `${amount}%`;
	};
  };
}

// create an instance of myCar
const car = new myCar();
console.log(car.isOpen());
/* output
  => door init
  => fuel init
  => fuel changed
  => door changed
  => Fuel level: 75%
  => doors open
*/






/*
cd Decorators
ts-node CarDecoration.ts
*/