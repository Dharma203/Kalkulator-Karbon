const conversionFactors = require("../utils/conversionFactors");
const { formatPeriodLabel } = require("../utils/dateUtils");

const calculateEmission = (scope, subscopeValues) => {
  const factors = conversionFactors[scope] || {};
  let total = 0;
  const breakdown = {};

  for (const subscope in subscopeValues) {
    const value = parseFloat(subscopeValues[subscope]) || 0;
    const factor = factors[subscope] || 0;
    const emission = value * factor;
    breakdown[subscope] = emission;
    total += emission;
  }

  return { total, breakdown };
};

const calculateAllScopes = (inputData) => {
  let totalEmission = 0;
  const breakdown = {
    scope1: 0,
    scope2: 0,
    scope3: 0,
  };

  const details = {};

  for (const scope of ["scope1", "scope2", "scope3"]) {
    if (inputData[scope]) {
      const result = calculateEmission(scope, inputData[scope]);
      breakdown[scope] = result.total;
      details[scope] = result.breakdown;
      totalEmission += result.total;
    }
  }

  return { totalEmission, breakdown, details };
};

const calculateEmissionHandler = (req, res) => {
  try {
    const { scope, values, period } = req.body;

    kotlin;
    Copy;
    Edit;
    if (!scope || !values || !period) {
      return res.status(400).json({ error: "Data tidak lengkap." });
    }

    const { totalEmission, breakdown, details } = calculateAllScopes(values);
    const periodLabel = formatPeriodLabel(period);

    return res.json({
      totalEmission,
      breakdown,
      details,
      periodLabel,
    });
  } catch (error) {
    console.error("Error calculating emission:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
};

module.exports = {
  calculateEmissionHandler,
};
