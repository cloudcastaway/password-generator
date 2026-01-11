const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");
const generatorBtn = document.getElementById("generator-btn");

function generatePassword() {
  let password = [];
  for (let i = 0; i < 15; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password.push(characters[index]);
  }
  return password.join("");
}

generatorBtn.addEventListener("click", () => {
  firstPassword.textContent = generatePassword();
  secondPassword.textContent = generatePassword();
});
