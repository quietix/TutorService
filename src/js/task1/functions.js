import {courses, words} from "./variables.js";

export function generateId(){
    let abc = "abcdefghijklmnopqrstuvwxyz0123456789";
    let rs = "";
    let len = Math.floor(Math.random() * (14 - 7)) + 7;
    while (rs.length < len) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs;
}

export function generateFavorite(){
    let rnd = Math.random();
    return rnd > 0.5;
}

export function generateCourse(){
    let rand = Math.floor(Math.random() * courses.length);
    return courses[rand];
}

export function generateColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function generateNote(){
    let note = ''
    let rndLen = Math.round(Math.random()*20)
    for (let i = 0; i < rndLen; i++) {
        let rndIndex = Math.floor(Math.random() * words.length);
        let rndWord = words[rndIndex]
        note += rndWord + " "
    }
    return note
}

function printUser(user){
    for (let elem of Object.entries(user)) {
        console.log(`"${elem[0]}": ${JSON.stringify(elem[1])}`);
    }
}

export function prettyUsersPrint(usersList){
    let counter = 1
    for (let i = 0; i < usersList.length; i++) {
        let user = usersList[i]
        console.log(counter)
        printUser(user)
        console.log()
        counter++
    }
}

function correctCoordinates(coordinates){
    return {
        'latitude': parseFloat(coordinates.latitude),
        'longitude': parseFloat(coordinates.latitude)
    }
}

function correctDate(date){
    return new Date(date)
}

/* Returns refactored dictionary */
export function refactorDict(oldDict){
    return {
        'gender': oldDict.gender,
        'title': oldDict.name.title,
        'full_name': `${oldDict.name.first} ${oldDict.name.last}`,
        'city': oldDict.location.city,
        'state': oldDict.location.state,
        'country': oldDict.location.country,
        'postcode': oldDict.location.postcode,
        'coordinates': correctCoordinates(oldDict.location.coordinates),
        'timezone': oldDict.location.timezone,
        'email': oldDict.email,
        'b_date': correctDate(oldDict.dob.date),
        'age': oldDict.dob.age,
        'phone': oldDict.phone,
        'picture_large': oldDict.picture.large,
        'picture_thumbnail': oldDict.picture.thumbnail
    }
}