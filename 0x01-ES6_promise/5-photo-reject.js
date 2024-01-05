export default function uploadPhoto(fileName) {
    const upload = new Promise((resolve, reject) =>{
        reject('Error')
    })
    upload
        .catch(error => {console.log(`${fileName} cannot be processed`)})
    return upload
}
