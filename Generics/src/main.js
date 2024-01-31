"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "john" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { arg, is: false };
    if (isObj(arg)) {
        return { arg, is: !!Object.keys(arg).length };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue("john"));
console.log(isTrue(""));
console.log(isTrue([1, 2, 3]));
console.log(isTrue([]));
console.log(isTrue({ name: "john" }));
console.log(isTrue({}));
console.log(isTrue(null));
const BoolCheckValue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { value: arg, is: false };
    if (isObj(arg)) {
        return { value: arg, is: !!Object.keys(arg).length };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "john" }));
console.log(processUser({ id: 1, name: "john", age: 20 }));
