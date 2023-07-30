interface IPhone {
	company:string;
	number:number;
}
// IMobilePhone повинен успадковуватися від IPhone,
interface IMobilePhone extends IPhone {
	size:string;
	// тип властивості companyPartner залежить від типу company
	companyPartner:IPhone["company"];
	manufactured:Date;
}

// Типізуємо масив об'єктів phones
const phones:IMobilePhone[] = [
	{
		company: "Nokia",
		number: 1285637,
		size: "5.5",
		companyPartner: "MobileNokia",
		manufactured: new Date("2022-09-01"),
	},
	{
		company: "Samsung",
		number: 4356637,
		size: "5.0",
		companyPartner: "SamMobile",
		manufactured: new Date("2021-11-05"),
	},
	{
		company: "Apple",
		number: 4552833,
		size: "5.7",
		companyPartner: "no data",
		manufactured: new Date("2022-05-24T12:00:00"),
	},
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
	initialDate: string;
}

// Функція повинна відфільтрувати масив даних та повернути новий масив
// з телефонами, випущеними після дати у третьому аргументі
function filterPhonesByDate(
	phones:IMobilePhone[],	key:keyof IMobilePhone,	initial:string
):IPhonesManufacturedAfterDate[] {
	return phones
	  // фільтруємо телефони по даті випуску
		.filter((phone) => {
			const manufactured = phone[key];

			if (
				manufactured instanceof Date &&
				manufactured.getTime() > new Date(initial).getTime()
			) {
				return phone;
			}
		})
	  // повертаємо новий обєкт із доданою властивістю
		.map((phone) => {
			const newObj = { ...phone, initialDate:initial };
			return newObj;
		});
}

// Другий аргумент при виклику функції має бути пов'язаний з першим,
// отже ми отримаємо підказки - властивості цього об'єкта
console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

//todo cd practice
//todo ts-node typeOffs.ts