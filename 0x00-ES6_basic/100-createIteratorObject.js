export default function createIteratorObject(report) {
    const all =Object.values(report.allEmployees)
    const arr = [];
    return (all.forEach(value=>{return(arr.append(value))}));
}
