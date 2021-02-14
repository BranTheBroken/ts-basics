"use strict"

export { mapFn, mapFnCallback, filterFn, filterFnCallback, everyFn, everyFnCallback, someFn, someFnCallback }

const numbers: number[] = [4, 9, 16, 25, 36];

const mapFn = <T, U>(array: T[], callback: (value: T, idx: number, array: T[]) => U): U[] => {
    if (array.length === 0) throw new Error("Array is empty");

    const initialValue: U[] = []

    const mappedArray = array.reduce((accumulator, currentValue, currentIndex) => {
        accumulator.push(callback(currentValue, currentIndex, array));
        return accumulator;
    }, initialValue);

    return mappedArray;
}

const mapFnCallback = (value: number, idx: number, array: number[]): number => value * 2;

//console.log(mapFn(numbers, mapFnCallback))

//------------------------------------------------------------------------------------

const filterFn = <T>(array: T[], callback: (value: T, idx: number, array: T[]) => boolean): T[] => {
    if (array.length === 0) throw new Error("Array is empty");

    const initialValue: T[] = [];

    const filteredArray: T[] = array.reduce((accumulator, currentValue, currentIdx) => {
        if (callback(currentValue, currentIdx, array)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, initialValue);
    return filteredArray;
}

const filterFnCallback = (value: number, idx: number, arr: number[]): boolean => value > 15

//console.log(filterFn(numbers, filterFnCallback))

//------------------------------------------------------------------------------------

const everyFn = <T>(array: T[], callback: (value: T, idx: number, array: T[]) => boolean): boolean => {
    if (array.length === 0) throw new Error("Array is empty");

    let copyArray: T[] = [...array];
    const answer: boolean = copyArray.reduce((accumulator, currentValue, currentIdx) => {
        if (!callback(currentValue, currentIdx, copyArray)) {
            copyArray.splice(currentIdx, (copyArray.length - currentIdx));
            return accumulator = false;
        }
        return accumulator;
    }, <boolean>true);
    return answer;
}

const everyFnCallback = (value: number, idx: number, array: number[]): boolean => value < 20;

//console.log(everyFn(numbers, everyFnCallback))

//------------------------------------------------------------------------------------

const someFn = <T>(array: T[], callback: (value: T, idx: number, array: T[]) => boolean): boolean => {
    if (array.length < 1) throw new Error("Array is empty");

    let copyArray: T[] = [...array];
    const answer: boolean = copyArray.reduce((accumulator, currentValue, currentIndex) => {
        if (callback(currentValue, currentIndex, copyArray)) {
            copyArray.splice(currentIndex, (copyArray.length - currentIndex));
            return accumulator = true;
        }
        return accumulator;
    }, <boolean>false);
    return answer;
}

const someFnCallback = (value: number, idx: number, array: number[]): boolean => value > 110

//console.log(someFn(numbers, someFnCallback))