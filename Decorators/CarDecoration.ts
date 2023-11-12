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
   // apply decorator to the 'isOpen' method
  @checkAmountOfFuel
  isOpen(value:string) {	
    // check if doors are open or closed
	return this.open ? "doors open" : "doors close";
  }
};

// decorator to log and modify behavior of 'isOpen' method
function checkAmountOfFuel(
  target:Object,
  propertyKey:string|symbol,
  descriptor:PropertyDescriptor
): PropertyDescriptor|void {
  const oldValue = descriptor.value;
   // modify behavior of method
  descriptor.value = function (this:any, ...args:any[]) {
	console.log(`Fuel level: ${this.fuel}`);
	return oldValue.apply(this, args);
  };
}

// Decorator factory function
function changeDoorStatus(status:boolean) {
  // decorator function to change door status of class
  return <T extends { new (...args:any[]):{} }>(constructor:T) => {
	console.log("door status changed");
    // new class that extends original constructor
	return class extends constructor {
	  open = status;
	};
  };
};

// Decorator factory function
function changeAmountOfFuel(amount:number) {
  // decorator function to change amount of fuel of class
  return <T extends { new (...args:any[]):{} }>(constructor:T) => {
	console.log("fuel amount changed");
    // new class that extends original constructor
	return class extends constructor {
	  fuel = `${amount}%`;
	};
  };
}

// create an instance of myCar
const car = new myCar();
console.log(car.isOpen("checked"));
/* output
  => fuel amount changed
  => door status changed
  => Fuel level: 75% 
  => doors open

*/


/*
cd Decorators
ts-node CarDecoration.ts
*/