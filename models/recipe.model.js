const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recipeSchema = new Schema({
    name: {
        type: String
    },
    ingredients:[
        {
            name:{
                type: String
            },
            quantity:{
                type: String
            }
        }
    ],
    instructions: {
        type: String
    }
})

let RecipeModel = mongoose.model('Recipe', recipeSchema);
module.exports = RecipeModel;