/* Returns true if str is valid */
import { callingCodes } from "./variables.js";

export function validate_string(str){
    if (typeof str != "string"){
        return false
    }
    let upperLetter = str[0]?.toUpperCase()
    return upperLetter === str[0];

}

/* Returns true if age is valid */
export function validate_age(age){
    return typeof age == "number";

}

/* Returns true if phone corresponds to country */
export function validate_phone(phone, country){
    phone = phone.replace(/^\(+/, '')
    phone = phone.replace(/^0+/, '')
    country = country?.toLowerCase()
    if (typeof phone != "string"){
        return false
    }
    else if (Object.keys(callingCodes).includes(country)){
        let retrievedChunk = phone.substring(0, callingCodes[country].length)
        return retrievedChunk.includes(callingCodes[country]);

    }
    return false
}

/* Returns true if email is valid */
export function validate_email(email){
    if (typeof email != "string"){
        return false
    }
    return email.includes('@');
}