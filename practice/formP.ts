interface IForm {
	login: string;
	password: string;
}
// Необхідно типізувати об'єкт валідації
const validationData:Validation<IForm> = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};
// Врахуйте, що дані у формі можуть розширюватись і ці поля
// повинні з'явитися й у об'єкті валідації
type Validation<T> = {
	[P in keyof T]: { isValid: true } | { isValid: false; errorMsg: string };
};
