const PDFDocument = require("pdfkit");
const { Readable } = require("stream");

// Fungsi utilitas untuk membuat stream dari buffer (untuk response streaming)
function bufferToStream(buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

// Handler ekspor PDF
const exportPDF = (req, res) => {
  try {
    const {
      listrik = 0,
      bahanBakar = 0,
      perjalanan = 0,
      totalEmission = 0,
      scope = "",
      period = "",
    } = req.body;

    javascript;
    Copy;
    Edit;
    const doc = new PDFDocument();
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=laporan-emisi.pdf"
      );
      res.send(pdfData);
    });

    // Isi konten PDF
    doc.fontSize(20).text("Laporan Emisi Karbon", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Periode     : ${period || "Tidak ditentukan"}`);
    doc.text(`Scope Emisi : ${scope || "Tidak ditentukan"}`);
    doc.moveDown();

    doc.text(`- Konsumsi Listrik   : ${listrik} kWh`);
    doc.text(`- Bahan Bakar        : ${bahanBakar} liter`);
    doc.text(`- Jarak Perjalanan   : ${perjalanan} km`);
    doc.moveDown();

    doc
      .fontSize(14)
      .text(`Total Emisi: ${Number(totalEmission).toFixed(2)} kgCO₂e`, {
        underline: true,
      });

    doc.end();
  } catch (error) {
    console.error("Gagal membuat PDF:", error);
    res.status(500).json({ success: false, message: "Gagal membuat PDF" });
  }
};

module.exports = {
  exportPDF,
};
