const { Op } = require("sequelize");
const sequelize = require("../database/sequelize");
const Stats = require("../database/stats");
const query = require("../database/query");
const { DateTime } = require("luxon");

module.exports = {
  getStatsByPeriod,
  getStatsByPeriodWithQuery,
  getStatsByDate
};

async function getStatsByDate(req, res) {
  let { id } = req.params;
  let { date } = req.query;
  date = DateTime.fromISO(date).toISODate();

  try {
    let stats = await Stats.findAll({
      where: { partner_id: id, date },
      group
    });
    res.json({ status: "ok", stats });
  } catch ({ message }) {
    console.log(message);
    res.json({ status: "err", message: "internal error" });
  }
}

async function getStatsByPeriod(req, res) {
  let { id } = req.params;
  let { from, to } = req.query;

  //Filter date query from and to.
  if (!from) from = DateTime.fromISO(from).toISODate();
  if (!to)
    to = DateTime.fromISO(from)
      .plus({ months: 1 })
      .toISODate();

  try {
    let stats = await Stats.findAll({
      where: { partner_id: id, date: { [Op.gte]: from, [Op.lte]: to } }
    });
    res.json({ status: "ok", stats });
  } catch ({ message }) {
    console.log(message);
    res.json({ status: "err", message: "internal error" });
  }
}

async function getStatsByPeriodWithQuery(req, res) {
  let { id } = req.params;
  let { from, to } = req.query;

  //Filter date query from and to.
  if (!from) from = DateTime.fromISO(from).toISODate();
  if (!to)
    to = DateTime.fromISO(from)
      .plus({ months: 1 })
      .toISODate();

  try {
    let stats = await sequelize.query(query, {
      bind: [from, to],
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ status: "ok", stats });
  } catch ({ message }) {
    console.log(message);
    res.json({ status: "err", message: "internal error" });
  }
}
