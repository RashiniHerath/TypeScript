//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray=(string|number)[]

type Guitarist ={
    name?: string,
    active: boolean,
    albms: stringOrNumberArray
}

type UserId = stringOrNumber

//literaal types
let myName : 'Dave'

let userName : 'Dave' | 'John' | 'Amy'
userName = 'Amy'

//functions 
const add =(a: number, b: number): number =>{
    return a + b
}
const logMsg = (message:any):void=>{
    console.log(message)
}

logMsg('Hello!')
logMsg(add(1,2))


let substract = function (c:number, d: number):
number{
    return c - d
}

//optional parameters
const addAll=(a:number, b: number, c?:number):
number | undefined =>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return undefined;
}

//default param value
const addAll2=(a:number, b: number, c:number = 2):
number=>{
    return a+b+c
}
console.log(addAll2(3,4)); //9
console.log(addAll2(3,4,5)); //12



//rest parameter