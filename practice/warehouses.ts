// clothes warehouse data structure

// ClothesWarehouse {
// 	jackets: "empty" | number;
// 	hats: "empty" | number;
// 	socks: "empty" | number;
// 	pants: "empty" | number;
// }

// office supply warehouse data structure

// StationeryWarehouse {
// 	scissors: "empty" | number;
// 	paper: "empty" | boolean;
// }

// warehouse data structure with household appliances

// AppliancesWarehouse {
// 	dishwashers: "empty" | number;
// 	cookers: "empty" | number;
// 	mixers: "empty" | number;
// }

// common data structure, inherits all data from the three above
// + добавляет свои

// TotalWarehouse {
// 	deficit: boolean;
// 	date: Date;
// }

// main object with all data, must fit TotalWarehouse format

const totalData = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
};

/*
  function takes main object totalData of desired format and always returns a string
  it should filter data from object and leave only those product names that have value "empty"
*/
function printReport(data) {
	return `We need this items: ${"..."}`;
	// или
	return "Everything fine";
}

console.log(printReport(totalData));
// => "We need this items: hats, socks, cookers"

//todo cd practice
//todo ts-node warehouses.ts