// Array full of possible characters for password generating
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Storing the output elements for the password
let pswdElOne = document.getElementById("pswd-1");
let pswdElTwo = document.getElementById("pswd-2");
let pswdLength = 14;


//Generate random password on button click
function passwordGenerator() {
    for (let i = 0; i < pswdLength; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomChar, randomChar +1);
        console.log(password)
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