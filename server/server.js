const express = require("express");
const { db } = require("./database/index");

const app = express();
require("dotenv").config();

const useRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = (req, res, next) => {
  console.log(`A ${req.method} request was made to the ${req.url} endpoint`);
  if (req.body && Object.keys(req.body).length) {
    console.log(`with a payload of ${JSON.stringify(req.body)}`);
  }
  next();
};
app.use(logger);

app.use(express.static("client/dist"));

useRoutes(app);

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.err("Failed to start server");
  } else {
    console.log(`Server started on port ${process.env.SERVER_PORT}.`);
  }
});
