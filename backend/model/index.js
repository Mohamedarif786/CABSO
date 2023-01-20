const dbConfig = require("../config/db_config.js");

const Sequelize = require("sequelize");
const pass ="pass";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, pass, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;