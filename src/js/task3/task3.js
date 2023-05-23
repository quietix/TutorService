import {randomUserMock} from "../FE4U-Lab3-mock.js";
import {task1} from "../task1/task1.js";
import {prettyUsersPrint} from "../task1/functions.js";

// filters: [country: '<country>', age: [<ageMin>, <ageMax>], gender: '<male> or <female>', favorite: <true> or <false>]
export function task3(usersArr, filters){
    return usersArr.filter(item => {
        for (let key in filters){
            switch (key) {
                case 'age':
                    if (item[key] === undefined || filters[key][0] > item[key] || filters[key][1] < item[key]){
                        return false
                    }
                    break
                case 'favorite':
                    if (item[key] === undefined || item[key] !== filters[key]){
                        return false
                    }
                    break
                default:
                    if (item[key] === undefined || item[key].toLowerCase() !== filters[key].toLowerCase()){
                        return false
                    }
                    break
            }
        }
        return true
    })
}

// Show task3 work
export function showTask3(){
    let users = task1()
    // filters: [country: '<country>', age: [<ageMin>, <ageMax>], gender: '<male> or <female>', favorite: <true> or <false>]
    let filteringOptions = { country: 'Germany', age: [0, 100], gender: 'female'}
    let filteredUsers = task3(users, filteringOptions)
    console.log('Filtering options:')
    prettyUsersPrint([filteringOptions])
    console.log('Result:\n')
    prettyUsersPrint(filteredUsers)
}