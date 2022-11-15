const recipes = require("./recipes_routes");

module.exports = (app) => {
  app.use("/", recipes);
};
