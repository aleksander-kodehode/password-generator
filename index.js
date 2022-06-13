// Object full of possible characters for password generating
const charSet = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
    numbers: "0123456789"
}
//charSet.symbols + charSet.numbers;
//Global variables
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
slider.onchange = function(event){
    //Update var with current value of the slider
    pswdLength = slider.value
}
//Get checkbox value if they are changed after site is done loading.
symBox.onchange = function(event){symbolsToggle = symBox.checked}
numBox.onchange = function(event){numbersToggle = numBox.checked}

//Generate random password with settings
function generatePassword() {
    if (symbolsToggle === true && numbersToggle == true) {
        characters = charSet.upperCase + charSet.lowerCase + charSet.symbols + charSet.numbers;
        passwordLogic();
    } else if (symbolsToggle === true && numbersToggle === false) {
        characters = charSet.upperCase + charSet.lowerCase +charSet.symbols;
        passwordLogic();
    } else if (symbolsToggle === false && numbersToggle === true) {
        characters = charSet.upperCase + charSet.lowerCase +charSet.numbers;
        passwordLogic();
    } else {
        characters = charSet.upperCase + charSet.lowerCase
        passwordLogic();
    };
};
//Logic to generate password
function passwordLogic() {
    //Makes sure output fields are empty everytime funciton gets called
    pswdElOne.textContent = ""
    pswdElTwo.textContent = ""
    for (let i = 0; i < pswdLength; i++) {
        //Generate random numbers to pick from string
        let randomChar = Math.floor(Math.random() * characters.length);
        let randomCharTwo = Math.floor(Math.random() * characters.length);
        //Use the random numbers to pick characters from the characters string
        pswdElOne.textContent += (characters[randomChar]);
        pswdElTwo.textContent += (characters[randomCharTwo]);
    }
};

//STRETCH -->
// Copy on click
