// TypeScript provides several utility types to facilitate common type transformations.
// These utilities are available globally.
const arr1:Array<number> = [11, 14, 16];
const arr2:number[] = [11, 14, 16];
// it is important to follow the principles of immutability
const roArr:ReadonlyArray<string> = ['read', 'only', 'array'];

interface IState {
  data:{};
  tag?:string;
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


interface ICompany {
  name: string;
  debts: number;
  departments:Department;
}

interface Department {
  [key:string]:string;
}

type CompanyKeys = keyof ICompany;
const keys:CompanyKeys = "debts"; // 'debts' or 'name'

type CompanyNameType = ICompany['name'];
type CompanyDebtsType = ICompany['debts'];
type CompanyDepartmentsType = ICompany['departments'];
type Tester = ICompany [keyof ICompany];

function printDebts<T, K extends keyof T, S extends keyof T>(
	company:T,	name:K, debts:S) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google:ICompany = {
	name: "Google",
	debts: 578000,
    departments: {
      admin: 'admin',
      dev: 'dev',
      sales: 'sales'
    }
};
const shmoogle:ICompany = {
	name: "Shmoogle",
	debts: 193000,
    departments: {
      admin: 'admin',
      dev: 'dev',
      sales: 'sales'
    }
};

printDebts(google, "name", "debts");
printDebts(shmoogle, 'name', 'debts');



//todo cd Info-Resources
//todo ts-node UtilityTypes.ts