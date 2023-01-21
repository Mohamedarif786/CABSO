const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const index_route = require("./routes/index_route");
require("./config/db_config.js");
const corsOption = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOption));
app.use(body_parser.json({ limit: "50mb" }));
app.use(
  body_parser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 100000,
  })
);

const db = require("./model/index.modal.js");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(index_route);
  
app.use("/", (req, res) => {
  res.send("<h1>arif</h1>");
});

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server run successfully");
  }
});
