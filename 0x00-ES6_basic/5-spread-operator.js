export default function concatArrays(array1, array2, string) {
    let arr = [ ]
    for (let a of array1) {arr.push(a)}
    for (let a of array2) {arr.push(a)}
    for (let a of string) {arr.push(a)}
    return (arr);
}