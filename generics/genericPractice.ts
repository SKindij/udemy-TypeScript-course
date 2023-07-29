// Створити Generic-інтерфейс, який підходив би для створення таких об'єктів:
interface PlayerData<Game, Hours> {
	game: Game;
	hours: Hours;
	server: string;
}

const player1:PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2:PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3:PlayerData<string, object> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Масив даних з фігурами містить об'єкти, кожен з яких обов'язково має властивість name
enum FigureNames {
	Rect = "rect",
	Circle = "circle",
	Triangle = "triangle",
	Line = "line",
}
// Властивість name може мати лише 4 варіанти
interface Figure {
	name: FigureNames;
}
// Кожен об'єкт може ще містити додаткові властивості у випадковому вигляді
interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}
// Функція повинна приймати масив з об'єктами, у яких обов'язково має бути властивість name
// Повертає вона об'єкт-примірник AmountOfFigures
// Всередині себе підраховує скільки якихось фігур було в масиві і записує результати в AmountOfFigures
function calculateAmountOfFigures<Obj extends Figure>(
  figure:Obj[]):AmountOfFigures {
	const amount:AmountOfFigures = {
	  squares: 0,
	  circles: 0,
	  triangles: 0,
	  others: 0,
	};
	figure.forEach((fig) => {
	  switch (fig.name) {
		case FigureNames.Rect:
			amount.squares++;
			break;
		case FigureNames.Circle:
			amount.circles++;
			break;
		case FigureNames.Triangle:
			amount.triangles++;
			break;
		default:
			amount.others++;
		}
	});
	return amount;
	}

const data = [
	{
		name: FigureNames.Rect,
		data: { a: 5, b: 10 },
	},
	{
		name: FigureNames.Circle,
		data: { r: 5 },
	},
	{
		name: FigureNames.Rect,
		data: { a: 6, b: 11 },
	},
	{
		name: FigureNames.Triangle,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FigureNames.Line,
		data: { l: 15 },
	},
	{
		name: FigureNames.Circle,
		data: { r: 10 },
	},
	{
		name: FigureNames.Rect,
		data: { a: 15, b: 7 },
	},
	{
		name: FigureNames.Triangle,
	},
];

// З поточними даними в консоль має потрапляти:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
console.log(calculateAmountOfFigures(data));

//todo cd generics
//todo ts-node genericPractice.ts