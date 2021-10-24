const { hexToRGB, base16ToBase10, rgbToHex, base10ToBase16 } = require('../exercises.js')

describe('excersises tests', () => {
    test('excersise 1 hexToRGB', () => {
        const expectation = {
            red: 255,
            green: 0,
            blue: 0
        };
        const actual = hexToRGB('FF0000');
        expect(actual).toEqual(expectation);

        const expectation2 = {
            red: 240,
            green: 255,
            blue: 10
        };
        const actual2 = hexToRGB('F0FF0A');
        expect(actual2).toEqual(expectation2);
    });

    test('base16ToBase10 works', () => {
        const expectation = 15;
        const actual = base16ToBase10('F');
        expect(actual).toEqual(expectation);
        
        const expectation2 = 10;
        const actual2 = base16ToBase10('a');
        expect(actual2).toEqual(expectation2);
    });

    test('excersise 2 rgbToHex', () => {
        const expectation = '#FF0000';
        const actual = rgbToHex({
            r: 255,
            g: 0,
            b: 0
        });
        expect(actual).toEqual(expectation)

        const expectation2 = '#F0FF0A';
        const actual2 = rgbToHex({
            r: 240,
            g: 255,
            b: 10
        });
        expect(actual2).toEqual(expectation2);
    });

    test('base10ToBase16 works', () => {
        const expectation = 'FF';
        const actual = base10ToBase16(255);
        expect(actual).toEqual(expectation);

        const expectation2 = 'F0';
        const actual2 = base10ToBase16(240);
        expect(actual2).toEqual(expectation2);
    });

    test('singleDigitB10ToB16 works', () => {
        const expecation = 'F'
        const actual = singleDigitB10ToB16(15);
        expect(actual).toEqual(expecation);
    });
});