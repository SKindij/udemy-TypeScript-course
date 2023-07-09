const fetchData = (url:string, method: "GET" | "POST"):void => {
  console.log("Data Fetched!!!")
};

const reqOptions1 = {
    url: 'https://someurl1.com',
    method: 'GET'
}
const reqOptions2 = {
  url: 'https://someurl2.com',
  method: 'GET' as "GET"
}

fetchData('quqi.com', 'GET');
// developer assumes responsibility for the function parameter
fetchData(reqOptions1.url, reqOptions1.method as "GET");
fetchData(reqOptions2.url, reqOptions2.method);

const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;

const someNumber:number = +input.value
console.log(someNumber);

let b = {f: 100} as const;
input.value = b.f.toString();
console.log(input.value);
console.log(someNumber);


//todo cd training
//todo tsc type-Assertion.ts