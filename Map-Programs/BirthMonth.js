let birthMonthMap = new Map();
for (let month = 1; month <= 12; month++) {
    birthMonthMap.set(month, 0);
}
for (let person = 0; person < 50; person++) {
    personMonth = Math.floor(Math.random() * 12) + 1;
    birthMonthMap.set(personMonth, birthMonthMap.get(personMonth) + 1);
}
console.log("Birth Month Map of 50 Individuals")
for (let [key, value] of birthMonthMap.entries()) {
    console.log("month: " + key + " total: " + value);
}