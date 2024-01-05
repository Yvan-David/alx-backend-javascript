export default function concatArrays(array1, array2, string) {
  const arr = [];
  for (const a of array1) { arr.push(a); }
  for (const a of array2) { arr.push(a); }
  for (const a of string) { arr.push(a); }
  return (arr);
}
