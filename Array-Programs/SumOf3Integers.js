const prompt = require('prompt-sync')();
let numberArray = new Array();
let number1 = prompt("Enter the first number :");
let number2 = prompt("Enter the second number :");
let number3 = prompt("Enter the third number :");
numberArray.push(number1);
numberArray.push(number2);
numberArray.push(number3);
console.log(numberArray);
let sum = 0;

function findSum(sum, num) {
    sum += num;
    return sum;
}
numberArray.reduce(findSum, 0);
console.log("Sum is " + sum);