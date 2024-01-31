type One = string
type Two = string |number
type Three = 'hello'

//convert to more or less specific
let a:One='hello'
let b = a as Two //less specific
let c = a as Three //more specific

let d = <One> 'world'
let e = <string | number>'world'

const addOrConcat=(a:number , b:number, c: 'add' | 'concat')
:number|string =>{
    if(c==='add') return a+b
    return '' + a + b
}

//the Dom
const img=document.querySelector('img')as HTMLImageElement
const myImg = document.getElementById('#img')! //non null assertion(!)