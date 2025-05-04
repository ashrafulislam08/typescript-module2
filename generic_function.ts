{
   
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray("BD")
    const restGeneric = createArrayWithGeneric<boolean>(true)

    type User = {
        id: number,
        name: string
    }

    const restGenericObj = createArrayWithGeneric<User>({id: 333, name: "MR. PAsha"})


    const createArrayWithTuple = <T,Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);

    const res11 = createArrayWithTuple<string, string>("Bangladesh", "Asia")


    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"
        return {...student, course}
    }

    const st1 = addCourseToStudent({name: 'Mr. Sam', email: "xmr@gmail.com", devType: "NLWB"})

    const st2 = addCourseToStudent({name: 'Mr. Sam', email: "xmr@gmail.com", devType: "NLWB", hasWatch: "apple watch"})


}