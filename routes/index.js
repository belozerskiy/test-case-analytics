const { Router } = require("express");
const api = require("../api");

const router = new Router();

router.get("/stats/:id/", api.getStatsByDate);
router.get("/stats/:id/period/", api.getStatsByPeriod);

module.exports = router;
