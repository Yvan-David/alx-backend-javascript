import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName){
    const sign = signUpUser(firstName, lastName);
    const up = uploadPhoto(fileName);
    return {
        status: sign.status,
        value: up.error
    }
};
