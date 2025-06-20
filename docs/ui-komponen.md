# Dokumentasi UI Komponen

Dokumen ini menjelaskan komponen antarmuka (UI) utama dalam aplikasi perhitungan emisi, meliputi fungsi, props, dan peran masing-masing komponen dalam alur pengguna.

---

## 1. `ScopeSelector.jsx`

**Deskripsi:**  
Menampilkan daftar pilihan Scope (Scope 1, 2, 3) dengan deskripsi singkat.

**Props:**
- `selectedScope`: `string` – scope yang sedang dipilih.
- `onSelectScope`: `function` – fungsi callback saat scope dipilih.

**Desain:**
- Tombol seleksi dengan **border**, **shadow**, dan **warna latar dinamis** saat aktif.
- Responsif menggunakan **grid Tailwind**.

---

## 2. `PeriodSelector.jsx`

**Deskripsi:**  
Menampilkan pilihan periode perhitungan: Harian, Bulanan, Tahunan.

**Props:**
- `selectedPeriod`: `string` – nilai periode terpilih.
- `onSelectPeriod`: `function` – handler saat user memilih periode.

**Desain:**
- Tombol horizontal (flex-row).
- Menampilkan pilihan dengan **highlight** untuk pilihan aktif.

---

## 3. `SubscopeForm.jsx`

**Deskripsi:**  
Menampilkan field input numerik untuk masing-masing sub-scope sesuai scope yang dipilih.

**Props:**
- `selectedScope`: `string` – scope yang aktif.
- `inputValues`: `object` – nilai input untuk masing-masing sub-scope.
- `onChange`: `function` – handler saat user mengetik.

**Fitur:**
- Field disesuaikan secara dinamis berdasarkan `selectedScope`.
- Validasi dasar: **hanya angka positif**.

---

## 4. `EmissionResultCard.jsx`

**Deskripsi:**  
Menampilkan hasil perhitungan emisi dalam format kartu.

**Props:**
- `totalEmission`: `number` – total emisi dari semua sub-scope.
- `breakdown`: `object` – rincian per scope (scope1, scope2, scope3).
- `periodLabel`: `string` – label periode terpilih.

**Fitur:**
- Menampilkan **total emisi (kgCO₂e)** secara mencolok.
- Rincian ditampilkan dalam bentuk daftar per scope.

---

## 5. `ChartComponent.jsx`

**Deskripsi:**  
Menampilkan visualisasi data emisi menggunakan grafik PieChart.

**Props:**
- `chartData`: `array` – array berisi objek `{ name: string, value: number }`.

**Fitur:**
- Menggunakan **Recharts (PieChart)**.
- Label menampilkan nama dan persentase.
- Warna berbeda per kategori scope.

---

## 6. `PDFExportButton.jsx`

**Deskripsi:**  
Tombol untuk mengekspor hasil ke format PDF.

**Props:**
- `exportRef`: `ref` – referensi elemen DOM yang akan diambil sebagai isi PDF.

**Fitur:**
- Menggunakan `html2canvas` dan `jsPDF` untuk konversi ke PDF.
- Otomatis memberi nama file berdasarkan waktu.

---

## 7. Layout & Styling

- **Framework CSS:** TailwindCSS
- **Prinsip desain:** Responsif, mobile-first
- **Gaya:**
  - `rounded-2xl`
  - `shadow-md`
  - `font-semibold`
  - Warna dinamis (misal: **green**, **yellow**)

---

Gunakan struktur ini sebagai panduan saat membangun dan memelihara UI komponen aplikasi perhitungan emisi karbon.
