class Coder{

    
    constructor(
        public name:string,
        private age:number,
        protected lang:string //can access with the classes and derived classes
    ){
        this.name=name
        this.age=age
        this.lang=lang
    }
    public getAge(){
        return `Hello, I'm ${this.age}`;
    }
    }

const Rash = new Coder("John Doe", 30, "TypeScript")
console.log(Rash.getAge());
console.log(Rash.name);
// console.log(Rash.lang) - Private property can't be accessed outside the class

interface Musician{
    name:string,
    age:number,
    instrument:string,
    play(action:string):string
}
class Guitarist implements Musician {
    constructor(
        public name: string,
        public age: number,
        public instrument: string,
    ){
        this.name = name;
        this.instrument = instrument;
    }
    play(action: string){
        return `I'm playing ${this.instrument} and ${action}`;
    }
}
const john = new Guitarist("John", 20, "Guitar");
console.log(john.play("strums"));

/////////////////////////// new class ///////////////////////////

class peeps{
    static count:number =0

    static getCount(): number{  //static method
        return  peeps.count
    }
    public id:number

    constructor(public name:string){
        this.name=name
        this.id=peeps.count++
    }
}

const John= new peeps("John")
const Doe= new peeps("Doe")
const Rash2= new peeps("Rash")

//console.log(John.id);
console.log(peeps.count);

/////////////////////////////

class Bands{

    private dataState:string[]

    constructor(){
        this.dataState=[]
    }
    public get data():string []{
        return this.dataState
    }
    public set data(value: string[]) {
        if (Array.isArray(value)&& value.every(el=>typeof el === "string")){
            this.dataState=value
            return
        }else throw Error('Incorrect format')
}
}
const BandInfo=new Bands()
BandInfo.data=[ 'The Beatles', 'The Rolling Stones']
console.log(BandInfo.data);
