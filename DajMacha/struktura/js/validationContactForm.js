function validateForm() {
	let valid = true;

	const firstnameInput = document.getElementById("firstname");
	const lastnameInput = document.getElementById('lastname');
	const emailInput = document.getElementById('email');
	const messageTextarea = document.getElementById('message');

	const errorFirstname = document.getElementById('errorFirstname');
	const errorLastname = document.getElementById('errorLastname');
	const errorEmail = document.getElementById('errorEmail');
	const errorMessage = document.getElementById('errorMessage');

	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([firstnameInput, lastnameInput, emailInput, messageTextarea], [errorFirstname, errorLastname, errorEmail, errorMessage], errorsSummary);

	/*firstname*/
	if (!checkRequired(firstnameInput.value)) {
		valid = false;
		firstnameInput.classList.add("error-input");
		errorFirstname.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(firstnameInput.value, 2, 60)) {
		valid = false;
		firstnameInput.classList.add("error-input");
		errorFirstname.innerText = "Pole powinno zawiera� od 2 do 60 znak�w";
	}

	/*lastname*/
	if (!checkRequired(lastnameInput.value)) {
		valid = false;
		lastnameInput.classList.add("error-input");
		errorLastname.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(lastnameInput.value, 2, 60)) {
		valid = false;
		lastnameInput.classList.add("error-input");
		errorLastname.innerText = "Pole powinno zawiera� od 2 do 60 znak�w";
	}

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

	/*message*/
	if (!checkRequired(messageTextarea.value)) {
		valid = false;
		messageTextarea.classList.add("error-input");
		errorMessage.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(messageTextarea.value, 5, 500)) {
		valid = false;
		messageTextarea.classList.add("error-input");
		errorMessage.innerText = "Pole powinno zawiera� od 5 do 500 znak�w";
	}

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b��dy";
	}

	return valid;
}
