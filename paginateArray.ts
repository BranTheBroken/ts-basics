"use strict"

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

type settings = {
    actualPageIdx: number,
    entriesOnPage: number
}

const paginateArray = <T>(dataEntries: T[], settings: settings = {
    actualPageIdx: 2,
    entriesOnPage: 2,
}): T[] => {
    isNotValidValues(dataEntries, settings);

    if (dataEntries.length / settings.entriesOnPage <= settings.actualPageIdx) throw new Error("There arent that many pages");

    const offset: number = settings.entriesOnPage * (settings.actualPageIdx - 1);
    const entriesOnSelectedPage: T[] = dataEntries.slice(offset, offset + settings.entriesOnPage);
    return entriesOnSelectedPage;

}

function isNotValidValues<T>(arr: T[], obj: settings): void {
    if (arr.length <= 0) throw new Error("Provided dataEntries is empty");

    if (!Object.values(obj).every(currentValue => currentValue > 0)) throw new Error("Invalid setting values");
}

console.log(paginateArray(array))