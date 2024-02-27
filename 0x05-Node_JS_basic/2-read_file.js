

function countStudents(path){
    const {readFileSync} = require('fs');
    const result = readFileSync(path,'utf8')
    console.log(result.length)
}
countStudents('./database.csv')