module.exports = function generatePDFTemplate(data) {
  const {
    records = [],
    totalEmission = 0,
    period = "Periode Tidak Ditentukan",
  } = data;

  const rows = records
    .map((r, index) => (
      <tr>
        {" "}
        <td style="border: 1px solid #ddd; padding: 8px;">${index + 1}</td>{" "}
        <td style="border: 1px solid #ddd; padding: 8px;">${r.date}</td>{" "}
        <td style="border: 1px solid #ddd; padding: 8px;">${r.scope}</td>{" "}
        <td style="border: 1px solid #ddd; padding: 8px;">
          ${r.totalEmission.toFixed(2)} kgCO₂e
        </td>{" "}
      </tr>
    ))
    .join("");

  return `

<!DOCTYPE html> <html> <head> <meta charset="utf-8" /> <title>Laporan Emisi Karbon</title> <style> body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; } h1 { text-align: center; color: #16a34a; } table { border-collapse: collapse; width: 100%; margin-top: 20px; } th { background-color: #16a34a; color: white; padding: 10px; text-align: left; } td { padding: 8px; } .summary { margin-top: 20px; font-weight: bold; font-size: 18px; color: #333; } </style> </head> <body> <h1>Laporan Emisi Karbon</h1> <p><strong>Periode:</strong> ${period}</p> <table> <thead> <tr> <th>No</th> <th>Tanggal</th> <th>Scope</th> <th>Total Emisi (kgCO₂e)</th> </tr> </thead> <tbody> ${
    rows || "<tr><td colspan='4'>Tidak ada data</td></tr>"
  } </tbody> </table> <p class="summary">Total Emisi: ${totalEmission.toFixed(
    2
  )} kgCO₂e</p> </body> </html> `;
};
