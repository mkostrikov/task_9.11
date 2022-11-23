document.querySelector(".generate").addEventListener("click", generatePerson);
document.querySelector(".reset").addEventListener("click", resetPerson);

function generatePerson() {
  personGenerator.getPerson();
  document.querySelector("#genderOutput").innerHTML = personGenerator.person.gender;
  document.querySelector("#firstNameOutput").innerHTML = personGenerator.person.firstName;
  document.querySelector("#surnameOutput").innerHTML = personGenerator.person.surname;
  document.querySelector("#patronymicOutput").innerHTML = personGenerator.person.patronymic;
  document.querySelector("#birthDateOutput").innerHTML = personGenerator.person.birthDate;
  document.querySelector("#profOutput").innerHTML = personGenerator.person.prof;
}

function resetPerson() {
  generatePerson.person = {};
  document.querySelector("#genderOutput").innerHTML = '';
  document.querySelector("#firstNameOutput").innerHTML = '';
  document.querySelector("#surnameOutput").innerHTML = '';
  document.querySelector("#patronymicOutput").innerHTML = '';
  document.querySelector("#birthDateOutput").innerHTML = '';
  document.querySelector("#profOutput").innerHTML = '';
}
