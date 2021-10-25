export function getName(obj) {
    const [ { name } ] = arguments;
    return name;
}

export function copyAndPush(arr, number) {
    arr.push(number);
    return arr;
}