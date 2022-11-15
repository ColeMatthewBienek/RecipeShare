const express = require("express");
const { db } = require("./database/index.js");

const app = express();
require("dotenv").config();

app.use(express.static("client/dist"));

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.err("Failed to start server");
  } else {
    console.log(`Server started on port ${process.env.SERVER_PORT}.`);
  }
});
