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
        const expectation = 15;
        const actual = base16ToBase10('F');
        expect(actual).toEqual(expectation);
        
        const expectation2 = 10;
        const actual2 = base16ToBase10('a');
        expect(actual2).toEqual(expectation2);
    });
});