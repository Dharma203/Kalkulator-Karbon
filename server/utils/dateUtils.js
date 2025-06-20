// Fungsi untuk memformat tanggal ke format YYYY-MM-DD
function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toISOString().split("T")[0];
}

// Fungsi untuk mendapatkan tahun dari string atau objek Date
function getYear(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.getFullYear();
}

// Fungsi untuk mendapatkan bulan dari 0–11 menjadi 1–12
function getMonth(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.getMonth() + 1;
}

// Fungsi untuk mendapatkan nama bulan (opsional)
function getMonthName(date, locale = "id-ID") {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toLocaleString(locale, { month: "long" });
}

// Fungsi untuk membandingkan apakah dua tanggal berada pada bulan dan tahun yang sama
function isSamePeriod(dateA, dateB) {
  const a = new Date(dateA);
  const b = new Date(dateB);
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

module.exports = {
  formatDate,
  getYear,
  getMonth,
  getMonthName,
  isSamePeriod,
};
