var boxTS = document.querySelector('.boxTS');
var inputTS = document.querySelector('input');
var linkTS = document.querySelector('a');
var pTS = document.querySelector('.paragraph');
console.log(inputTS === null || inputTS === void 0 ? void 0 : inputTS.value);
if (linkTS) {
    console.log(linkTS.href);
}
linkTS === null || linkTS === void 0 ? void 0 : linkTS.addEventListener('click', function (e) {
    e.preventDefault();
});
// PRACTICE
var forms = document.querySelectorAll("form");
var email = document.querySelector("#email");
var title = document.querySelector("#title");
var text = document.querySelector("#text");
var checkbox = document.querySelector("#checkbox");
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
forms.forEach(function (form) {
    return form.addEventListener("submit", function (e) {
        var _a, _b, _c, _d;
        e.preventDefault();
        formData.email = (_a = email === null || email === void 0 ? void 0 : email.value) !== null && _a !== void 0 ? _a : "";
        formData.title = (_b = title === null || title === void 0 ? void 0 : title.value) !== null && _b !== void 0 ? _b : "";
        formData.text = (_c = text === null || text === void 0 ? void 0 : text.value) !== null && _c !== void 0 ? _c : "";
        formData.checkbox = (_d = checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) !== null && _d !== void 0 ? _d : false;
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
    });
});
function validateFormData(data) {
    // If each of the properties of the data object is true...
    if (Object.values(data).every(function (value) { return value; })) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    if (emails.some(function (e) { return e === email; })) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
//todo tsc index.ts
