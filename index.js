// Object full of possible characters for password generating
const charSet = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
    numbers: "0123456789"
}
//charSet.symbols + charSet.numbers;
//Global variables
const generateBtn = document.getElementById("generate-btn");
let pswdElOne = document.getElementById("pswd-1");
let pswdElTwo = document.getElementById("pswd-2");
let slider = document.getElementById("password-length");
let symBox = document.getElementById("symbols")
let numBox = document.getElementById("numbers")
let pswdLength = slider.value
// default checkbox value to false
let symbolsToggle = false
let numbersToggle = false


//Get slider value
slider.onchange = function(){
    //Update var with current value of the slider
    pswdLength = slider.value
}
//Get checkbox value if they are changed after site is done loading.
symBox.onchange = function(){symbolsToggle = symBox.checked}
numBox.onchange = function(){numbersToggle = numBox.checked}

// Check if button is clicked
// On click check which condtitions are met and run generatePassword
generateBtn.addEventListener("click", function(){
    if (symbolsToggle === true && numbersToggle == true) {
        characters = charSet.upperCase + charSet.lowerCase + charSet.symbols + charSet.numbers;
        generatePassword(pswdElOne, pswdElTwo);
    } else if (symbolsToggle === true && numbersToggle === false) {
        characters = charSet.upperCase + charSet.lowerCase +charSet.symbols;
        generatePassword(pswdElOne, pswdElTwo);
    } else if (symbolsToggle === false && numbersToggle === true) {
        characters = charSet.upperCase + charSet.lowerCase +charSet.numbers;
        generatePassword(pswdElOne, pswdElTwo);
    } else {
        characters = charSet.upperCase + charSet.lowerCase
        generatePassword(pswdElOne, pswdElTwo);
    };
});

//Logic to generate password
function generatePassword (outputOne, outputTwo) {
    //Makes sure output fields are empty everytime funciton gets called
    pswdElOne.textContent = ""
    pswdElTwo.textContent = ""
    for (let i = 0; i < pswdLength; i++) {
        //Generate random numbers to pick from string
        outputOne.textContent += (characters[Math.floor(Math.random() * characters.length)]);
        outputTwo.textContent += (characters[Math.floor(Math.random() * characters.length)]);
    }
}
// Copy to clipboard function
//Check if the user clicks the password
pswdElOne.addEventListener("click", () => {
    //Store the password text in a variable
    let copyElValue = pswdElOne.textContent
    //Write the stored variable to clipboard
    navigator.clipboard.writeText(copyElValue).then(() => {
        swal("PASSWORD COPIED");
    })
});
//Check if the user clicks the other password
pswdElTwo.addEventListener("click", () => {
    //Store the password text in a variable
    let copyElValue = pswdElTwo.textContent
    //Write the stored variable to clipboard
    navigator.clipboard.writeText(copyElValue).then(() => {
        swal("PASSWORD COPIED");
    })
});
