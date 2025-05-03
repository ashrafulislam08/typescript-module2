// Type Assertion 

let anything: any;
anything = "Next Level Web Development";
anything.name = "Sam ALtman";

anything = 231;

(anything as string)


const kgToGm = (value: string | number): number | string | undefined => {
    if(typeof value == 'string') {
        const convertedValue = parseFloat(value)*1000
        return convertedValue;
    } 
    if(typeof value == 'number') {
        return value * 1000
    }
}



const result1 = kgToGm(1000) as number;
const result2  = kgToGm('1000') as string;

type CustomeError = {
    message: string
}


try {

} catch(error) {
    console.log(error.message as CustomeError)
}


