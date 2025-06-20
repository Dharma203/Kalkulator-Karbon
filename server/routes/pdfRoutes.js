const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/pdfController");

// Endpoint untuk mengunduh PDF hasil kalkulasi emisi
router.post("/generate", pdfController.generatePDF);
router.post('/api/pdf/export', exportPDF);

module.exports = router;
