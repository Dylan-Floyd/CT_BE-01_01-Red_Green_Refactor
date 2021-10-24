const { hexToRGB } = require('../exercises.js')

describe('excersises tests', () => {
    test('excersise 1 hexToRGB', () => {
        const expectation = {
            red: 255,
            green: 0,
            blue: 0
        };
        const actual = hexToRGB('FF0000');
        expect(actual).toEqual(expectation);
    })
});