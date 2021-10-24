const myFunc = require('../index.js');

describe('red green refactor excersises', () => {
    test('I set this up right', () => {
        const actual = myFunc();
        expect(actual).toEqual(undefined);
    })
});