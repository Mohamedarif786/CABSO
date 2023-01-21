const dbConfig = require("../config/db_config.js");

const Sequelize = require("sequelize");
const pass = "";
const sequelize = new Sequelize(dbConfig.DB, 'root', dbConfig.PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5, 
    min: 0, 
    acquire: 30000, 
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
