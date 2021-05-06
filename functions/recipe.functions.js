const RecipeModel = require('../models/recipe.model');

let recipeFunction = {
    /**
     * @desc Save new recipe in the database
     * @param {*} name 
     * @param {*} ingredients 
     * @param {*} instructions 
     */
    saveNewRecipe: (name, ingredients, instructions) => {
        return new Promise((resolve)=>{
            let newRecipe = new RecipeModel(name, ingredients, instructions);
            newRecipe.save(function (err, recipe) {
                if (err) return err;
                resolve(recipe.name + " saved to recipee colletion.");
            });
        })
    }
}

module.exports = recipeFunction;