// description of obj with one optional parameter
interface AppUser {
    login: string;
    password: string;
    age: number;
    email?: string;
    //email: string | undefined;
};

const someUser:AppUser = {
    login: 'Fater Svyn',
    password: 'sicret',
    age: 42,
}

const dbName = 'Forest family DB';

function sendUserData(obj:AppUser, db:string, option?:number):void {
    console.log( obj, db.toLowerCase(), option?.toString() );
};

sendUserData(someUser, dbName, 22);








//todo cd practice
//todo ts-node modifiers.ts