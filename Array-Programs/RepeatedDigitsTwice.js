let numberArray = new Array();
let index = 0;
for (let number = 1; number <= 100; number++) {
    if (Math.floor(number / 10) == (number % 10)) {
        numberArray[index] = number;
        index++;
    }
}
console.log("Repeated digits are: " + numberArray);