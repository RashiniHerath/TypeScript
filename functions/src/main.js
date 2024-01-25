"use strict";
//literaal types
let myName;
let userName;
userName = 'Amy';
//functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(1, 2));
let substract = function (c, d) {
    return c - d;
};
