import {createUser, uploadPhoto} from "utils.js";

export default function handleProfileSignup(){
    uploadPhoto
        .then(value => {console.log(body)})
        .catch(error =>{console.log('Signup system offline')})
    createUser
        .then(value => {console.log(firstName)})
        .then(value => {console.log(lastName)})
        .catch(error =>{console.log('Signup system offline')})
}
