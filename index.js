// Object full of possible characters for password generating
const charSet = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
    numbers: "0123456789"
}
//combined strings from object before trying to implement options
let characters = charSet.upperCase + charSet.lowerCase + charSet.symbols + charSet.numbers;

//Storing the output elements for the password
let pswdElOne = document.getElementById("pswd-1");
let pswdElTwo = document.getElementById("pswd-2");
let pswdLength = 14;


//Generate random password on button click
function passwordGenerator() {
    pswdElOne.textContent = ""
    pswdElTwo.textContent = ""
    for (let i = 0; i < pswdLength; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        let randomCharTwo = Math.floor(Math.random() * characters.length);
        pswdElOne.textContent += (characters[randomChar]);
        pswdElTwo.textContent += (characters[randomCharTwo]);
    }
};


//STRETCH -->
// Function that sets password length?
// Copy on click
// Toggle for symbols and numbers?
    // 0-25 = normal letters
    // 26-51 = Captilized letters
    // 52-71 = Numbers
    // 62-91 = Symbols