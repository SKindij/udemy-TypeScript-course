const jsonTest = '{"name": "Test", "date": "46"}';

const objFromJsonTest = JSON.parse(jsonTest);

// https://jsonplaceholder.typicode.com/
interface ToDo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
  }

let toDoList:ToDo[] = [];

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then( response => response.json() )
  .then( json => {
    if ('id' in json) {
        toDoList.push(json)
    } 
    console.log(toDoList);
  } )

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( response => response.json() )
  .then( json => {
    if ('id' in json && 'userId' in json) {
        toDoList.push(json)
    } else if (Array.isArray(json)) {
       toDoList = json; 
    }
    console.log(toDoList);
  } )


const ourPromise = new Promise<string>( (resolve, reject) => {
    resolve('test our promise')
})
ourPromise.then(value => {
    console.log(value.toUpperCase())
})


type FromPromise = Awaited<Promise<number>>;





//todo cd generics
//todo ts-node servers.ts