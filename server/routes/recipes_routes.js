const Router = require("express-promise-router");
const { CookModel, RecipeModel } = require("../database/models/recipes");
const db = require("../database/index");

const router = new Router();
module.exports = router;

router.get("/recipes", async (req, res) => {
  const recipeList = await RecipeModel.getRecipes;
  res.status(200).send(recipeList);
});

router.post("/recipe", async (req, res) => {
  try {
    const payload = req.body;
    await RecipeModel.create(payload);
    res.status(201).send();
  } catch (err) {
    console.log(err);
  }
});

router.post("/cook", async (req, res) => {
  try {
    const payload = req.body;
    await CookModel.create(payload);
    res.status(201).send();
  } catch (error) {
    console.log(error);
  }
});

router.get("/cooks", async (req, res) => {
  try {
    const cooksList = await CookModel.find({});
    res.status(200).json(cooksList);
  } catch (err) {
    console.log(err);
  }
});
