const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const emissionRoutes = require("./routes/emissionRoutes");
const periodRoutes = require("./routes/periodRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/emissions", emissionRoutes);
app.use("/api/periods", periodRoutes);
app.use("/api/pdf", pdfRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Carbon Emission Tracker API is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
