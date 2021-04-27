const User = require("../models/user.model")

let userFunction = {
    getAllUsers: async () => {
        return [{id:'2', name:'oliver', email:'oliver@gmail.com'}]
    }
}

module.exports = userFunction;