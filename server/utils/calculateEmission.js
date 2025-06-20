const conversionFactors = require("./conversionFactors");

// Fungsi backend untuk menghitung total emisi dari daftar aktivitas
const calculateEmission = (activities) => {
  let totalEmission = 0;
  const emissionBreakdown = {};

  activities.forEach((activity) => {
    const { type, amount } = activity;
    const factor = conversionFactors[type];

    // Validasi faktor dan nilai amount
    if (factor && typeof amount === "number" && amount > 0) {
      const emission = amount * factor;
      totalEmission += emission;

      // Simpan emisi per tipe aktivitas
      emissionBreakdown[type] = emission;
    }
  });

  return {
    totalEmission,
    emissionBreakdown,
  };
};

module.exports = calculateEmission;
