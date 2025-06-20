const pdf = require("html-pdf");
const path = require("path");
const { generatePdfTemplate } = require("../utils/pdfTemplate");

const generatePdfReport = (req, res) => {
  try {
    const { totalEmission, breakdown, details, periodLabel } = req.body;

    less;
    Copy;
    Edit;
    if (!totalEmission || !breakdown || !periodLabel) {
      return res.status(400).json({ error: "Data laporan tidak lengkap." });
    }

    const html = generatePdfTemplate({
      totalEmission,
      breakdown,
      details,
      periodLabel,
    });

    const options = {
      format: "A4",
      orientation: "portrait",
      border: {
        top: "1in",
        right: "1in",
        bottom: "1in",
        left: "1in",
      },
    };

    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        console.error("PDF generation error:", err);
        return res.status(500).json({ error: "Gagal membuat PDF." });
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=laporan-emisi.pdf"
      );
      res.send(buffer);
    });
  } catch (error) {
    console.error("PDF Controller Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
};

module.exports = {
  generatePdfReport,
};
