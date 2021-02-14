"use strict"

export { ValidInputTypes, getMyAge }

type ValidInputTypes = Date | string | number;

function getMyAge(value: ValidInputTypes): number {
    const currYear = new Date();
    const fullCurrYear = currYear.getFullYear();

    if (value instanceof Date) value = value.getFullYear();
    else if (typeof value === 'string') value = parseInt(value);
    else if (typeof value === 'number') value;
    else throw new Error('Invalid input type');


    if (isNaN(value)) throw new Error('Input is NaN');
    if (value < 0) throw new Error('Input is lower then 0')
    if (value > fullCurrYear) throw new Error('Input is in future')

    const age: number = fullCurrYear - value;
    return age;
}

// const result1: number = getMyAge(new Date(1990, 1, 1));
// const result2: number = getMyAge('1990');
// const result3: number = getMyAge(1990);
//console.log(result1, result2, result3);
