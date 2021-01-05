function validateForm() {
	let valid = true;

	const productNameInput = document.getElementById('productName');
	const priceInput = document.getElementById('price');
	/*const descriptionInput = document.getElementById('description');*/

	const errorProductName = document.getElementById('errorProductName');
	const errorPrice = document.getElementById('errorPrice');
	/*const errorDescription = document.getElementById('errorDescription');*/
	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([productNameInput, priceInput], [errorProductName, errorPrice], errorsSummary);

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
	/*if (!checkRequired(descriptionInput.value)) {
		valid = false;
		descriptionInput.classList.add("error-input");
		errorDescription.innerText = "Pole jest wymagane";
	}*/

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}