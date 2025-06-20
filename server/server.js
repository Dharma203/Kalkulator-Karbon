const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const emissionRoutes = require("./routes/emissionRoutes");
const periodRoutes = require("./routes/periodRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/emissions", emissionRoutes);
app.use("/api/periods", periodRoutes);
app.use("/api/pdf", pdfRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Carbon Emission Tracker API is running 🚀");
});

// Connect to MongoDB and start server
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/carbon-emission",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
