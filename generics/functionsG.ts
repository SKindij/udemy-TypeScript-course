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

// some sample
interface DataSaver {
  processing: <T>(data:T) => T
}
const saver:DataSaver = {
  processing: (data) => {
    console.log(data);
    return data;
  },
}

// Generic Interfaces & Types
interface ProcessFunc {
  <T>(data:T):T;
}
function processer<T>(data:T):T {
 console.log(data);
 return data;
}
// if you know the type of data you will be working with and you don't plan to change it,
// you can use "call a specific function directly"
processer('Сall function directly');

// if you need more flexibility and the ability to work with different types of data, 
// use generic functions and generic interfaces
let newProcessFn:ProcessFunc = processer;
newProcessFn('Make function with Generic Interface');

type Userer<U> = {
  login: U;
  age: number;
};
const appUser:Userer<string> = {
  login: 'Olineiro',
  age: 28
}

// some helpers
type OrNull<Type> = Type | null;
type OneOrMane<Type> = Type | Type[];

const ourData:OneOrMane<number[]> = [14, 19, 26];

// Generic Constraints
interface ParentsOfUser {
 mother:string, father:string
}
// we use following to have required fields
interface ComplexUser<ParentsData extends ParentsOfUser> {
  login:string;
  age:number;
  parents:ParentsData;
}

const complexUserer:ComplexUser<{mother:string, father:string, haveHouse:boolean}> = {
  login: 'Dondarion',
  age: 92,
  parents: {mother: 'Kantra', father: 'Sintro', haveHouse: true}
}


// another interesting example
const depositMoney = <Q extends number | string>(amount:Q):Q => {
  console.log(`Bank: ${amount} usd.`);
  return amount;
}



//todo cd generics
//todo ts-node functionsG.ts