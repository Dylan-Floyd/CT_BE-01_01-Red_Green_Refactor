export function getName(obj) {
    const [ { name } ] = arguments;
    return name;
}

export function copyAndPush(arr, number) {
    const result = [...arr, number];
    return result;
}
