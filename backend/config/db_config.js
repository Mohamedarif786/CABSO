const env = require('dotenv')
env.config()
const pass ="pass";
module.exports = {
    HOST: process.env.host,
    USER: process.env.username,
    PASSWORD: pass,
    DB: process.env.databaseName,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
