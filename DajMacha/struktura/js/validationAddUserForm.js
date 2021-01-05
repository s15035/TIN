function validateForm() {
	let valid = true;

	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');

	const errorLogin = document.getElementById('errorLogin');
	const errorPassword = document.getElementById('errorPassword');
	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([loginInput, passwordInput], [errorLogin, errorPassword], errorsSummary);

	/*login*/
	if (!checkRequired(loginInput.value)) {
		valid = false;
		loginInput.classList.add("error-input");
		errorLogin.innerText = "Pole jest wymagane";
	}

	/*password*/
	if (!checkRequired(passwordInput.value)) {
		valid = false;
		passwordInput.classList.add("error-input");
		errorPassword.innerText = "Pole jest wymagane";
	}

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}