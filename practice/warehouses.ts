type ValidAmount = "empty" | number;

// clothes warehouse data structure
interface ClothesWarehouse {
 	jackets: ValidAmount;
 	hats: ValidAmount;
 	socks: ValidAmount;
 	pants: ValidAmount;
}

// office supply warehouse data structure
interface StationeryWarehouse {
 	scissors: ValidAmount;
 	paper: "empty" | boolean;
}

// warehouse data structure with household appliances
interface AppliancesWarehouse {
 	dishwashers: ValidAmount;
 	cookers: ValidAmount;
 	mixers: ValidAmount;
}

// common data structure, inherits all data from the three above
interface TotalWarehouse 
  extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
 	deficit: boolean;
 	date: Date;
}

// main object with all data, must fit TotalWarehouse format
const totalData:TotalWarehouse = {
	jackets: 5,
	hats: "empty",	
	pants: 15,
	socks: "empty",
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date(),
};

/*
  function takes main object totalData of desired format and always returns a string
  it should filter data from object and leave only those product names that have value "empty"
*/
function printReport(data:TotalWarehouse):string {
  const result:string = Object.entries(data)
	.filter( (item) => item[1] === "empty" )
	.reduce( (res, item) => `${res} ${item[0]},`, "" );
  // condition checks whether result variable has at least one character after removing spaces
  if (result.trim().length) {
	  // substring except for last character
	return `We need this items: ${result.slice(0, -1)}`;
  } else {
	return "Everything fine";
  }
}

console.log( printReport(totalData) );
// => "We need this items: hats, socks, cookers"

//todo cd practice
//todo ts-node warehouses.ts