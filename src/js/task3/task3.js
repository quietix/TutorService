import {randomUserMock} from "../FE4U-Lab3-mock.js";
import {task1} from "../task1/task1.js";
import {prettyUsersPrint} from "../task1/functions.js";

// filters: [country: '<country>', age: [<ageMin>, <ageMax>], gender: '<male> or <female>', favorite: <true> or <false>]
export function task3(usersArr, filters){
    return usersArr.filter(function (item){
        for (let key in filters){
            if (key === 'age'){
                if (item[key] === undefined || filters[key][0] > item[key] || filters[key][1] < item[key]){
                    return false
                }
            }
            else if (key === 'favorite'){
                if (item[key] === undefined || item[key] !== filters[key]){
                    return false
                }
            }
            else if (item[key] === undefined || item[key].toLowerCase() !== filters[key].toLowerCase()){
                return false
            }
        }
        return true
    })
}

// Show task3 work
export function showTask3(){
    let users = task1()
    // filters: [country: '<country>', age: [<ageMin>, <ageMax>], gender: '<male> or <female>', favorite: <true> or <false>]
    let filteringOptions = { country: 'Germany', age: [50, 100], gender: 'Female', favorite: false}
    let filteredUsers = task3(users, filteringOptions)
    console.log('Filtering options:')
    prettyUsersPrint([filteringOptions])
    console.log('Result:\n')
    prettyUsersPrint(filteredUsers)
}