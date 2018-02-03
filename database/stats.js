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

/*
SELECT DATE, COUNT( IF(  `event` =  'REGISTRATION', 1, NULL ) )  `REGISTRATION_COUNT` , COUNT( IF(  `event` =  'LINK_VISITOR', 1, NULL ) ) `LINK_VISITOR_COUNT` , COUNT( IF(  `event` =  'PAYMENT', 1, NULL ) )  `PAYEMENT_COUNT` , SUM( IF(  `event` =  'PAYMENT', 1, NULL ) ) `PAYEMENT_VALUE` , COUNT( IF(  `event` =  'DEPOSIT', 1, NULL ) )  `DEPOSIT_COUNT` , SUM( IF(  `event` =  'DEPOSIT', event_value, NULL ) ) `DEPOSIT_VALUE` 
FROM stats
GROUP BY DATE

*/
