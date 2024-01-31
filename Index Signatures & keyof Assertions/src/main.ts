//Index Signatures (Need when we creating an object but we don't know the exact name of the object keys)

interface TranscationsObj{
       pizza:number,
       Books:number,
       job:number
}

const todayTransactions:TranscationsObj={
    pizza: 8,
    Books: 10,
    job: 20
}
console.log(todayTransactions.pizza)
console.log(todayTransactions['pizza'])

//////////////////////////////////////////////////////

interface Student {
    [key:string]:string | number | number[] |undefined
    
    name: string;
    age: number;
    classes?: number[];
}

const student: Student = {
    name: 'Max',
    age: 30,
    classes: [1, 2, 3],
    
};

//console.log(student.test);

for(const key in student){
    console.log('${key}: ${student[key]}')
}



