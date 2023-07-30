// Mapped Types
type Keys = 'name' | 'age' | 'role';
type User = {
  [K in Keys]: string;
}

const american:User = {
  name: 'Alex',
  age: '31',
  role: 'cop'
}

// Mapped Types
type Currencies = {
    usa: 'usd';
    china: 'cny';
    ukraine: 'uah';
    poland: 'zlt';
}
type CreateCustomCurr1<Type> = {
  [P in keyof Type]: string;
}
  
type CustomCurrencies1 = CreateCustomCurr1<Currencies>;

// Template Literal Types
type MyAnimation = 'fade' | 'swipe';
type MyDirection = 'in' | 'out';
type NewAnimation = `${MyAnimation}${MyDirection}`;
    // => "fadein" | "fadeout" | "swipein" | "swipeout"

type CreateCustomCurr2<Type> = {
  [P in keyof Type as `custom${Capitalize<string & P>}`]: string;
}
        
type CustomCurrencies2 = CreateCustomCurr2<Currencies>;


//todo cd Info-Resources
//todo ts-node MappedTypes.ts