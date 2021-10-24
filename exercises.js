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
function hexToRGB(rgbString) {
    return {
        red: 255,
        green: 0,
        blue: 0
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

/*
Exercise 3 - fetch a list of characters

Fetch a list of characters from a web API using the node-fetch package.

What happens if the API is down? Will our test fail? Should our test fail?
*/


module.exports = {
    hexToRGB
}