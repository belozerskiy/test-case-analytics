const { Op } = require("sequelize");
const Stats = require("../database/stats");
const { DateTime } = require("luxon");

module.exports = {
  async getStatsByDate(req, res) {
    let { id } = req.params;
    let { date } = req.query;
    try {
      let stats = await Stats.findAll({ where: { partner_id: id, date } });
      res.json({ status: "ok", stats });
    } catch ({ message }) {
      console.log(message);
      res.json({ status: "err", message: "internal error" });
    }
  },
  async getStatsByPeriod(req, res) {
    let { id } = req.params;
    let { from, to } = req.query;
    if (!to) {
      to = DateTime.fromISO(from)
        .plus({ months: 1 })
        .toISODate();
      console.log(to);
    }
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
};
