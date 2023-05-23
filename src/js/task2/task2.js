import { task1 } from "../task1/task1.js";
import {validate_age, validate_email, validate_phone, validate_string} from "./functions.js";

function task2(){
    const users = task1()
    users.forEach((user, index) => {
        console.log(index + 1)
        Object.keys(user).forEach(key => {
            switch (key) {
                case 'full_name':
                case 'gender':
                case 'note':
                case 'state':
                case 'city':
                case 'country':
                    validate_string(user[key]) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
                    break

                case 'age':
                    validate_age(user[key]) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
                    break

                case 'phone':
                    validate_phone(user[key], user['country']) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
                    break

                case 'email':
                    validate_email(user[key]) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
                    break
            }
        })
        console.log()
    })
}

export function showTask2(){
    task2()
}