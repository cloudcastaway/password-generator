const lowercaseLetters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const uppercaseLetters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const symbols = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const numbers = [
  "0","1","2","3","4","5","6","7","8","9"
];

const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");
const generatorBtn = document.getElementById("generator-btn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const lengthInput = document.getElementById("length-input");
const DEFAULT_LEN = 8;
const uppercaseSwitch = document.getElementById("uppercase-switch");
const symbolsSwitch = document.getElementById("symbols-switch");
const numbersSwitch = document.getElementById("numbers-switch");

function generatePassword() {
  let password = [];
  const characters = getAllowedCharacters();
  for (let i = 0; i < Number(lengthInput.value); i++) {
    const index = Math.floor(Math.random() * characters.length);
    password.push(characters[index]);
  }
  return password.join("");
}

function updateCursor(element) {
  if (element.textContent != "") {
    element.classList.add("clickable");
  }
}

function showModal() {
  modal.classList.remove("hidden");
}

generatorBtn.addEventListener("click", () => {
  firstPassword.textContent = generatePassword();
  secondPassword.textContent = generatePassword();
  updateCursor(firstPassword);
  updateCursor(secondPassword);
})

firstPassword.addEventListener("click", (event) => {
  event.stopPropagation();
  navigator.clipboard.writeText(firstPassword.textContent);
  showModal();
})

secondPassword.addEventListener("click", (event) => {
  event.stopPropagation();
  navigator.clipboard.writeText(secondPassword.textContent);
  showModal();
})

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
})

window.addEventListener("click", (event) => {
  if (modal.classList.contains("hidden")) return;
  if (modal.contains(event.target)) return;
  modal.classList.add("hidden");
})

lengthInput.addEventListener("blur", () => {
  const raw = lengthInput.value.trim();

  if (raw === "") {
    lengthInput.value = DEFAULT_LEN;
    return;
  }

  const num = Math.floor(Number(raw));
  const min = Number(lengthInput.min);
  const max = Number(lengthInput.max);

  if (!Number.isFinite(num)) {
    lengthInput.value = DEFAULT_LEN;
    return;
  }

  lengthInput.value = Math.min(max, Math.max(min, num));
})

lengthInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {lengthInput.blur()}
})

function getAllowedCharacters() {
  characters = lowercaseLetters.slice();
  if (uppercaseSwitch.checked) {
    characters = characters.concat(uppercaseLetters);
  }

  if (symbolsSwitch.checked) {
    characters = characters.concat(symbols);
  }

  if (numbersSwitch.checked) {
    characters = characters.concat(numbers);
  }

  return characters;
}