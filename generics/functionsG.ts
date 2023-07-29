function processingInputs<T, S>(data:T, options:S) {
  switch (typeof data) {
    case 'string':
      return `${data}, speed: ${options}`;
      break;
    case "number":
      return `${data.toFixed()}, speed: ${options}`;
      break;
    default:
      return 'Not valid';
    }
}

let res1 = processingInputs('eleven', 27);
let res2 = processingInputs(12.40, 29);
console.dir( {res1, res2} );

// Generic Types
interface DataSaver {
  processing: <T>(data:T) => T
}
const saver:DataSaver = {
  processing: (data) => {
    console.log(data);
    return data;
  },
}





//todo cd generics
//todo ts-node functionsG.ts