import { task1 } from "../task1/task1.js";
import {validate_age, validate_email, validate_phone, validate_string} from "./functions.js";

function task2(){
    let users = task1()
    let counter = 1
    for (let user of users) {
        console.log(counter)
        for (let key in user) {
            if (key === 'full_name' || key === 'gender' || key === 'note' ||
              key === 'state' || key === 'city' || key === 'country')
            {
            	validate_string(user[key]) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
            }
            else if (key === 'age'){
                validate_age(user[key]) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
            }
            else if (key === 'phone'){
                validate_phone(user[key], user['country']) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
            }
            else if (key === 'email'){
                validate_email(user[key]) ? console.log(`"${user[key]}" - OK`) : console.log(`"${user[key]}" - ERROR`)
            }
        }
        console.log()
        counter++
    }
}

export function showTask2(){
    task2()
}