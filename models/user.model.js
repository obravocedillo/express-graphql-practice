let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userModel = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
});

let UserModel = mongoose.model('User', userModel);
module.exports = UserModel ;