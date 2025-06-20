const mongoose = require("mongoose");

const emissionRecordSchema = new mongoose.Schema(
  {
    scope: {
      type: String,
      required: true,
      enum: ["scope1", "scope2", "scope3"],
    },
    subscopeValues: {
      type: Map,
      of: Number,
      default: {},
    },
    totalEmission: {
      type: Number,
      required: true,
    },
    periodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Period",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmissionRecord = mongoose.model("EmissionRecord", emissionRecordSchema);

module.exports = EmissionRecord;
