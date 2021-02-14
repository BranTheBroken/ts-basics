import { isRectangularTriangle } from './isRectangularTriangle'

describe('isRectangularTriangle function', () => { //describe poczatek zdania
    test('should throw an error with NaN as one value', () => { //test koniec zdania
        expect(() => {
            const wrongValues = [NaN, 6, 4]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('First value is NaN');

        expect(() => {
            const wrongValues = [NaN, 12, 14]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('First value is NaN');

        expect(() => {
            const wrongValues = [NaN, 12, 14]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(NaN, 24, 26);
        }).toThrow('First value is NaN');

        expect(() => {
            const wrongValues = [NaN, 12, 14]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(6, NaN, 6);
        }).toThrow('Second value is NaN');

        expect(() => {
            const wrongValues = [12, NaN, 14]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(6, NaN, 6);
        }).toThrow('Second value is NaN');

        expect(() => {
            const wrongValues = [6, NaN, 6]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(6, NaN, 6);
        }).toThrow('Second value is NaN');

        expect(() => {
            const wrongValues = [23, 22, NaN]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(23, 22, NaN);
        }).toThrow('Third value is NaN');

        expect(() => {
            const wrongValues = [4, 3, NaN]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(4, 3, NaN);
        }).toThrow('Third value is NaN');

        expect(() => {
            const wrongValues = [4, 4, NaN]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('Third value is NaN');

    })

    test('Function should throw an error as one input is < 0', () => {
        expect(() => {
            const wrongValues = [4, 4, -2]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('One side of triangle is lower then 0');
        expect(() => {
            const wrongValues = [4, -4, 6]
            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('One side of triangle is lower then 0');
        expect(() => {
            const wrongValues = [-10, 4, 12]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('One side of triangle is lower then 0');

    })

    test('Function should throw an error that triangle cannot be build', () => {
        expect(() => {
            const wrongValues = [10, 4, 16]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('Triangle cannot be build');

        expect(() => {
            const wrongValues = [31, 10, 45]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('Triangle cannot be build');

        expect(() => {
            const wrongValues = [2, 2, 6]

            const [a, b, c] = [...wrongValues]
            isRectangularTriangle(a, b, c);
        }).toThrow('Triangle cannot be build');
    })

    test('Function works well when triangle is possible to build', () => {
        const isTrianglePossible0: boolean = isRectangularTriangle(3, 4, 5);
        const isTrianglePossible1: boolean = isRectangularTriangle(6, 8, 10);
        const isTrianglePossible2: boolean = isRectangularTriangle(9, 12, 15);
        const isTrianglePossible3: boolean = isRectangularTriangle(5, 12, 13);
        const isTrianglePossible4: boolean = isRectangularTriangle(12, 16, 20);

        expect(isTrianglePossible0).toBe(true);
        expect(isTrianglePossible1).toBe(true);
        expect(isTrianglePossible2).toBe(true);
        expect(isTrianglePossible3).toBe(true);
        expect(isTrianglePossible4).toBe(true);

    })

    test('Function doesnt work when triangle is possible to build', () => {
        const isTrianglePossible0: boolean = isRectangularTriangle(6, 6, 10);
        const isTrianglePossible1: boolean = isRectangularTriangle(2, 9, 10);
        const isTrianglePossible2: boolean = isRectangularTriangle(9, 20, 15);
        const isTrianglePossible3: boolean = isRectangularTriangle(6, 12, 13);
        const isTrianglePossible4: boolean = isRectangularTriangle(12, 10, 20);

        expect(isTrianglePossible0).toBe(false);
        expect(isTrianglePossible1).toBe(false);
        expect(isTrianglePossible2).toBe(false);
        expect(isTrianglePossible3).toBe(false);
        expect(isTrianglePossible4).toBe(false);
    })
})