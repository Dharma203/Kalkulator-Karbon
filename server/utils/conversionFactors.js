// Faktor konversi emisi dalam satuan kg CO₂e per unit aktivitas
const conversionFactors = {
  // Scope 1 - Emisi langsung dari sumber yang dimiliki atau dikendalikan
  bensin: 2.31, // liter → kg CO₂e
  solar: 2.68, // liter → kg CO₂e
  kendaraan: 0.21, // km → kg CO₂e

  // Scope 2 - Emisi dari energi listrik yang dibeli dan digunakan
  listrik: 0.9, // kWh → kg CO₂e
  pendingin: 1.5, // unit → kg CO₂e (perkiraan)

  // Scope 3 - Emisi tidak langsung dari aktivitas rantai nilai
  airTravel: 0.15, // km → kg CO₂e (pesawat)
  logistik: 0.15, // km → kg CO₂e
  akomodasi: 50, // per perjalanan → kg CO₂e
  pengadaan: 1.2, // per unit barang/jasa → kg CO₂e
};

module.exports = conversionFactors;
