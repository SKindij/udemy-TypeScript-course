const boxTS = document.querySelector('.boxTS') as HTMLElement;
const inputTS = document.querySelector('input');
const linkTS = document.querySelector('a');
const pTS = document.querySelector('.paragraph') as HTMLParagraphElement;

console.log(inputTS?.value);

if (linkTS) {
    console.log(linkTS.href);
}

linkTS?.addEventListener('click', (e)=> {
  e.preventDefault();
});


// PRACTICE
const forms = document.querySelectorAll("form");
const email = document.querySelector("#email") as HTMLInputElement;
const title = document.querySelector("#title") as HTMLInputElement;
const text = document.querySelector("#text") as HTMLTextAreaElement;
const checkbox = document.querySelector("#checkbox") as HTMLInputElement;

interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

const formData:IFormData = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

forms.forEach( (form) =>
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		formData.email = email?.value ?? "";
		formData.title = title?.value ?? "";
		formData.text = text?.value ?? "";
		formData.checkbox = checkbox?.checked ?? false;

		if ( validateFormData(formData) ) {
			checkFormData(formData);
		}
	})
);

function validateFormData(data:IFormData): boolean {
	// If each of the properties of the data object is true...
	if ( Object.values(data).every((value) => value) ) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data:IFormData) {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	if ( emails.some((e) => e === email) ) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
}



//todo tsc index.ts