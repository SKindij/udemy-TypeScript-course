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
//todo cd training
//todo tsc train.ts
//todo node train.js
//todo ts-node train.ts
