const UserModel = require('../models/user.model')

let userFunction = {
    getAllUsers: async () => {
        let allUsers = await UserModel.find({});
        return allUsers;
    }
}

module.exports = userFunction;