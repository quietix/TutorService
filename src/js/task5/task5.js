import {task1} from "../task1/task1.js";
import {prettyUsersPrint} from "../task1/functions.js";

export function task5(usersList, searchingValue){
    let foundUsersList = []
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i]?.full_name?.toLowerCase()?.includes(searchingValue?.toString()?.toLowerCase())){
            foundUsersList.push(usersList[i])
        }
        else if (usersList[i]?.note?.toLowerCase()?.includes(searchingValue?.toString()?.toLowerCase())){
            foundUsersList.push(usersList[i])
        }
        else if (usersList[i]?.age?.toString()?.includes(searchingValue.toString())){
            foundUsersList.push(usersList[i])
        }
    }
    return foundUsersList
}

export function showTask5(){
    let usersList = task1()
    // search is conducted among such properties as 'name', 'note', 'age'
    let searchingValue = 'Aaron'
    let foundUsersList = task5(usersList, searchingValue)
    console.log(`Searching for <${searchingValue}>`)
    prettyUsersPrint(foundUsersList)
}