import {task1} from "../task1/task1.js";
import {prettyUsersPrint} from "../task1/functions.js";
import {task5} from "../task5/task5.js";
import {task3} from "../task3/task3.js";

export function task6(originalArr, foundArr){
    let matches = 0
    for (let foundElem of foundArr) {
        for (let originalElem of originalArr) {
            if (JSON.stringify(foundElem) === JSON.stringify(originalElem)){
                matches++
            }
        }
    }
    return Math.round(matches / originalArr.length * 100 * 100) / 100
}

export function showTask6(){
    // Search

    let searchingValue = '5'
    let usersList = task1()
    let foundUsersList = task5(usersList, searchingValue)
    console.log(`Searching for <${searchingValue}>`)
    prettyUsersPrint(foundUsersList)

    let correspondenceLevel = task6(usersList, foundUsersList)
    console.log(`Level of correspondence: ${correspondenceLevel}%`)



    // Filtering

    // let users = task1()
    // let filteringOptions = { country: 'Germany'}
    // let filteredUsers = task3(users, filteringOptions)
    // console.log('Searching for:')
    // prettyUsersPrint([filteringOptions])
    //
    // prettyUsersPrint(filteredUsers)
    //
    // let correspondenceLevel = task6(users, filteredUsers)
    // console.log(`Level of correspondence: ${correspondenceLevel}%`)
}