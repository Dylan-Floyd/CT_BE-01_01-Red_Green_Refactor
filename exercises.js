/*
Exercise 1 - Convert hex colors to RGB

Create a function hexToRGB that converts a hex color to its RGB equivalent following the red, green, refactor development process.

    Think about what you want to happen?
    Red create a test for that behavior
    Green write code to make the test pass
    Refactor improve the code

const red = hexToRGB('FF0000');
console.log(red); // prints { red: 255, green: 0, blue: 0 }
*/
function base16ToBase10(base16String) {
    //I thought I could do Number('F') and do more math from there.
    //That didn't work so I googled how to convert a string to a
    //number in js, and the first result gave the full answer to this.
    //Kind of bummed, I was excited to figure out how to handle
    //multiple digits.
    return parseInt(base16String, 16);
}

function hexToRGB(hexString) {
    return {
        red: base16ToBase10(hexString.slice(0, 2)),
        green: base16ToBase10(hexString.slice(2, 4)),
        blue: base16ToBase10(hexString.slice(4, 6))
    }
}

/*
Exercise 2 - Converts RGB to hex

Create a function rgbToHex that converts a hex color to its RGB equivalent following the red, green, refactor development process.

    Think about what you want to happen?
    Red create a test for that behavior
    Green write code to make the test pass
    Refactor improve the code

const red = rgbToHex({ r: 255, g: 0, b: 0 });
console.log(red); // prints #FF0000
*/
function singleDigitB10ToB16(b10) {
    let b16 = '';
    //There's probably a better way to do this but I didn't want to google it this time
    switch(b10) {
        case 0:
            b16 = '0';
            break;
        case 1:
            b16 = '1';
            break;
        case 2:
            b16 = '2';
            break;
        case 3:
            b16 = '3';
            break;
        case 4:
            b16 = '4';
            break;
        case 5:
            b16 = '5';
            break;
        case 6:
            b16 = '6';
            break;
        case 7:
            b16 = '7';
            break;
        case 8:
            b16 = '8';
            break;
        case 9:
            b16 = '9';
            break;
        case 10:
            b16 = 'A';
            break;
        case 11:
            b16 = 'B';
            break;
        case 12:
            b16 = 'C';
            break;
        case 13:
            b16 = 'D';
            break;
        case 14:
            b16 = 'E';
            break;
        case 15:
            b16 = 'F';
            break;
    }
    return b16;
}

function base10ToBase16(base10) {
    const digit1 = singleDigitB10ToB16(Math.floor(base10/16));
    const digit2 = singleDigitB10ToB16(base10%16);
    return `${digit1}${digit2}`;
}

function rgbToHex(rgbObj) {
    const r = base10ToBase16(rgbObj.r);
    const g = base10ToBase16(rgbObj.g);
    const b = base10ToBase16(rgbObj.b);
    return `#${r}${g}${b}`;
}

/*
Exercise 3 - fetch a list of characters

Fetch a list of characters from a web API using the node-fetch package.

What happens if the API is down? Will our test fail? Should our test fail?
*/

module.exports = {
    hexToRGB,
    base16ToBase10,
    rgbToHex,
    base10ToBase16,
    singleDigitB10ToB16
}