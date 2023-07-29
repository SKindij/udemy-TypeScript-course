// Створити Generic-інтерфейс PlayerData, який підходив би для створення таких об'єктів:

const player1 = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2 = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3 = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Масив даних з фігурами містить об'єкти, кожен з яких обов'язково має властивість name
// Кожен об'єкт може ще містити додаткові властивості у випадковому вигляді
// Властивість name може мати лише 4 варіанти
// Функція calculateAmountOfFigures повинна приймати масив з об'єктами, у яких обов'язково має бути властивість name
// Повертає вона об'єкт-примірник AmountOfFigures
// Всередині себе підраховує скільки якихось фігур було в масиві і записує результати в AmountOfFigures
// З поточними даними в консоль має потрапляти:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateAmountOfFigures(figure): AmountOfFigures {}

const data = [
	{
		name: "rect",
		data: { a: 5, b: 10 },
	},
	{
		name: "rect",
		data: { a: 6, b: 11 },
	},
	{
		name: "triangle",
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: "line",
		data: { l: 15 },
	},
	{
		name: "circle",
		data: { r: 10 },
	},
	{
		name: "circle",
		data: { r: 5 },
	},
	{
		name: "rect",
		data: { a: 15, b: 7 },
	},
	{
		name: "triangle",
	},
];

console.log(calculateAmountOfFigures(data));

//todo cd generics
//todo tsc genericPractice.ts