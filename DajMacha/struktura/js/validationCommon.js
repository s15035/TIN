function resetErrors(inputs, errorTexts, errorInfo) {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove("error_text");
	}
	for (let i = 0; i < errorTexts.length; i++) {
		errorTexts[i].innerText = "";
	}
	errorInfo.innerText = "";
}

function checkRequired(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	if (value === "") {
		return false;
	}
	return true;
}

function checkTextLengthRange(value, min, max) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	const length = value.length;
	if (max && length > max) {
		return false;
	}
	if (min && length < min) {
		return false;
	}
	return true;
}

/*function checkTel(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	const re = /^[0-9]+$/;
	return re.test(value);
}*/

function checkEmail(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(value);
}

function checkPostcode(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	const re = /^[0-9]{2}-[0-9]{3}$/i;
	return re.test(value);
}

function checkPassword(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,25}$/;
	return re.test(value);
}


