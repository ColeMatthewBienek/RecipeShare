require("dotenv").config({ path: "../../../.env" });
const db = require("../index");
const { CookModel, RecipeModel } = require("../models/recipes");

// test data
// const testDataCook = {
//   cookName: "Cole Bienek",
//   location: "Seattle",
//   foodTypes: ["Asian", "Italian", "Junk", "Desserts"],
// };

// const testDataRecipe = {
//   cook_name: "Cole Bienek",
//   ingredients: [
//     {
//       ingredient: "Sugar",
//       amount: 5,
//       measure: "handfuls",
//     },
//   ],
//   directions: ["Add sugar", "Stir well"],
// };
// test queries
// CookModel.create(testDataCook)
//   .then(() => console.log("cook added"))
//   .catch((err) => {
//     console.log("err here", err);
//   });

// RecipeModel.create(testDataRecipe)
//   .then(() => {
//     console.log("recipe created");
//   })
//   .catch(console.log);
