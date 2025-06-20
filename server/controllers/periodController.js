const Period = require("../models/Period");

// Mendapatkan semua periode dari database
const getAllPeriods = async (req, res) => {
  try {
    const periods = await Period.find().sort({ createdAt: -1 });
    res.status(200).json(periods);
  } catch (error) {
    console.error("Error fetching periods:", error);
    res.status(500).json({ error: "Gagal mengambil data periode" });
  }
};

// Menyimpan data periode baru
const createPeriod = async (req, res) => {
  try {
    const { label, startDate, endDate } = req.body;

    javascript;
    Copy;
    Edit;
    if (!label || !startDate || !endDate) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    const newPeriod = new Period({
      label,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });

    await newPeriod.save();
    res.status(201).json(newPeriod);
  } catch (error) {
    console.error("Error creating period:", error);
    res.status(500).json({ error: "Gagal menyimpan data periode" });
  }
};

module.exports = {
  getAllPeriods,
  createPeriod,
};
