export default function createIteratorObject(report) {
  const arr = [];
  Object.keys(report.allEmployees).forEach((discipline) => {
    arr.push(...report.allEmployees[discipline]);
  });
  return arr;
}
