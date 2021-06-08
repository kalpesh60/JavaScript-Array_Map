let numberArray = new Array();
for (let number = 0; number < 10; number++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    numberArray.push(randomNumber);
}
console.log(numberArray);

let maximum = numberArray[0];
let secondMax = maximum;
for (let i = 0; i < 10; i++) {
    if (maximum < numberArray[i]) {
        secondMax = maximum;
        maximum = numberArray[i];
    } else if (secondMax < numberArray[i]) {
        secondMax = numberArray[i];
    }
}
console.log("second max: " + secondMax);

let minimum = numberArray[0];
let secondMin = minimum;
for (let i = 0; i < 10; i++) {
    if (minimum > numberArray[i]) {
        secondMin = minimum;
        minimum = numberArray[i];
    } else if (secondMin > numberArray[i]) {
        secondMin = numberArray[i];
    }
}
console.log("second Min: " + secondMin);

numberArray.sort();
console.log(numberArray);
console.log("second max: " + numberArray[numberArray.length - 2]);
console.log("second min: " + numberArray[1]);