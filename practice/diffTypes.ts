// Необхідно типізувати цей великий об'єкт
interface IFitnessClass {
	name: string;
	startsAt: string;
	duration: number;
}
// Властивість майбутніх класів повинна бути залежною від класів за типом
interface IFutureClass extends Omit<IFitnessClass, "startsAt"> {
	willStartsAt: string;
}
// Властивості exClients та futureClients теж повинні бути залежними від currClients
interface IClient {
	name: string;
	age: string | number;
	gender: "male" | "female";
	timeLeft: string;
	makeCallFor: Date;
}
// АБО всі три залежать від спільного батька
type CurrClient = Omit<IClient, "makeCallFor">;
type ExClient = Omit<IClient, "timeLeft">;
type FutureClient = Pick<IClient, "name" | "makeCallFor">;
// Простими словами: при додаванні властивості цільової об'єкт вони повинні бути
interface IFitnessClub {
	clubName: string;
	location: string;
	classes: IFitnessClass[];
	futureClasses: IFutureClass[];
	currClients: CurrClient[];
	exClients: ExClient[];
	futureClients: FutureClient[];
}
// автоматично додані в залежні (відразу підказка від TS)
const fitnessClubCenter:IFitnessClub = {
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: [
		{
			name: "yoga",
			startsAt: "8:00 AM",
			duration: 60,
		},
		{
			name: "trx",
			startsAt: "11:00 AM",
			duration: 45,
		},
		{
			name: "swimming",
			startsAt: "3:00 PM",
			duration: 70,
		},
	],
	futureClasses: [
		{
			name: "boxing",
			willStartsAt: "6:00 PM",
			duration: 40,
		},
		{
			name: "breath training",
			willStartsAt: "8:00 PM",
			duration: 30,
		},
	],
	currClients: [
		{
			name: "John Smith",
			age: "-",
			gender: "male",
			timeLeft: "1 month",
		},
		{
			name: "Alise Smith",
			age: 35,
			gender: "female",
			timeLeft: "3 month",
		},
		{
			name: "Ann Sonne",
			age: 24,
			gender: "female",
			timeLeft: "5 month",
		},
	],
	exClients: [
		{
			name: "Tom Smooth",
			age: 50,
			gender: "male",
			makeCallFor: new Date("2023-08-12"),
		},
	],
	futureClients: [
		{
			name: "Maria",
			makeCallFor: new Date("2023-07-10"),
		},
	],
};

//todo cd practice