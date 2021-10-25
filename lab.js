export function getName(obj) {
    const [ { name } ] = arguments;
    return name;
}

export function copyAndPush(arr, number) {
    const result = [...arr, number];
    return result;
}

export function capitalizeAndFilter(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().charAt(0) !== 'f') {
            newArr[i] = arr[i].toUpperCase();
        }
    }
    return newArr;
}