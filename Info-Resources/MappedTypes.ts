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
type CreateCustomCurr<Type> = {
  [P in keyof Type]: string;
}
  
type CustomCurrencies = CreateCustomCurr<Currencies>;






//todo cd Info-Resources
//todo ts-node MappedTypes.ts