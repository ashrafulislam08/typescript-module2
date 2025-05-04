{// generic

const rollNumber: number[] = [3, 6, 8]
const rollNumber2: Array<number> = [3, 6, 8]

const mentors: string[] = ['Mr. X', "Mr. Y", "Mr. Z"]
const mentors2: Array<string> = ['Mr. X', "Mr. Y", "Mr. Z"]

const boolArrays: boolean[] = [true, false, true]
const boolArrays2: Array<boolean> = [true, false, true]


type GenericArray<T> = Array<T>


const names: GenericArray<string> = ["Ashraufl", "Siam", "Hawlader"]
const rolls: GenericArray<number> = [32, 34, 35] 
const bools: GenericArray<boolean> = [true, false, true]


const user: GenericArray<{name: string, age: number}> = [{
    name: "Mezba",
     age: 100,
}, {
    name: "Jhankar",
    age: 110
}

]



// generic tuple 

type GenericTuple<x,y> = [x, y]

const manush: GenericTuple<string, string> = [
    'Mr. X', "Mr. Y"
]


const userWithID: GenericTuple<number, {
    name: string, email: string
}> = [1234, { name: 'sam', email: 'a@gmail.com'}]




}



