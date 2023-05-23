import { randomUserMock, additionalUsers } from '../FE4U-Lab3-mock.js';
import {
    refactorDict,
    prettyUsersPrint,
} from './functions.js'

export function task1(){
    const newUsers = []
    const IDs = []

    for (let elemKey in randomUserMock) {
        let refactoredElem = refactorDict(randomUserMock[elemKey])
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
    const users = task1()
    prettyUsersPrint(users)
}