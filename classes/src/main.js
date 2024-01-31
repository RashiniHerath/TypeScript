"use strict";
class Coder {
    constructor(name, age, lang //can access with the classes and derived classes
    ) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Rash = new Coder("John Doe", 30, "TypeScript");
console.log(Rash.getAge());
console.log(Rash.name);
class Guitarist {
    constructor(name, age, instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `I'm playing ${this.instrument} and ${action}`;
    }
}
const john = new Guitarist("John", 20, "Guitar");
console.log(john.play("strums"));
/////////////////////////// new class ///////////////////////////
class peeps {
    static getCount() {
        return peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = peeps.count++;
    }
}
peeps.count = 0;
const John = new peeps("John");
const Doe = new peeps("Doe");
const Rash2 = new peeps("Rash");
//console.log(John.id);
console.log(peeps.count);
/////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw Error('Incorrect format');
    }
}
const BandInfo = new Bands();
BandInfo.data = ['The Beatles', 'The Rolling Stones'];
console.log(BandInfo.data);
