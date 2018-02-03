const { dbname, dbhost, dbuser, dbpassword } = require("../config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
  host: dbhost,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  },
  operatorsAliases: false
});

module.exports = sequelize;
