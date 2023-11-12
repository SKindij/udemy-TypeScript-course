// Decorators/Introduction.ts
import { ICar } from './Interfaces';

// decorator is called when class is declared
@closeCar
// decorator modifies class before it is actually declared
class myCar implements ICar {
	fuel:string = "50%";
	open:boolean = true;
	freeSeats:number = 3;
	isOpen() {
		console.log(`Fuel level: ${this.fuel}`);
		return this.open ? "open" : "close";
	}
}

// Decorators are functions that can modify behavior of class, method, property, or parameter.
function closeCar<T extends { new (...args:any[]):{} }>(constructor:T) {
	return class extends constructor {
		open = false;
	};
}
/*
*T extends { new (...args: any[]): {} }
  > function expects class constructor (T) 
    - that can take any number of arguments 
    - but does not return a value ({})
*constructor: T
  > constructor of class (T) is target class for decoration
*return class extends constructor { open = false; };
  > returns anonymous class that extends passed class constructor
    - open property is set to false
*/

function addFuel(car:myCar) {
	car.fuel = "100%";
	console.log("add fuel");
	return car;
}

const mySomeCar = new myCar();
console.log(mySomeCar.isOpen());
/* output
    => close car
    => Fuel level: 50%
*/
 






/*
cd Decorators
ts-node Introduction.ts
*/