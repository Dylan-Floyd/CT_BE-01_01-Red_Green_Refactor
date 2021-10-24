import {jest} from '@jest/globals';
import { myFunc } from '../index.js';

describe('red green refactor excersises', () => {
    test('I set this up right', () => {
        const actual = myFunc();
        expect(actual).toEqual(undefined);
    })
});