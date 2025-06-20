import conversionFactors from "../../../server/utils/conversionFactors";

// Fungsi frontend untuk menghitung total emisi dari input form
export const calculateTotalEmission = (inputValues) => {
  let total = 0;

  for (const [key, value] of Object.entries(inputValues)) {
    const factor = conversionFactors[key] || 0;
    const input = parseFloat(value) || 0;
    total += input * factor;
  }

  return total;
};
