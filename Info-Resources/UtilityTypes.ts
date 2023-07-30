// TypeScript provides several utility types to facilitate common type transformations.
// These utilities are available globally.
const arr1:Array<number> = [11, 14, 16];
const arr2:number[] = [11, 14, 16];
// it is important to follow the principles of immutability
const roArr:ReadonlyArray<string> = ['read', 'only', 'array'];

interface IState {
  data:{},
  tag?:string
}

const state1:Partial<IState> = {
  data: {
    name: "Fergus"
  }
}
const state2:Required<IState> = {
    data: {
      name: "Fergus"
    },
    tag: 'magician'
  }


function action(state:Readonly<IState>) {
  // NO: state.data = 'adc';
  console.log(state);
}

action(state2);




//todo cd Info-Resources
//todo ts-node UtilityTypes.ts