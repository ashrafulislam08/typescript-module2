type User1 = {
    name: string;
    age: number;
}

type userWithRole1 = User1 & {role: string}

const user1: User1 = {
    name: "Asraful",
    age: 25
}
const user: userWithRole1 = {
    name: "Asraful",
    age: 25,
    role: "Web Developer"
}


interface User2 {
    name: string; 
    age: number;
}

interface userWithRole extends User2 {
    role: string
}

const user2: User2 = {
    name: "Ashraful",
    age: 25
}
const user3: userWithRole = {
    name: "Ashraful",
    age: 25,
    role: 'Developer'
}



type Roll = number[];

const rollNumber1: Roll = [1, 3, 3]

interface  Roll2 {
    [index: number]: number;
}

const rollNumber2: Roll2 = [1, 2,    3 ]


type Add = (n1: number, n2: number) => number
interface Add2 {
    (num1: number, num2: number): number
}

const add: Add = (n1, n2) => n1+n2;

