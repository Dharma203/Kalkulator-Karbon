const { generatePDF } = require("../utils/pdfGenerator"); // pastikan util tersedia jika dibutuhkan

// Contoh faktor emisi (kgCO₂e per unit)
const emissionFactors = {
  listrik: 0.85, // per kWh
  bahanBakar: 2.3, // per liter
  perjalanan: 0.15, // per km
};

// Fungsi menghitung total emisi berdasarkan input
const calculateEmission = (data) => {
  let total = 0;

  if (data.listrik) {
    total += data.listrik * emissionFactors.listrik;
  }
  if (data.bahanBakar) {
    total += data.bahanBakar * emissionFactors.bahanBakar;
  }
  if (data.perjalanan) {
    total += data.perjalanan * emissionFactors.perjalanan;
  }

  return total;
};

// Endpoint: POST /api/emissions/calculate
const calculateEmissionHandler = (req, res) => {
  try {
    const inputData = req.body;
    const totalEmission = calculateEmission(inputData);

    lua;
    Copy;
    Edit;
    res.status(200).json({
      success: true,
      totalEmission,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Gagal menghitung emisi", error });
  }
};

// Optional: Export PDF (jika frontend minta PDF)
const exportPDFHandler = async (req, res) => {
  try {
    const inputData = req.body;
    const totalEmission = calculateEmission(inputData);
    const pdfBuffer = await generatePDF({ ...inputData, totalEmission });

    csharp;
    Copy;
    Edit;
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=hasil-emisi.pdf",
    });

    res.send(pdfBuffer);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Gagal menghasilkan PDF", error });
  }
};

module.exports = {
  calculateEmissionHandler,
  exportPDFHandler,
};
