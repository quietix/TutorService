import { randomUserMock, additionalUsers } from '../FE4U-Lab3-mock.js';
import {
    refactorDict,
    generateId,
    generateFavorite,
    generateColor,
    generateCourse,
    generateNote,
    prettyUsersPrint,
} from './functions.js'

export function task1(){
    let newUsers = []
    let IDs = []

    for (let elemKey in randomUserMock) {
        let refactoredElem = refactorDict(randomUserMock[elemKey])

        refactoredElem['id'] = generateId()
        refactoredElem['favorite'] = generateFavorite()
        refactoredElem['course'] = generateCourse()
        refactoredElem['bd_color'] = generateColor()
        refactoredElem['note'] = generateNote()
        IDs.push(refactoredElem['id'])

        newUsers.push(refactoredElem)
    }

    for (let i = 0; i < additionalUsers.length; i++) {
        if (IDs.includes(additionalUsers[i].id)){
            throw new Error("Id must be unique")
        }
        else{
            newUsers.push(additionalUsers[i])
        }
    }

    return newUsers
}

export function showTask1(){
    let users = task1()
    prettyUsersPrint(users)
}