/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/**/*.{js,jsx,ts,tsx}", // Semua komponen & halaman React
    "./client/public/index.html", // File HTML utama (jika ada)
  ],
  darkMode: "class", // Aktifkan dark mode via class 'dark'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B7A75", // Warna utama (brand color Bank Lampung - karbon hijau kebiruan)
          light: "#14B8A6", // Aksen terang (untuk CTA, tombol)
          dark: "#064E3B", // Untuk footer/header gelap
        },
        background: {
          DEFAULT: "#F8FAFC", // Latar belakang halaman
          dark: "#0F172A", // Latar belakang mode gelap
        },
        muted: "#94A3B8", // Untuk teks sekunder
        danger: "#EF4444", // Warna merah (peringatan/salah)
        success: "#10B981", // Warna hijau (berhasil)
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Font utama
        display: ["Poppins", "ui-sans-serif"], // Judul besar
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Styling input & form
    require("@tailwindcss/typography"), // Styling teks artikel & PDF
    require("@tailwindcss/aspect-ratio"), // Untuk video/gambar responsif
    require("tailwind-scrollbar"), // Tambahkan scrollbar yang elegan
    require("tailwindcss-animate"), // Untuk animasi interaktif
  ],
};
