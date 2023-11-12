// Decorators/Introduction.ts
import { ICar } from './Interfaces';

@closeCar
class myCar implements ICar {
	fuel:string = "50%";
	open:boolean = true;
	freeSeats:number = 3;
	isOpen() {
		console.log(`Fuel level: ${this.fuel}`);
		return this.open ? "open" : "close";
	}
}

// decorators are functions that can modify objects
function closeCar(car:myCar) {
	car.open = false;
	console.log("close car");
	return car;
}

function addFuel(car:myCar) {
	car.fuel = "100%";
	console.log("add fuel");
	return car;
}

const mySomeCar = new myCar();



// launch function composition f(x());
closeCar(mySomeCar).isOpen();
/* output
    => close car
    => Fuel level: 50%
*/
 






/*
cd Decorators
ts-node Introduction.ts
*/