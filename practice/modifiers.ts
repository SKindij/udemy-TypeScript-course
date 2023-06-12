// description of obj with one optional parameter
interface AppUser {
  readonly  login: string;
    password: string;
    age: number;
    email?: string;
    //email: string | undefined;
    motto?: {
      battlecry: string;
      slogan: string;
    };
};

const someUser:AppUser = {
    login: 'Fater Svyn',
    password: 'sicret',
    age: 42,
    motto: {
      battlecry: 'Glory to Ukraine!',
      slogan: 'Glory to the heroes!'
    }
}

const dbName = 'Forest family DB';

function sendUserData(obj:AppUser, db:string, option?:number):void {
    console.log( obj.motto?.battlecry);
    console.log( db.toLowerCase(), option?.toString() );
};  

sendUserData(someUser, dbName, 2023);

// data marked in this way cannot be changed
const basicPorts: readonly number[] = [3000, 3001, 5555];
// array modification methods won't work either



//todo cd practice
//todo ts-node modifiers.ts