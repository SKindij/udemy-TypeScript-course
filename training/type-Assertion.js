var fetchData = function (url, method) {
    console.log("Data Fetched!!!");
};
var reqOptions1 = {
    url: 'https://someurl1.com',
    method: 'GET'
};
var reqOptions2 = {
    url: 'https://someurl2.com',
    method: 'GET'
};
fetchData('quqi.com', 'GET');
// developer assumes responsibility for the function parameter
fetchData(reqOptions1.url, reqOptions1.method);
fetchData(reqOptions2.url, reqOptions2.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = +input.value;
console.log(someNumber);
//todo cd training
//todo tsc type-Assertion.ts
