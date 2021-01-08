function validateForm() {
	let valid = true;

	const firstNameInput = document.getElementById("firstName");
	const lastNameInput = document.getElementById('lastName');
	const telInput = document.getElementById("tel");
	const emailInput = document.getElementById('email');
	const streetInput = document.getElementById('street');
	const postcodeInput = document.getElementById('postcode');
	const cityInput = document.getElementById("city");
	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');
	const password2Input = document.getElementById('password2');

	const errorFirstName = document.getElementById('errorFirstName');
	const errorLastName = document.getElementById('errorLastName');
	const errorTel = document.getElementById("errorTel");
	const errorEmail = document.getElementById('errorEmail');
	const errorStreet = document.getElementById('errorStreet');
	const errorPostcode = document.getElementById('errorPostcode');
	const errorCity = document.getElementById("errorCity");
	const errorLogin = document.getElementById('errorLogin');
	const errorPassword = document.getElementById('errorPassword');
	const errorPassword2 = document.getElementById('errorPassword2');

	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([firstNameInput, lastNameInput, telInput, emailInput, streetInput, postcodeInput, cityInput, loginInput, passwordInput, password2Input], [errorFirstName, errorLastName, errorTel, errorEmail, errorStreet, errorPostcode, errorCity, errorLogin, errorPassword, errorPassword2], errorsSummary);

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

	/*tel*/
	if (!checkRequired(telInput.value)) {
		valid = false;
		telInput.classList.add("error-input");
		errorTel.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(telInput.value, 9, 9)) {
		valid = false;
		telInput.classList.add("error-input");
		errorTel.innerText = "Pole powinno zawieraæ 9 cyfr";
	} /*else if (!checkTel(telInput.value)) {
		valid = false;
		telInput.classList.add("error-input");
		errorTel.innerText = "Pole powinno zawieraæ prawid³owy numer telefonu";
	}*/

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

	/*street*/
	if (!checkRequired(streetInput.value)) {
		valid = false;
		streetInput.classList.add("error-input");
		errorStreet.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(streetInput.value, 2, 60)) {
		valid = false;
		streetInput.classList.add("error-input");
		errorStreet.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
	}

	/*postcode*/
	if (!checkRequired(postcodeInput.value)) {
		valid = false;
		postcodeInput.classList.add("error-input");
		errorPostcode.innerText = "Pole jest wymagane";
	} else if (!checkPostcode(postcodeInput.value)) {
		valid = false;
		postcodeInput.classList.add("error-input");
		errorPostcode.innerText = "Pole powinno zawieraæ prawid³owy kod pocztowy";
	}

	/*city*/
	if (!checkRequired(cityInput.value)) {
		valid = false;
		cityInput.classList.add("error-input");
		errorCity.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(cityInput.value, 2, 60)) {
		valid = false;
		cityInput.classList.add("error-input");
		errorCity.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
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

	/*password2*/
	if (!checkRequired(password2Input.value)) {
		valid = false;
		password2Input.classList.add("error-input");
		errorPassword2.innerText = "Pole jest wymagane";
	} else if (password2Input.value !== passwordInput.value) {
		valid = false;
		password2Input.classList.add("error-input");
		errorPassword2.innerText = "Hasla nie s¹ identyczne";
		errorPassword.innerText = "Hasla nie s¹ identyczne";
	}

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}
