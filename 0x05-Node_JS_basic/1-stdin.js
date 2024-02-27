console.log('Welcome to Holberton School, what is your name?\n')
const std = process.stdin;
std.setEncoding('utf8');
const value = std.on('data', (input) => {
    trimInput = input.trim();
    if(trimInput.length > 0){
        console.log(`Your name is: ${trimInput}`);
    }
})
std.on('end', ()=>{
   console.log('This important software is now closing');
})
if(value) process.exit();
