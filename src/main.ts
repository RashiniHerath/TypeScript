let stringArr = ['one','hey','rash']

let guitars = ['strat','les paul',1000]

let mixedArr = [1,2,'three',true]

stringArr[0]='john'
stringArr.push('paul')

guitars[0]=1967
guitars.push('fender')

let test =[]
let bands: string[]=[]
bands.push('Van helan')

//tuple
let myTuple : [string,number,boolean]=["dev", 45 , true]

//objects
let myObj: object
myObj=[]
console.log(typeof myObj)
myObj=bands
myObj={}

const exampleObj={
    prop1:'rash',
    prop2: true,
}
interface Guitarist{
    name: string,
    active?: boolean,
    albms: (string | number)[]
}

let evh: Guitarist ={
    name:'john',
    active:true,
    albms:[1789,2128,4773]
}
let jp: Guitarist ={
    name:'john',
    active:true,
    albms:[1789,2128,4773]

}

// we can get now env and jp is eqaul bcz active is optional

const greetGuitarist=(gitarist:Guitarist)=>{
    if (greetGuitarist.name){
    return 'Hello ${guitarist.name.toUpperCase()}!'
}
return 'Hellow'
}

console.log(greetGuitarist(jp))


//enum
enum Role {ADMIN,READ_ONLY,AUTHOR}
const person ={
    name:'rash',
    age:30,
    hobbies:['sports','cooking'],
    role:Role.ADMIN
}

