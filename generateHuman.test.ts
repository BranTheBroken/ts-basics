import { Human, generateHuman, pickOneRandomItem } from './generateHuman'

test('Should throw an error for calling func on too short array', () => {
    expect(() => {
        pickOneRandomItem([]);
    }).toThrow('Array is to short to randomly pick one element!')
})

test('Should not throw an error for calling func on too short array', () => {
    expect(() => {
        pickOneRandomItem(["elementOne", "elementTwo"]);

    }).not.toThrow('Array is to short to randomly pick one element!')
})

test('Test if generateHuman generates 2 diffrent Human objects', () => {
    const firstHuman: Human = generateHuman();
    const secondHuman: Human = generateHuman();

    expect(firstHuman).not.toEqual(expect.objectContaining(secondHuman))
})

test('Test if age is between 18 to 85', () => {
    const human: Human = generateHuman();

    expect(human.age).toBeGreaterThanOrEqual(18);
    expect(human.age).toBeLessThanOrEqual(85);
})

test('Should phoneNr has 9 length', () => {
    const human: Human = generateHuman();

    expect(human.phoneNr.length).toBe(9);
})

test('Test if email is valid', () => {
    const human: Human = generateHuman();
    const regex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    expect([human.email]).toEqual([expect.stringMatching(regex)])
})

test('Test if mail consists of name and surname', () => {
    const human: Human = generateHuman();

    expect([human.email]).toEqual([expect.stringContaining(human.surname)])
    expect([human.email]).toEqual([expect.stringContaining(human.name)])
})
