function validateForm() {
	let valid = true;

	const firstnameInput = document.getElementById("imie");
	const lastnameInput = document.getElementById('nazwisko');
	const specialisationInput = document.getElementById('specjalizacja');
	const wardInput = document.getElementById('oddzial');
	const emailInput = document.getElementById('email');
	const passwordInput = document.getElementById('password');

	const errorFirstname = document.getElementById('errorImie');
	const errorLastname = document.getElementById('errorNazwisko');
	const errorSpecialisation = document.getElementById('errorSpecjalizacja');
	const errorWard = document.getElementById('errorOddzial');
	const errorEmail = document.getElementById('errorEmail');
	const errorPassword = document.getElementById('errorHaslo');

	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([firstnameInput, lastnameInput, specialisationInput, wardInput, emailInput, passwordInput], [errorFirstname, errorLastname, errorSpecialisation, errorWard, errorEmail, errorPassword, ], errorsSummary);

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

	/*Specialisation*/
	if (!checkRequired(specialisationInput.value)) {
		valid = false;
		specialisationInput.classList.add("error-input");
		errorSpecialisation.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(specialisationInput.value, 5, 60)) {
		valid = false;
		specialisationInput.classList.add("error-input");
		errorSpecialisation.innerText = "Pole powinno zawieraæ od 5 do 60 znaków";
	}

	/*Ward*/
	if (!checkRequired(wardInput.value)) {
		valid = false;
		wardInput.classList.add("error-input");
		errorWard.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(wardInput.value, 2, 50)) {
		valid = false;
		wardInput.classList.add("error-input");
		errorWard.innerText = "Pole powinno zawieraæ od 2 do 60 znaków";
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
