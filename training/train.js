var _a;
console.log('Modern software development.');
console.log('TS is an extension of JS');
//* define types of variables
var userName = 'Svyn';
var userAge = 42;
var isAdmin = true;
var userCarModel = 'Mondeo';
var useCarYear = 2011;
if (isAdmin) {
    console.log("Welcome ".concat(userName, "-").concat(userAge, "."));
}
;
//* define types in functions
function logCarMsg(name, model, year) {
    var carAge = 2023 - year;
    console.log("".concat(name, " has ").concat(carAge, " years old ").concat(model, "."));
}
;
logCarMsg(userName, userCarModel, useCarYear);
//* define types in objects
var userData = '{"userNameData": "PiggiBoy", "userCarModelData": "Mustang", "userCarYearData": 2020}';
var userObj = JSON.parse(userData);
console.log(userObj);
// about another types
var createError = function (msg) {
    throw new Error(msg); // => type:never
};
var isUserBirthday = true;
function logBrthMsg(isBirthday, name, age) {
    if (isBirthday) {
        return "Congrats ".concat(name, ". You are ").concat(age, " years.");
    }
    else {
        return createError('Some error!');
    }
}
console.log(logBrthMsg(isUserBirthday, userName, userAge));
// indicate to code that something does not exist
var emptiness = null;
var uncertainty = undefined;
var anyOne = undefined;
var something; // => type:any
// ES 2015: symbol is primitive data type, just like number and string
var userID = Symbol('id');
var someData = (_a = {},
    _a[userID] = 17,
    _a);
console.log(someData[userID]);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
//todo cd training
//todo tsc train.ts
//todo node train.js
//todo ts-node train.ts
