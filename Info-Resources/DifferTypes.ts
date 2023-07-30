// condition ? true : false
// SomeType extends OtherType ? TrueType : FalseType
type Example1 = 'Hello' extends 'Hallo' ? string : number;
type Example2 = 'Hallo' extends 'Hallo' ? string : number;

// conditions with generics
interface GenericUser<Type extends 'created' | Date> {
    created:Type extends 'created' ? 'created' : Date;
}
  
  const user1:GenericUser<'created'> = {
    created: 'created'
  }
  const user2:GenericUser<Date> = {
      created: new Date('2023.07.30.')
  }

// conditions with generics
interface IDataFromUser {
  weight:string;
}
interface IDataFromBase {
  calories:number;
}
type FromUserOrFromBase<Type extends string | number> = Type extends string
  ? IDataFromUser
  : IDataFromBase;
const test:FromUserOrFromBase<number> = {
  calories: 369
}
// lets reload the function
function calculateDailyCalories(str:string):IDataFromUser;
function calculateDailyCalories(num:number):IDataFromBase;

function calculateDailyCalories(
    numOrStr: number | string
): IDataFromBase | IDataFromUser {
  if (typeof numOrStr === 'string') {
    const obj:IDataFromUser = {
      weight: numOrStr
    };
    return obj
  } else {
    const obj:IDataFromBase = {
        calories: numOrStr
      };
      return obj
  }
}

// task: I need Array
type ToArray<Type> = Type extends any ? Type[] : never;

type ExampleArray = ToArray<number>;




//todo cd Info-Resources
//todo ts-node DifferTypes.ts