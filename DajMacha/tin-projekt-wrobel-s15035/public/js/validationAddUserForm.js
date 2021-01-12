function validateForm() {
	let valid = true;

	const firstnameInput = document.getElementById("firstname");
	const lastnameInput = document.getElementById('lastname');
	const emailInput = document.getElementById('email');
	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');

	const errorFirstname = document.getElementById('errorFirstname');
	const errorLastname = document.getElementById('errorLastname');
	const errorEmail = document.getElementById('errorEmail');
	const errorLogin = document.getElementById('errorLogin');
	const errorPassword = document.getElementById('errorPassword');

	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([firstnameInput, lastnameInput, emailInput, loginInput, passwordInput], [errorFirstname, errorLastname, errorEmail, errorLogin, errorPassword, ], errorsSummary);

	/*firstname*/
	if (!checkRequired(firstnameInput.value)) {
		valid = false;
		firstnameInput.classList.add("error-input");
		errorFirstname.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(firstnameInput.value, 2, 60)) {
		valid = false;
		firstnameInput.classList.add("error-input");
		errorFirstname.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
	}

	/*lastname*/
	if (!checkRequired(lastnameInput.value)) {
		valid = false;
		lastnameInput.classList.add("error-input");
		errorLastname.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(lastnameInput.value, 2, 60)) {
		valid = false;
		lastnameInput.classList.add("error-input");
		errorLastname.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
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

	/*login*/
	if (!checkRequired(loginInput.value)) {
		valid = false;
		loginInput.classList.add("error-input");
		errorLogin.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(loginInput.value, 6, 20)) {
		valid = false;
		loginInput.classList.add("error-input");
		errorLogin.innerText = "Pole powinno zawieraæ od 6 do 20 znaków";
	}

	/*password*/
	if (!checkRequired(passwordInput.value)) {
		valid = false;
		passwordInput.classList.add("error-input");
		errorPassword.innerText = "Pole jest wymagane";
	} else if (!checkPassword(passwordInput.value)) {
		valid = false;
		passwordInput.classList.add("error-input");
		errorPassword.innerText = "Pole powinno zawieraæ od 8 do 25 znaków, przynajmniej jedn¹ cyfrê i jedn¹ du¿¹ i ma³¹ litere";
	}

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}
