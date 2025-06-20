const express = require("express");
const router = express.Router();
const { generatePDFReport } = require("../controllers/pdfController");

// Route: GET /api/pdf/:periodId
// Menghasilkan dan mengirim file PDF berdasarkan ID periode
router.get("/:periodId", generatePDFReport);

module.exports = router;
