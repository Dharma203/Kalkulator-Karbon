// Faktor konversi emisi dalam satuan kg CO₂e per unit
const conversionFactors = {
  listrik: 0.85, // per kWh
  bensin: 2.31, // per liter
  solar: 2.68, // per liter
  airTravel: 0.15, // per kilometer (rata-rata penerbangan domestik)
  kereta: 0.04, // per kilometer (rata-rata emisi kereta api)
  motor: 2.0, // per liter bensin motor
  LPG: 1.51, // per kg
  internet: 0.06, // per GB data
  belanjaPakaian: 25, // per item pakaian (rata-rata produksi)
  makanan: 4.5, // per porsi makanan (rata-rata makanan olahan)
  // Tambahkan faktor lain jika diperlukan
};

module.exports = conversionFactors;

const factors = require("./conversionFactors");
const emission = jumlahAktivitas * factors.listrik;
