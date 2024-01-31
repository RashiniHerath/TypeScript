"use strict";
//Index Signatures (Need when we creating an object but we don't know the exact name of the object keys)
const todayTransactions = {
    pizza: 8,
    Books: 10,
    job: 20
};
console.log(todayTransactions.pizza);
console.log(todayTransactions['pizza']);
const student = {
    name: 'Max',
    age: 30,
    classes: [1, 2, 3],
};
//console.log(student.test);
for (const key in student) {
    console.log('${key}: ${student[key]}');
}
