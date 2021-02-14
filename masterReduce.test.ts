"use strict"

import { mapFn, mapFnCallback, filterFn, filterFnCallback, everyFn, everyFnCallback, someFn, someFnCallback } from './masterReduce';

describe('mapFn function', () => {
    test('should return exact same result as build-in map method', () => {
        const firstArr: number[] = [1, 2, 3, 4, 5, 6, 7];
        const secondArr: number[] = [8, 9, 10, 11, 12, 13];
        const thirdArr: number[] = [14, 15, 16, 17, 18, 19];

        //rozne callbacki
        expect(mapFn(firstArr, mapFnCallback)).toEqual(firstArr.map(mapFnCallback));
        expect(mapFn(secondArr, mapFnCallback)).toEqual(secondArr.map(mapFnCallback));
        expect(mapFn(thirdArr, mapFnCallback)).toEqual(thirdArr.map(mapFnCallback));
    })
})

describe('filterFn function', () => {
    test('should return exact same result as build-in filter method', () => {
        const firstArr: number[] = [5, 12, 532, 21, 112];
        const secondArr: number[] = [11, 44, 211, 43, 20];
        const thirdArr: number[] = [15, 23, 11, 2, 3];

        expect(filterFn(firstArr, filterFnCallback)).toEqual(firstArr.filter(filterFnCallback));
        expect(filterFn(secondArr, filterFnCallback)).toEqual(secondArr.filter(filterFnCallback));
        expect(filterFn(thirdArr, filterFnCallback)).toEqual(thirdArr.filter(filterFnCallback));
    })
})

describe('everyFn tests', () => {
    test('should return exact same result as build-in every method', () => {
        const firstArr: number[] = [5, 12, 532, 21, 112];
        const secondArr: number[] = [11, 44, 211, 43, 20];
        const thirdArr: number[] = [15, 23, 11, 2, 3];

        expect(everyFn(firstArr, everyFnCallback)).toBe(firstArr.every(everyFnCallback));
        expect(everyFn(secondArr, everyFnCallback)).toBe(secondArr.every(everyFnCallback));
        expect(everyFn(thirdArr, everyFnCallback)).toBe(thirdArr.every(everyFnCallback));
    })
})

describe('someFn tests', () => {
    test('should return exact same result as build-in every method', () => {
        const firstArr: number[] = [5, 12, 532, 21, 112];
        const secondArr: number[] = [11, 44, 211, 43, 20];
        const thirdArr: number[] = [15, 23, 11, 2, 3];

        expect(everyFn(firstArr, everyFnCallback)).toBe(firstArr.every(everyFnCallback));
        expect(everyFn(secondArr, everyFnCallback)).toBe(secondArr.every(everyFnCallback));
        expect(everyFn(thirdArr, everyFnCallback)).toBe(thirdArr.every(everyFnCallback));
    })
})//NO MAGIC NUMBERS