/*function validateForm() {
    var imie = document.getElementById("firstName").value;
    var urodziny = document.getElementById("urodziny").value;

    if (imie == "") document.getElementById("errorFirstName").innerHTML = "Podaj imie!!!";
    else document.getElementById("errorFirstName").innerHTML = "";

    if (urodziny < 1 || urodziny > 12 || isNaN(urodziny)) document.getElementById("errorUrodziny").innerHTML = "Niepoprawny numer miesiaca!!!";
    else document.getElementById("errorUrodziny").innerHTML = "";

}
*/


function validateForm() {
    let valid = true;

    const imie = document.getElementById("firstName");
    const urodziny = document.getElementById("urodziny").value;
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([imie], [errorFirstName], errorsSummary);

    if (!checkRequired(imie.value)) {
        valid = false;
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(imie.value, 2, 60)) {
        valid = false;
        errorFirstName.innerText = "Pole powinno zawiera� od 2 do 60 znak�w";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera b��dy";
    }

    return valid;

}




