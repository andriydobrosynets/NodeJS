const { userService } = require('../services');

module.exports = {
    getUsers: async (req, res) => {
        const users = await userService.getUsers();

        res.json(users);
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;
        const userById = await userService.getUserById(userId);

        res.json(userById);
    },

    createUser: async (req, res) => {
        await userService.createUser(req.body);

        res.json('User created ');
    },

    deleteUserById: async (req, res) => {
        const { userId } = req.params;
        await userService.deleteUser(userId);

        res.json('User deleted');
    },

};
