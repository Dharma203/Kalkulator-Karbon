// Faktor emisi dalam kg CO₂e per unit aktivitas
const emissionFactors = {
  listrik: 0.85, // contoh: 0.85 kg CO₂e per kWh
  bensin: 2.31, // contoh: 2.31 kg CO₂e per liter
  solar: 2.68, // contoh: 2.68 kg CO₂e per liter
  airTravel: 0.15, // contoh: 0.15 kg CO₂e per km
  // Tambahkan aktivitas lain jika perlu
};

const calculateEmission = (activities) => {
  let totalEmission = 0;

  activities.forEach((activity) => {
    const { type, amount } = activity;
    const factor = emissionFactors[type];
    if (factor && amount > 0) {
      totalEmission += amount * factor;
    }
  });

  return totalEmission;
};

module.exports = calculateEmission;

const calculateEmission = require("../utils/calculateEmission");

const activities = [
  { type: "listrik", amount: 100 },
  { type: "bensin", amount: 20 },
];

const total = calculateEmission(activities);
console.log(total); // Output: total emisi karbon
