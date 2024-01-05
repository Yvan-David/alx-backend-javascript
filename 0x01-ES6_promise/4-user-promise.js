export default function signUpUser(firstName, lastName) {
   const sign = new Promise((resolve) =>{
        resolve({
            firstName,lastName
        })
    })
    return sign;
}
