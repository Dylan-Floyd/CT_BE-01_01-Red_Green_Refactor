import { jest } from '@jest/globals';
import { getName,
    copyAndPush,
    capitalizeAndFilter,
    getQuote } from '../lab.js';

describe('lab tests', () => {
    test('getName works', () => {
        const data1 = {
            name: 'spot',
            age: 5,
            weight: '20 lbs'
        };
        const expected1 = 'spot';
        const actual1 = getName(data1);
        expect(actual1).toEqual(expected1);

        const data2 = {
            name: 'Aang',
            _id: '5cf56'
        };
        const expected2 = 'Aang';
        const actual2 = getName(data2);
        expect(actual2).toEqual(expected2);
    });

    test('copyAndPush', () => {
        const numbers = [1, 2, 3];
        const duplicate = [...numbers];
        const expected = [1, 2, 3, 4];
        const actual = copyAndPush(numbers, 4);
        expect(actual).toEqual(expected);
        expect(numbers).toEqual(duplicate);
    });

    test('capitalizeAndFilter', () => {
        const strings = ['apple', 'banana', 'fuji apple'];
        const expected = ['APPLE', 'BANANA'];
        const actual = capitalizeAndFilter(strings);
        expect(actual).toEqual(expected);
    });

    test('getQuote', () => {
        const expected = {
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String)
        }
        const actual = getQuote();
        expect(actual).toEqual(expected);
    });
});