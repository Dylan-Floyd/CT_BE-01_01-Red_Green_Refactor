import fetch from 'node-fetch';

export function getName(obj) {
    const [ { name } ] = arguments;
    return name;
}

export function copyAndPush(arr, number) {
    const result = [...arr, number];
    return result;
}

export function capitalizeAndFilter(arr) {
    return arr.map(string => string.toUpperCase()).filter(string => string.charAt(0) !== 'F');
}

export async function getQuote() {
    const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
    const [ quote ] = await resp.json();
    const result = {
        text: quote.quote,
        name: quote.character,
        image: quote.image
    }
    return result;
}