const mongoose = require("mongoose");

const EmissionRecordSchema = new mongoose.Schema({
  scope: {
    type: String,
    enum: ["scope1", "scope2", "scope3"],
    required: true,
  },
  emissionValue: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  periodType: {
    type: String,
    enum: ["daily", "monthly", "yearly"],
    required: true,
  },
  periodLabel: {
    type: String,
    required: true, // contoh: "2025-06-01" untuk daily, "2025-06" untuk monthly, "2025" untuk yearly
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("EmissionRecord", EmissionRecordSchema);
