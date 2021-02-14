"use strict"

export { isValidValues, isRectangularTriangle }

function isValidValues(a: number, b: number, c: number): void {
    if (isNaN(a)) throw new Error("First value is NaN");
    if (isNaN(b)) throw new Error("Second value is NaN");
    if (isNaN(c)) throw new Error("Third value is NaN");

    const arr: number[] = [a, b, c];
    if (Math.min(...arr) < 0) throw new Error("One side of triangle is lower then 0");
}

function isRectangularTriangle(x1: number, x2: number, x3: number): boolean {
    isValidValues(x1, x2, x3);

    const [a, b, c] = [x1, x2, x3].sort((a, b) => a - b);
    if (c > b + a) throw new Error('Triangle cannot be build');

    return Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2);
}

const cond1: boolean = isRectangularTriangle(3, 4, 5);
const cond2: boolean = isRectangularTriangle(4, 3, 5);
const cond3: boolean = isRectangularTriangle(4, 5, 3);
const cond4: boolean = isRectangularTriangle(4, 4, 4);
//console.log(cond1, cond2, cond3, cond4)