const express = require("express");
const router = express.Router();
const periodController = require("../controllers/periodController");

// Endpoint untuk mendapatkan data emisi berdasarkan periode
router.get("/:period", periodController.getEmissionsByPeriod);

module.exports = router;
