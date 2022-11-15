const mongoose = require("mongoose");

const { Schema } = mongoose;
const db = require("../index");

// schemas and models
const cookSchema = new Schema({
  cookName: { type: String, required: true, unique: true },
  location: String,
  foodTypes: [String],
});
const CookModel = mongoose.model("Cook", cookSchema);

// Recipes
const recipeSchema = new Schema({
  recipe_name: { type: String, required: true, unique: true },
  cook_name: { type: String, required: true },
  ingredients: [
    {
      ingredient: String,
      amount: Number,
      measure: String,
    },
  ],
  directions: [String],
  comments: [
    {
      commentor: String,
      comment: String,
    },
  ],
  likes: Number,
  photos: [String],
});

// recipes
const RecipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = {
  RecipeModel: RecipeModel,
  CookModel: CookModel,
};
