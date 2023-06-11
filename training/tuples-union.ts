const memberData = {
    isAdmin: true,
    isUserBirthday: true,
    userAge: 42,
    userName: 'Svyn',
    messages: {
        error: "Some Error!!"
    }
};

//! strictly describe structure of tuple: what will be in which places
const memberDataTuple:[boolean, boolean, number, string] = [true, true, 42, 'Svyn'];

const transformedData = memberDataTuple.map( (t) => `${t}-data` );
console.log(transformedData);
console.log(memberDataTuple);

// expand tuple using spread(rest) operator
const membersDataTuple:[boolean, boolean, number, ...string[]] = [true, true, 42, 'Svyn', 'Froggy', 'PiggiBoy'];

// let's talk about combining types
const twoFacedType: string|number = 13;
const setLetters: string[]|number[] = ['East', 'West'];

function printLetter(letter: string|number):void {
    if (typeof letter === 'string') {
        console.log( letter.toLocaleLowerCase() );
    } else {
        console.log( letter.toExponential() );
    }   
};

printLetter(2003);
printLetter('PiggiBoy');


const printReadings = (firstArg: number|string, secondArg: number|boolean) => {
    if (firstArg === secondArg) {
        console.log( `Readings ${firstArg} is correct!` );
    }
    console.log('Check your meter readings.');
};


//todo cd training
//todo ts-node tuples-union.ts