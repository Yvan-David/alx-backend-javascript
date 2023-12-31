export default function getFullResponseFromAPI(success){
    const guess = new Promise((resolve, reject) => {
        if (success){
            resolve({
                status : 200,
                body : 'Success'
            })
        }
        else{
            reject('The fake API is not working currently')
        }
    })
    return guess;
}
