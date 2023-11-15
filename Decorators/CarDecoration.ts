// Decorators/CarDecoration.ts
import { ICar } from './Interfaces';

// apply decorators to myCar class
@changeDoorStatus(true)
@changeAmountOfFuel(75)
class myCar implements ICar {
  // default values for properties
  fuel:string = "50%";
  open:boolean = true;
  errors: any;

  @checkNumberOfSeats(4)
  freeSeats:number = 3;

   // apply decorator to the 'isOpen' method
  @checkAmountOfFuel
  isOpen(value:string) {	
    // check if doors are open or closed
	  return this.open ? "doors open" : "doors close";
  }
};

// decorator factory function
function checkNumberOfSeats(limit:number) {
	return function (target:Object, propertyKey:string|symbol) {
    // create unique symbol to store value
		let symbol = Symbol();

    // define getter function for property
		const getter = function (this: any) {
			return this[symbol];
		};

     // define setter function for property
		const setter = function (this:any, newAmount:number) {
      // if new amount is within limit, set value
			if (newAmount >= 1 && newAmount < limit) {
				this[symbol] = newAmount + 1;
			} else {
				Object.defineProperty(target, "errors", {
					value: `There cannot be more than ${limit} seats!`,
				});
			}
		};

    // define property with getter and setter
		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

// decorator to log and modify behavior of 'isOpen' method
function checkAmountOfFuel(
  target:Object,
  propertyKey:string|symbol,
  descriptor:PropertyDescriptor
):PropertyDescriptor|void {
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

car.freeSeats = 3;
console.log(car);
console.log(car.errors);



/*
cd Decorators
ts-node CarDecoration.ts
*/