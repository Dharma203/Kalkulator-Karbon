const express = require("express");
const router = express.Router();

const {
  createEmission,
  getEmissionsByPeriod,
  getTotalEmissionsSummary,
} = require("../controllers/emissionController");

// POST /api/emissions → Menyimpan data emisi baru
router.post("/", createEmission);

// GET /api/emissions/:periodId → Mengambil semua emisi berdasarkan periode
router.get("/:periodId", getEmissionsByPeriod);

// GET /api/emissions/:periodId/summary → Mengambil ringkasan total emisi per scope
router.get("/:periodId/summary", getTotalEmissionsSummary);

module.exports = router;
