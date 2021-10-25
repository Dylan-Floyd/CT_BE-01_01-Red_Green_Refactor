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