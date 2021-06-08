const prompt = require('prompt-sync')();
let number = prompt("Enter the number :");
let primeFactorsArray = new Array();
for (let i = 1; i <= number; i++) {
    if (number % i == 0 && getPrimeFactor(i)) {
        primeFactorsArray.push(i);
    }
}
console.log("prime factors are: " + primeFactorsArray);

function getPrimeFactor(number) {
    if (number != 1) {
        for (let i = 2; i <= number; i++) {
            if (i == number) {
                return true;
            }
            if (number % i == 0) {
                return false;
            }
        }
    }
}