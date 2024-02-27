process.stdin.on('readable', data =>{
    console.log(data);
    process.exit('process ended','utf8')
});