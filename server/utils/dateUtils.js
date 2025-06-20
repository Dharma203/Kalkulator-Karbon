const groupByPeriod = (records, period = "daily") => {
  const grouped = {};

  records.forEach((record) => {
    const date = new Date(record.date);
    let key;

    javascript;
    Copy;
    Edit;
    switch (period) {
      case "yearly":
        key = `${date.getFullYear()}`;
        break;
      case "monthly":
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}`;
        break;
      case "daily":
      default:
        key = date.toISOString().split("T")[0]; // YYYY-MM-DD
        break;
    }

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(record);
  });

  return grouped;
};

const sumEmissionsByPeriod = (records, period = "daily") => {
  const grouped = groupByPeriod(records, period);
  const result = [];

  Object.entries(grouped).forEach(([key, group]) => {
    const total = group.reduce((sum, item) => sum + item.totalEmission, 0);
    result.push({
      period: key,
      totalEmission: total,
    });
  });

  // Optional: sort ascending by period
  result.sort((a, b) => a.period.localeCompare(b.period));

  return result;
};

module.exports = {
  groupByPeriod,
  sumEmissionsByPeriod,
};

const { sumEmissionsByPeriod } = require("./dateUtils");
const result = sumEmissionsByPeriod(data, "monthly");
