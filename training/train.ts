console.log('Modern software development.');
console.log('TS is an extension of JS');

//* define types of variables
let userName:string = 'Svyn';
let userAge:number = 42;
let isAdmin:boolean = true;
let userCarModel:string = 'Mondeo';
let useCarYear:number = 2011;

if (isAdmin) {
  console.log(`Welcome ${userName}-${userAge}.`)
};

//* define types in functions
function logCarMsg (name:string, model:string, year:number):void {
  let carAge:number = 2023 - year;
  console.log(`${name} has ${carAge} years old ${model}.`)
};

logCarMsg(userName, userCarModel, useCarYear);

//* define types in objects
let userData = '{"userNameData": "PiggiBoy", "userCarModelData": "Mustang", "userCarYearData": 2020}';
let userObj:{
  userNameData:string, 
  userCarModelData:string, 
  userCarYearData:number
} = JSON.parse(userData);

console.log(userObj);

// about another types
const createError = (msg:string) => {
  throw new Error(msg); // => type:never
};

const isUserBirthday:boolean = true;

function logBrthMsg(isBirthday:boolean, name:string, age:number):string {
  if (isBirthday) {
    return `Congrats ${name}. You are ${age} years.`
  } else {
    return createError('Some error!')
  }
}

console.log(logBrthMsg(isUserBirthday, userName, userAge));

// indicate to code that something does not exist
const emptiness:null = null;

const uncertainty:undefined = undefined;
const anyOne:any = undefined;
let something; // => type:any

// ES 2015: symbol is primitive data type, just like number and string
let userID:symbol = Symbol('id');

const someData = {
  [userID]: 17
};

console.log(someData[userID]);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);





//todo cd training
//todo tsc train.ts
//todo node train.js
//todo ts-node train.ts