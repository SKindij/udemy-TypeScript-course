// Decorators/Introduction.ts
import { Car } from './Interfaces';


// object that conforms to Car interface
const myCar:Car = {
	fuel: "50%",
	open: true,
	freeSeats: 3,
	isOpen() {
		console.log(`Fuel level: ${this.fuel}.`);
		return this.open ? "open" : "close";
	},
};

// decorators are functions that can modify objects
function closeCar(car: typeof myCar) {
	car.open = false;
	console.log("close car");
	return car;
}

function addFuel(car: typeof myCar) {
	car.fuel = "100%";
	console.log("add fuel");
	return car;
}

// launch function composition f(x());
addFuel(closeCar(myCar)).isOpen();
/* output
    => close car
    => add fuel
    => Fuel level: 100%
*/
 






/*
cd Decorators
ts-node Introduction.ts
*/