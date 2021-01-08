function validateForm() {
	let valid = true;

	const firstNameInput = document.getElementById('firstName');
	const lastNameInput = document.getElementById('lastName');
	const emailInput = document.getElementById('email');
/*	const messageTextarea = document.getElementById('message');
*/
	const errorFirstName = document.getElementById('errorFirstName');
	const errorLastName = document.getElementById('errorLastName');
	const errorEmail = document.getElementById('errorEmail');
/*	const errorMessage = document.getElementById('errorMessage');
*/
	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([firstNameInput, lastNameInput, emailInput], [errorFirstName, errorLastName, errorEmail], errorsSummary);

	/*firstname*/
	if (!checkRequired(firstNameInput.value)) {
		valid = false;
		firstNameInput.classList.add("error-input");
		errorFirstName.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
		valid = false;
		firstNameInput.classList.add("error-input");
		errorFirstName.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
	}

	/*lastname*/
	if (!checkRequired(lastNameInput.value)) {
		valid = false;
		lastNameInput.classList.add("error-input");
		errorLastName.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
		valid = false;
		lastNameInput.classList.add("error-input");
		errorLastName.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
	}

	/*email*/
	if (!checkRequired(emailInput.value)) {
		valid = false;
		emailInput.classList.add("error-input");
		errorEmail.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
		valid = false;
		emailInput.classList.add("error-input");
		errorEmail.innerText = "Pole powinno zawieraæ od 5 do 60 znaków";
	} else if (!checkEmail(emailInput.value)) {
		valid = false;
		emailInput.classList.add("error-input");
		errorEmail.innerText = "Pole powinno zawieraæ prawid³owy adres email";
	}

	/*message*/
	/*if (!checkRequired(messageTextarea.value)) {
		valid = false;
		messageTextarea.classList.add("error-input");
		errorMessage.innerText = "Pole jest wymagane";
	}
*/
	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}