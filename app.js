const fs = require('fs');
const path = require('path');

const users = [
    { name: 'Olya', gender: 'female', age: 10 },
    { name: 'Vasyl', gender: 'male', age: 22 },
    { name: 'Jeck', gender: 'male', age: 23 },
    { name: 'Oleh', gender: 'male', age: 10 },
    { name: 'Kris', gender: 'female', age: 19 },
    { name: 'Anna', gender: 'female', age: 32 },
    { name: 'Ira', gender: 'female', age: 29 },
    { name: 'Ihor', gender: 'male', age: 14 },
    { name: 'Orest', gender: 'male', age: 10 },
    { name: 'Panas', gender: 'male', age: 12 }
];

const foldersNames = ['manOlder20', 'manYounger20', 'womanOlder20', 'womanYounger20'];

const manOlder20 = (file) => path.join(__dirname, 'manOlder20', file);
const manYounger20 = (file) => path.join(__dirname, 'manYounger20', file);
const womanOlder20 = (file) => path.join(__dirname, 'womanOlder20', file);
const womanYounger20 = (file) => path.join(__dirname, 'womanYounger20', file);

const createFolders = (arrayUsers) => {
    arrayUsers.forEach(name => {
        let folderPath = path.join(__dirname, name)
        fs.mkdir(folderPath, {recursive: true}, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}



const fileWriter = (newFile, data) => {
    fs.writeFile(newFile, data, err => {
        if (err) {
            console.log(err);
        }
    });
}

const sort = (arrayUsers) => {
    arrayUsers.forEach(user => {
        if (user.age >= 20 && user.gender === 'male') {
            fileWriter(manOlder20(`${user.name}.txt`), JSON.stringify(user));
        } else if (user.age < 20 && user.gender === 'male') {
            fileWriter(manYounger20(`${user.name}.txt`), JSON.stringify(user));
        } else if (user.age >= 20 && user.gender === 'female') {
            fileWriter(womanOlder20(`${user.name}.txt`), JSON.stringify(user));
        } else {
            fileWriter(womanYounger20(`${user.name}.txt`), JSON.stringify(user));
        }
    });
}

createFolders(foldersNames);
sort(users);