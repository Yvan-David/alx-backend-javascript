export default function handleResponseFromAPI(promise){
    const guess = new Promise((resolve, reject) => {
        if (promise){
            resolve({
                status : 200,
                body : 'Success'
            })
        }
        else{
            reject()
        }
    })
    guess
        .finally(()=>{console.log('Got a response from the API')})
    return guess;
}
