const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const Stats = sequelize.define("stats", {
  partner_id: Sequelize.INTEGER,
  event: Sequelize.ENUM(
    "LINK_VISITOR",
    "REGISTRATION",
    "PAYMENT",
    "FIRST_DEPOSIT",
    "DEPOSIT",
    "BET_WIN"
  ),
  event_value: Sequelize.MEDIUMINT,
  date: Sequelize.DATEONLY
});

module.exports = Stats;
