// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1
// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2
// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

type Animal = "cat" | "dog" | "bird";

enum AnimalStatus {
	Available = "available",
	NotAvailable = "not available",
}

interface AnimalData {
	animal: Animal;
	breed: string;
	sterilized?: string;
}
// Don't repeat code, use extends
interface AnimalAvailableData extends AnimalData {
	location: string;
	age?: number;
}
interface AnimalNotAvailableData {
	message: string;
	nextUpdateIn: Date;
}

// Interfaces should be separated since both responses will have a data field
// And only by the status it will be difficult to determine the data
interface AnimalAvailableResponse {
	status: AnimalStatus.Available;
	data: AnimalAvailableData;
}
interface AnimalNotAvailableResponse {
	status: AnimalStatus.NotAvailable;
	data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(res:Res): res is AnimalAvailableResponse {
	if (res.status === AnimalStatus.Available) {
		return true;
	} else {
		return false;
	}
}

function checkAnimalData(animal:Res): AnimalAvailableData | string {
	if ( isAvailable(animal) ) {
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}
