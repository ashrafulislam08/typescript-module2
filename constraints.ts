{
    //

    // constraints

    interface Student {
        id: number;
        name: string;
        email: string;
    }
    const addCourseToStudent = <T extends Student>(student: T) => {
        const course = "Next Level Web Development"
        return {...student, course}
    }

    const st1 = addCourseToStudent({id: 222, name: 'Mr. Sam', email: "xmr@gmail.com", devType: "NLWB"})

    const st2 = addCourseToStudent({id: 333, name: 'Mr. Sam', email: "xmr@gmail.com", devType: "NLWB", hasWatch: "apple watch"})

    const st3 = addCourseToStudent({
        id: 32,
        name: "Sam",
        email: 'fjakfj'
    })
    


    // 
}