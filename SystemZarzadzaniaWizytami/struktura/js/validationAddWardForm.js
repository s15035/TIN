function validateForm() {
	let valid = true;

	const idPatientInput = document.getElementById('id_pacjent');
	const idDoctorInput = document.getElementById('id_lekarz');
	const symptomInput = document.getElementById('objawy');
	const treatmentInput = document.getElementById('leczenie');
	const dateInput = document.getElementById('data_wizyty');

	const errorIdPatient = document.getElementById('errorId_pacjent');
	const errorIdDoctor = document.getElementById('errorId_lekarz');
	const errorSymptom = document.getElementById('errorObjawy');
	const errorTreatment = document.getElementById('errorLeczenie');
	const errorDateInput = document.getElementById('errorData_wizyty');
	
	const errorsSummary = document.getElementById('errorsSummary');

	resetErrors([idPatientInput, idDoctorInput, symptomInput, treatmentInput, dateInput], [errorIdPatient, errorIdDoctor, errorSymptom, errorTreatment, errorDateInput], errorsSummary);

	/*ID patient*/
	if (!checkRequired(idPatientInput.value)) {
		valid = false;
		idPatientInput.classList.add("error-input");
		errorIdPatient.innerText = "Pole jest wymagane";
	}

	/*ID Doctor*/
	if (!checkRequired(idDoctorInput.value)) {
		valid = false;
		idDoctorInput.classList.add("error-input");
		errorIdDoctor.innerText = "Pole jest wymagane";
	}

	/*Symptoms*/
	if (!checkRequired(symptomInput.value)) {
		valid = false;
		symptomInput.classList.add("error-input");
		errorSymptom.innerText = "Pole jest wymagane";
	}

	/*Treatment*/
	if (!checkRequired(treatmentInput.value)) {
		valid = false;
		treatmentInput.classList.add("error-input");
		errorTreatment.innerText = "Pole jest wymagane";
	} else if (!checkTextLengthRange(treatmentInput.value, 10, 1000)) {
		valid = false;
		treatmentInput.classList.add("error-input");
		errorTreatment.innerText = "Pole powinno zawieraæ od 10 do 1000 znaków";
	}

	/*Date*/
	if (!checkRequired(dateInput.value)) {
		valid = false;
		dateInput.classList.add("error-input");
		errorDateInput.innerText = "Pole jest wymagane";
	}

	if (!valid) {
		errorsSummary.innerText = "Formularz zawiera b³êdy";
	}

	return valid;
}