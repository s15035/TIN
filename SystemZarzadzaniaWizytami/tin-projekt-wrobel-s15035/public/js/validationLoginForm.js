function validateForm() {
	let valid = true;

	const emailInput = document.getElementById('email');
	const passwordInput = document.getElementById('haslo');

	const errorEmail = document.getElementById('errorEmail');
	const errorPassword = document.getElementById('errorHaslo');
	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([emailInput, passwordInput], [errorEmail, errorPassword], errorsSummary);

	/*email*/
	if (!checkRequired(emailInput.value)) {
		valid = false;
		emailInput.classList.add("error-input");
		errorEmail.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
		valid = false;
		emailInput.classList.add("error-input");
		errorEmail.innerText = "Pole powinno zawiera� od 5 do 60 znak�w";
	} else if (!checkEmail(emailInput.value)) {
		valid = false;
		emailInput.classList.add("error-input");
		errorEmail.innerText = "Pole powinno zawiera� prawid�owy adres email";
	}

	/*password*/
	if (!checkRequired(passwordInput.value)) {
		valid = false;
		passwordInput.classList.add("error-input");
		errorPassword.innerText = "Pole jest wymagane";
	}

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b��dy";
	}

	return valid;
}