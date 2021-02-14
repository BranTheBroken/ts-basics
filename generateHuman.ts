"use strict"

import {
    v4 as uuidv4
} from 'uuid';
export { names, surnames, countries, Human, generateHuman, pickOneRandomItem }

const names: string[] = ['James',
    'John',
    'Robert',
    'Michael',
    'William'
];

const surnames: string[] = ['Smith',
    'Johnson',
    'Williams'
];

const countries: string[] = ['PL', 'UK', 'USA'];

interface Human {
    _id: string,
    name: string,
    surname: string,
    country: string,
    age: number,
    phoneNr: string,
    email: string
}

function generateHuman(): Human {

    const name: string = pickOneRandomItem(names);
    const surname: string = pickOneRandomItem(surnames);


    const perfectHuman: Human = {
        _id: uuidv4(),
        name,
        surname,
        country: pickOneRandomItem(countries),
        age: Math.floor(Math.random() * (85 - 18 + 1) + 18),
        phoneNr: (Math.floor(Math.random() * (999999999 + 1))).toString(),
        email: `${surname}.${name}@email.com`,
    }
    return perfectHuman;
}

function pickOneRandomItem(array: string[]): string {
    if (array.length <= 1) throw new Error("Array is to short to randomly pick one element!");
    return array[Math.floor(Math.random() * array.length)]
}

const human = generateHuman();
//console.log(human);