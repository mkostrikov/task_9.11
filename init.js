document.querySelector(".generate").addEventListener("click", run);
function run() {
  const initPerson = personGenerator.getPerson();
  console.log(initPerson);
}

