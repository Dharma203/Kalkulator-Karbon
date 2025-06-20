const express = require("express");
const router = express.Router();
const {
  createPeriod,
  getAllPeriods,
  getPeriodById,
} = require("../controllers/periodController");

// POST /api/periods → Buat periode baru
router.post("/", createPeriod);

// GET /api/periods → Ambil semua periode
router.get("/", getAllPeriods);

// GET /api/periods/:id → Ambil periode berdasarkan ID
router.get("/:id", getPeriodById);

module.exports = router;
