# Struktur Periode: Harian, Bulanan, Tahunan

Dokumen ini menjelaskan bagaimana sistem mengelompokkan dan menampilkan data emisi berdasarkan periode waktu yang dipilih pengguna.

---

## Tujuan

Memungkinkan pengguna melihat data emisi secara:

- **Harian (daily)**
- **Bulanan (monthly)**
- **Tahunan (yearly)**

Ini berguna untuk keperluan **analisis tren emisi** dan **pelaporan berkala**.

---

## Format Tanggal & Key Periode

### Harian

- **Format:** `YYYY-MM-DD` (contoh: `2025-06-20`)
- **Key:** `date.toISOString().slice(0, 10)`

### Bulanan

- **Format:** `YYYY-MM` (contoh: `2025-06`)
- **Key:** `` `${year}-${month.toString().padStart(2, '0')}` ``

### Tahunan

- **Format:** `YYYY` (contoh: `2025`)
- **Key:** `` `${year}` ``

---

## Contoh Implementasi di Backend (`dateUtils.js`)

```js
function getPeriodKey(date, periodType) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  switch (periodType) {
    case "daily":
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;
    case "monthly":
      return `${year}-${String(month).padStart(2, "0")}`;
    case "yearly":
      return `${year}`;
    default:
      return "";
  }
}
```

## Penggunaan

- Data disimpan atau dikelompokkan berdasarkan key periode.
- Digunakan dalam chart (Pie/Bar) untuk mengelompokkan total emisi.
- Digunakan dalam filter dan tampilan hasil pada halaman laporan.

## Contoh Data Terstruktur

{
"2025-06-20": {
"totalEmission": 10.5,
"breakdown": {
"scope1": 5.0,
"scope2": 2.5,
"scope3": 3.0
}
},
"2025-06": {
"totalEmission": 120.7,
"breakdown": {
"scope1": 40.2,
"scope2": 30.1,
"scope3": 50.4
}
},
"2025": {
"totalEmission": 1340.3,
"breakdown": {
"scope1": 500.3,
"scope2": 420.0,
"scope3": 420.0
}
}
}
