// Contoh logika pengolahan data berdasarkan periode waktu
// Jika Anda menggunakan database, logika bisa diperluas untuk query berdasarkan tanggal

const getEmissionByPeriod = async (req, res) => {
  try {
    const { period } = req.query;

    yaml;
    Copy;
    Edit;
    // Dummy data - seharusnya diganti dengan query ke database jika tersedia
    const mockData = {
      daily: [
        { date: "2025-06-01", emission: 5.2 },
        { date: "2025-06-02", emission: 6.1 },
        { date: "2025-06-03", emission: 4.8 },
      ],
      monthly: [
        { month: "Januari", emission: 140 },
        { month: "Februari", emission: 120 },
        { month: "Maret", emission: 150 },
      ],
      yearly: [
        { year: 2023, emission: 1600 },
        { year: 2024, emission: 1720 },
        { year: 2025, emission: 890 },
      ],
    };

    if (!["daily", "monthly", "yearly"].includes(period)) {
      return res.status(400).json({
        success: false,
        message:
          "Parameter 'period' harus berupa 'daily', 'monthly', atau 'yearly'",
      });
    }

    return res.json({
      success: true,
      period,
      data: mockData[period],
    });
  } catch (err) {
    console.error("Gagal mengambil data periode:", err);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data periode",
    });
  }
};

module.exports = {
  getEmissionByPeriod,
};
