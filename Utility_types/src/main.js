"use strict";
//Utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: 'Final Project',
    grade: 0,
    verified: false //optional
};
console.log(updateAssignment(assign1, { grade: 25 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Readonly and required
const recordAssignment = (assign) => {
    //send to databse
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const studentGrades = {
    Sara: "A",
    kelly: "B"
};
const gradeData = {
    Sara: { assign1: 100, assign2: 100 },
    kelly: { assign1: 90, assign2: 95 }
};
const score = {
    studentId: "sar43",
    grade: 85,
};
const preview = {
    studentId: "Kara43",
    title: "Final Project"
};
undefined;
const createNewAssign = (title, points) => {
    return { title, points };
};
const assignArgs = ["Final Project", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
