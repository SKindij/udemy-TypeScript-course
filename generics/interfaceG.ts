// not a convenient way to define data types
function oldProcessingData(data:string | number | boolean)
  :string | number | boolean {
    // ...
    console.log(`This data: ${data}`)
    return data;
}
// a generalized version of writing such a function
function processingData<T>(data:T)
  :T {
    // ...
    console.log(`This data: ${data}`)
    return data;
}

processingData(42);
processingData(true);
processingData('life');

const serverData1 = 99;
let resultData = processingData<number>(serverData1);







//todo cd generics
//todo tsc interfaceG.ts