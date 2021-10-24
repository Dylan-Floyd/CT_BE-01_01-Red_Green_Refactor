const { hexToRGB, base16ToBase10 } = require('../exercises.js')

describe('excersises tests', () => {
    test('excersise 1 hexToRGB', () => {
        const expectation = {
            red: 255,
            green: 0,
            blue: 0
        };
        const actual = hexToRGB('FF0000');
        expect(actual).toEqual(expectation);
    });
    test('base16ToBase10 works', () => {
        const expectation = 16;
        const actual = base16ToBase10('F');
        expect(actual).toEqual(expectation);
    })
});