function generatePDFHtml({ period, scope, records, totalEmission }) {
  const styles = `
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        color: #333;
      }
      h1 {
        color: #16a34a;
      }
      h2 {
        color: #4b5563;
        margin-top: 30px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
      }
      th, td {
        padding: 10px;
        border: 1px solid #ccc;
        text-align: left;
      }
      th {
        background-color: #f0fdf4;
        color: #166534;
      }
      .summary {
        margin-top: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #1e3a8a;
      }
    </style>
  `;

  const tableRows = records
    .map(
      (record, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${record.date}</td>
      <td>${record.scope}</td>
      <td>${record.subscope}</td>
      <td>${record.activityValue}</td>
      <td>${record.unit}</td>
      <td>${record.emissionFactor}</td>
      <td>${record.totalEmission.toFixed(2)} kgCO₂e</td>
    </tr>
  `
    )
    .join("");

  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Laporan Emisi Karbon</title>
        ${styles}
      </head>
      <body>
        <h1>Laporan Emisi Karbon</h1>
        <p><strong>Periode:</strong> ${period}</p>
        <p><strong>Scope:</strong> ${scope}</p>

        <h2>Detail Emisi</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tanggal</th>
              <th>Scope</th>
              <th>Subscope</th>
              <th>Aktivitas</th>
              <th>Satuan</th>
              <th>Faktor Emisi</th>
              <th>Total Emisi</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <div class="summary">
          Total Emisi: ${totalEmission.toFixed(2)} kgCO₂e
        </div>
      </body>
    </html>
  `;
}

module.exports = generatePDFHtml;
