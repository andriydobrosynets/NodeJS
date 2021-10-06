const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const usersDataBase = path.join(__dirname, '../dataBase/users.json');

const getContent = async function getContent() {
    const data = await readFile(usersDataBase);
    return JSON.parse(data.toString());
}

module.exports = {
    getUsers: getContent,

    getUserById: async (userId) => {
        const users = await getContent();

        return users.find((user) => user.id === +userId);
    },

    createUser: async (newUser) => {
        const users = await getContent();

        users.push({ ...newUser, id: users.length + 1 });

        await writeFile(usersDataBase, JSON.stringify(users));
    },

    deleteUser: async (userId) => {
        const users = await getContent();

        const newArray = users.filter((user) => user.id !== +userId);

        await writeFile(usersDataBase, JSON.stringify(newArray));
    },

};
