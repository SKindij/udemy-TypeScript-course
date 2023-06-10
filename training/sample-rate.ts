// for example, we have current cross-rate of currencies
const currRate: string = "1.05";

// function specifies that it will return value of type number
const fetchCurr = (response:string):number => {
  const data:number = JSON.parse(response); // string into JS object
  return data;
};

function transferEurToUsd(available:boolean, amount:number, commission:number):void {
  if (available) {
	let res:number = fetchCurr(currRate) * amount * commission;
	console.log(res);
	// or writing to element on page instead of console
  } else {
		console.log("Exchange is currently unavailable");
  }
}

transferEurToUsd(true, 500, 1.01); // => 530.25

//todo cd training
//todo ts-node sample-rate.ts