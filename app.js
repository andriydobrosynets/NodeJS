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
    { name: 'Panas', gender: 'male', age: 32 }
];

const namesOfFolders = ['manOlder20', 'manYounger20', 'womanOlder20', 'womanYounger20'];

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

const manOlder20Path = (file) => path.join(__dirname, 'manOlder20', file);
const manYounger20Path = (file) => path.join(__dirname, 'manYounger20', file);
const womanOlder20Path = (file) => path.join(__dirname, 'womanOlder20', file);
const womanYounger20Path = (file) => path.join(__dirname, 'womanYounger20', file);

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
            fileWriter(manOlder20Path(`${user.name}.txt`), JSON.stringify(user));
        } else if (user.age < 20 && user.gender === 'male') {
            fileWriter(manYounger20Path(`${user.name}.txt`), JSON.stringify(user));
        } else if (user.age >= 20 && user.gender === 'female') {
            fileWriter(womanOlder20Path(`${user.name}.txt`), JSON.stringify(user));
        } else {
            fileWriter(womanYounger20Path(`${user.name}.txt`), JSON.stringify(user));
        }
    });
}

createFolders(namesOfFolders);
sort(users);