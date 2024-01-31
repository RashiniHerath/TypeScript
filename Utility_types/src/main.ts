//Utility types

// Partial
interface Assignment{
  studentId:string,
  title: string;
  grade: number;
  verified: boolean;
}
const  updateAssignment = (assign: Assignment, propsToUpdate:Partial<Assignment>):Assignment =>{
    return{...assign,...propsToUpdate}
}
const assign1:Assignment = {
    studentId: '123',
    title: 'Final Project',
    grade: 0,
    verified: false //optional
}

console.log(updateAssignment(assign1,{grade:25}))
const assignGraded: Assignment= updateAssignment(assign1,{grade:95})

// Readonly and required

const recordAssignment = (assign: Required<Assignment>):Assignment=>{
    //send to databse
    return assign
}
const assignVerified:Readonly<Assignment> = {...assignGraded, verified:true}

recordAssignment({...assignGraded, verified:true})

//Record
const hexColorMap:Record<string, string>={
    red: "FF0000" ,
    green: "00FF00",
    blue: "0000FF"

}
type Student="Sara" | "kelly"
type LetterGrades ="A" | "B" | "C" | "D" | "F"

const studentGrades:Record<Student, LetterGrades> ={
    Sara: "A",
    kelly: "B"
}

//we can use it by using interface

interface Grades{
    assign1:number,
    assign2:number,
}

const gradeData: Record<Student, Grades> ={
    Sara: {assign1: 100, assign2: 100},
    kelly: {assign1: 90, assign2: 95}
}

//Pick and Omit

type AssignResult= Pick<Assignment,"studentId"|
"grade">
const score:AssignResult ={
    studentId:"sar43",
    grade:85,
}
type AssignPreview=Omit<Assignment,"grade" | "verified">

const preview :AssignPreview={
    studentId:"Kara43",
    title:"Final Project"
}

//EXCLUDE AND EXTRACT
type adjustedGrade=Exclude<LetterGrades, "U">

type highGrade=Exclude<LetterGrades, "A" | "B">

//NonNullLable

type AllPossibleGrades = 'Dave' | 'John' | 'null'
undefined

type NamesOnly=NonNullable<AllPossibleGrades>

//Return Types

type newAssign = {title:string , points:number}

const createNewAssign=(title:string, points:number):newAssign=>{
    return {title, points}
}

//parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs:AssignParams = ["Final Project", 100]

const tsAssign2:newAssign=createNewAssign(...assignArgs)
console.log(tsAssign2)

