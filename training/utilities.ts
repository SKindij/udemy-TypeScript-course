const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 5,
	units: "m3",
};

const electricityRate:number = 1.45;
const waterRate:number = 4.70;

const monthPayments:number[] = [0, 0]; //? [electricity, water]

const calculatePayments = (
  //first parameter is object that destructures properties readings and mode
	{ readings, mode }: { readings:number; mode:string },
	waterData: { readings:number },
	electricityRate:number,
	waterRate:number
  ):void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * electricityRate * 0.7;
	} else {
		monthPayments[0] = readings * electricityRate;
	}

	monthPayments[1] = waterData.readings * waterRate;
};

calculatePayments(electricityUserData, waterUserData, electricityRate, waterRate);

const sendInvoice = (
	[electricity, water]:number[],
	electricityUserData: { readings:number; units:string },
	waterUserData: { readings:number; units:string }
  ):string => {
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${electricity}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

	return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);


//todo cd training
//todo ts-node utilities.ts