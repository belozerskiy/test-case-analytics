const { Router } = require("express");
const api = require("../api");

const router = new Router();

router.get("/v1/stats/:id/", api.getStatsByDate);
router.get("/v1/stats/:id/period/", api.getStatsByPeriod);
router.get("/v2/stats/:id/period/", api.getStatsByPeriodWithQuery);

module.exports = router;
