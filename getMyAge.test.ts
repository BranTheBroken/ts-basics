import { getMyAge } from './getMyAge'

//powinny byc w pętli

test('Should return number with input value being Date', () => {

    const examples = [new Date(1990, 1, 1)]
    const results = [31]

    const returnVal0 = getMyAge(new Date(1990, 1, 1));
    const returnVal1 = getMyAge(new Date(1242, 11, 13));
    const returnVal2 = getMyAge(new Date(1943, 10, 11));
    const returnVal3 = getMyAge(new Date(1911, 9, 6));
    const returnVal4 = getMyAge(new Date(1945, 8, 2));
    const returnVal5 = getMyAge(new Date(1949, 7, 25));
    const returnVal6 = getMyAge(new Date(1923, 6, 20));
    const returnVal7 = getMyAge(new Date(2001, 5, 19));
    const returnVal8 = getMyAge(new Date(2012, 4, 15));
    const returnVal9 = getMyAge(new Date(2019, 3, 10));

    expect(returnVal0).toBe(31);
    expect(returnVal1).toBe(779);
    expect(returnVal2).toBe(78);
    expect(returnVal3).toBe(110);
    expect(returnVal4).toBe(76);
    expect(returnVal5).toBe(72);
    expect(returnVal6).toBe(98);
    expect(returnVal7).toBe(20);
    expect(returnVal8).toBe(9);
    expect(returnVal9).toBe(2);
})

test('Should return number with input value being string', () => {
    const returnVal0 = getMyAge('1990');
    const returnVal1 = getMyAge('1242');
    const returnVal2 = getMyAge('1943');
    const returnVal3 = getMyAge('1911');
    const returnVal4 = getMyAge('1945');
    const returnVal5 = getMyAge('1949');
    const returnVal6 = getMyAge('1923');
    const returnVal7 = getMyAge('2001');
    const returnVal8 = getMyAge('2012');
    const returnVal9 = getMyAge('2019');

    expect(returnVal0).toBe(31);
    expect(returnVal1).toBe(779);
    expect(returnVal2).toBe(78);
    expect(returnVal3).toBe(110);
    expect(returnVal4).toBe(76);
    expect(returnVal5).toBe(72);
    expect(returnVal6).toBe(98);
    expect(returnVal7).toBe(20);
    expect(returnVal8).toBe(9);
    expect(returnVal9).toBe(2);
})

test('Should return number with input value being number', () => {
    const returnVal0 = getMyAge(1990);
    const returnVal1 = getMyAge(1242);
    const returnVal2 = getMyAge(1943);
    const returnVal3 = getMyAge(1911);
    const returnVal4 = getMyAge(1945);
    const returnVal5 = getMyAge(1949);
    const returnVal6 = getMyAge(1923);
    const returnVal7 = getMyAge(2001);
    const returnVal8 = getMyAge(2012);
    const returnVal9 = getMyAge(2019);

    expect(returnVal0).toBe(31);
    expect(returnVal1).toBe(779);
    expect(returnVal2).toBe(78);
    expect(returnVal3).toBe(110);
    expect(returnVal4).toBe(76);
    expect(returnVal5).toBe(72);
    expect(returnVal6).toBe(98);
    expect(returnVal7).toBe(20);
    expect(returnVal8).toBe(9);
    expect(returnVal9).toBe(2);
})

test('Should throw an error becouse input value is NaN', () => {
    expect(() => {
        getMyAge(NaN);
    }).toThrow("Input is NaN");
})

test('Should throw an error, becouse input value is < 0', () => { //wiele przykladow
    expect(() => {
        getMyAge(-12);
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge(-2000);
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge(-1968);
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge('-12');
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge('-1952');
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge('-2000');
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge(new Date(-1949, 1, 1));
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge(new Date(-2000, 1, 1));
    }).toThrow("Input is lower then 0");
    expect(() => {
        getMyAge(new Date(-12, 1, 1));
    }).toThrow("Input is lower then 0");
})

test('Should throw an error, becouse input value is in future', () => {
    expect(() => {
        getMyAge(2030);
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge(2077);
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge(2055);
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge('2030');
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge('2707');
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge('3000');
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge(new Date(2030, 1, 1));
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge(new Date(2077, 1, 1));
    }).toThrow("Input is in future");
    expect(() => {
        getMyAge(new Date(3000, 1, 1));
    }).toThrow("Input is in future");
})

test('getMyAge function should throw an exeption for invalid Date value', () => {
    expect(() => {
        getMyAge(new Date('WYYYD'));
    }).toThrow("Input is NaN");
    expect(() => {
        getMyAge(new Date('W32dSS'));
    }).toThrow("Input is NaN");
    expect(() => {
        getMyAge(new Date('WY2as'));
    }).toThrow("Input is NaN");
})

