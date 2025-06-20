# Metode Kalkulasi Emisi Gas Rumah Kaca (GRK) Per Scope

Dokumen ini menjelaskan cara menghitung emisi GRK berdasarkan kategori Scope 1, 2, dan 3 sesuai dengan pedoman umum dari **GHG Protocol**. Setiap scope memiliki sumber emisi dan metode perhitungan berbeda sesuai jenis aktivitasnya.

---

## Scope 1 – Emisi Langsung

Emisi yang berasal langsung dari aset milik atau dikendalikan oleh perusahaan.

### Subscope:

- Konsumsi Bahan Bakar (liter)
- Kendaraan Operasional (km)

### Rumus Kalkulasi:

Emisi (kgCO₂e) = Aktivitas × Faktor Emisi

### Contoh:

- Bensin: `2.31 kgCO₂e / liter`
- Solar: `2.68 kgCO₂e / liter`
- Kendaraan berbahan bakar bensin: `0.25 kgCO₂e / km`

---

## Scope 2 – Emisi Tidak Langsung dari Energi

Emisi dari konsumsi listrik, panas, pendingin yang dibeli dari pihak ketiga.

### Subscope:

- Konsumsi Listrik (kWh)
- Sistem Pendingin (kWh atau unit)

### Rumus Kalkulasi:

Emisi (kgCO₂e) = Aktivitas × Faktor Emi

### Contoh:

- Listrik di Indonesia: `0.9 kgCO₂e / kWh`

---

## Scope 3 – Emisi Tidak Langsung Lainnya

Emisi dari aktivitas yang tidak dimiliki atau dikontrol perusahaan, seperti rantai pasok atau perjalanan bisnis.

### Subscope:

- Logistik / Transportasi Pihak Ketiga (km atau kg barang)
- Akomodasi & Perjalanan Dinas
- Rantai Pasok / Pengadaan Vendor

### Rumus Kalkulasi:

Emisi (kgCO₂e) = Aktivitas × Faktor Emisi

### Contoh:

- Transportasi pihak ketiga: `0.12 kgCO₂e / km`
- Akomodasi hotel: `10 kgCO₂e / malam`
- Barang dari vendor: `1.5 kgCO₂e / kg`

---

## Catatan:

- Faktor emisi dapat berbeda tergantung pada **negara**, **jenis bahan bakar**, dan **jenis energi**.
- Gunakan referensi **lokal** atau **IPCC** untuk akurasi.
- Data konversi dapat disimpan dalam file seperti: utils/conversionFactors.js dan diakses saat melakukan perhitungan otomatis.
