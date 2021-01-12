function validateForm() {
	let valid = true;

	const productNameInput = document.getElementById('productName');
	const priceInput = document.getElementById('price');
	const descriptionTextarea = document.getElementById('description');

	const errorProductName = document.getElementById('errorProductName');
	const errorPrice = document.getElementById('errorPrice');
	const errorDescription = document.getElementById('errorDescription');
	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([productNameInput, priceInput, descriptionTextarea], [errorProductName, errorPrice, errorDescription], errorsSummary);

	/*product name*/
	if (!checkRequired(productNameInput.value)) {
		valid = false;
		productNameInput.classList.add("error-input");
		errorProductName.innerText = "Pole jest wymagane";
	}

	/*price*/
	if (!checkRequired(priceInput.value)) {
		valid = false;
		priceInput.classList.add("error-input");
		errorPrice.innerText = "Pole jest wymagane";
	}

	/*description*/
	if (!checkRequired(descriptionTextarea.value)) {
		valid = false;
		descriptionTextarea.classList.add("error-input");
		errorDescription.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(descriptionTextarea.value, 10, 500)) {
		valid = false;
		descriptionTextarea.classList.add("error-input");
		errorDescription.innerText = "Pole powinno zawieraæ od 10 do 500 znaków";
	}
	

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}