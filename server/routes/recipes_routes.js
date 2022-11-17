/* eslint-disable prefer-destructuring */
const Router = require("express-promise-router");
const { CookModel, RecipeModel } = require("../database/models/recipes");
const db = require("../database/index");

const router = new Router();
module.exports = router;

router.get("/recipes", async (req, res) => {
  const recipeList = await RecipeModel.find({});
  res.status(200).send(recipeList);
});

router.post("/recipe", async (req, res) => {
  try {
    const payload = req.body;
    await RecipeModel.create(payload);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(501).send("dup err");
  }
});

router.post("/cook", async (req, res) => {
  try {
    const payload = req.body;
    await CookModel.create(payload);
    res.status(201).send();
  } catch (error) {
    res.status(501).send("dup err");
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

router.post("/comment", async (req, res) => {
  // use objectId to locate recipe and add comment
  const searchId = req.body.recipeId;
  const comment = req.body.comment;
  const name = req.body.commentor;
  const newComment = {
    comment: comment,
    commentor: name,
  };
  try {
    await RecipeModel.findOneAndUpdate(
      { _id: searchId },
      { $push: { comments: newComment } }
    );
    res.status(201).send("comment posted");
  } catch (err) {
    console.log(err);
  }
});
