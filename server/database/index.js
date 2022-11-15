const mongoose = require("mongoose");
require("dotenv").config();
const { DB_CONNECTION } = require("../../config");

console.log(DB_CONNECTION);
// `${process.env.MONGO_DB_CONNECTION}`
const mongoDB = DB_CONNECTION;

// "mongodb+srv://colematthewbienek:sharpshooter@recipeshare.cxymf3q.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  dbName: "RecipeKeeper",
});

// DB Connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));
db.on("connected", () => {
  console.log("mongoDB running");
});

module.exports = {
  db: db,
};
