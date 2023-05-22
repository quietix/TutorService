import {task1} from "../task1/task1.js";
import {prettyUsersPrint} from "../task1/functions.js";

export function task4(usersList, key, needReverse = false){
    let sortedList = usersList.sort((a, b) => {
        if (a[key] === undefined || b[key] === undefined){
            return 0
        }
        else{
            switch (key){
                case 'full_name':
                case 'country':
                    return a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 1
                case 'age':
                    return a[key] - b[key]
                case 'b_date':
                    return Date.parse(a[key]) < Date.parse(b[key]) ? -1 : 1
                default:
                    return 0
            }
        }
    })
    return needReverse ? sortedList.reverse() : sortedList
}

export function showTask4(){
    let usersList = task1()
    // Sorting options may be: 'full_name', 'age', 'b_day', 'country'
    let sortingOption = 'full_name'
    let sortedList = task4(usersList, sortingOption, false)
    console.log(`Sorting by <${sortingOption}>`)
    prettyUsersPrint(sortedList)
}