let dieRollMap = new Map();
let flag = true;
while (flag) {
    let numberOnDie = Math.floor(Math.random() * 6) + 1;
    if (dieRollMap.has(numberOnDie)) {
        let countOfNumber = dieRollMap.get(numberOnDie);
        countOfNumber++;
        dieRollMap.set(numberOnDie, countOfNumber);
    } else {
        dieRollMap.set(numberOnDie, 1);
    }

    for (let key of dieRollMap.keys()) {
        if (dieRollMap.get(key) == 10) {
            flag = false;
            break;
        }
    }
}

let numberAppearedMaxTimes;
let numberAppearedLeast;
let minimumCountOfParticularNumber = 100;
console.log(dieRollMap);
for (let [key, value] of dieRollMap) {
    if (value == 10) {
        numberAppearedMaxTimes = key;
    }

    if (value < minimumCountOfParticularNumber) {
        minimumCountOfParticularNumber = value;
        numberAppearedLeast = key;
    }
}
console.log("Number that appeared 10 times: " + numberAppearedMaxTimes);
console.log("Number That appeared Least: " + numberAppearedLeast);