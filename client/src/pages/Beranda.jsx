import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Dashboard Emisi</h1>
      </header>
      {/* Konten utama */}
      <main className="p-6">
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Selamat Datang!
          </h2>
          <p className="text-gray-600">
            Aplikasi ini membantu Anda mencatat dan menganalisis emisi karbon
            dari berbagai aktivitas organisasi.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Kartu Navigasi */}
          <Link
            to="/emissions"
            className="bg-white hover:bg-green-50 transition border border-gray-200 p-4 rounded-lg shadow flex flex-col items-center"
          >
            <span className="text-green-700 text-2xl font-bold mb-2">📊</span>
            <h3 className="text-lg font-semibold text-gray-700">Data Emisi</h3>
            <p className="text-sm text-gray-500 text-center">
              Input dan pantau data emisi berdasarkan scope.
            </p>
          </Link>

          <Link
            to="/pdf"
            className="bg-white hover:bg-green-50 transition border border-gray-200 p-4 rounded-lg shadow flex flex-col items-center"
          >
            <span className="text-green-700 text-2xl font-bold mb-2">📄</span>
            <h3 className="text-lg font-semibold text-gray-700">Laporan PDF</h3>
            <p className="text-sm text-gray-500 text-center">
              Unduh laporan emisi dalam format PDF.
            </p>
          </Link>

          <Link
            to="/about"
            className="bg-white hover:bg-green-50 transition border border-gray-200 p-4 rounded-lg shadow flex flex-col items-center"
          >
            <span className="text-green-700 text-2xl font-bold mb-2">ℹ️</span>
            <h3 className="text-lg font-semibold text-gray-700">
              Tentang Aplikasi
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Informasi tentang fitur dan pengembang aplikasi.
            </p>
          </Link>
        </section>
      </main>
      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Carbon Tracker Indonesia
      </footer>
    </div>
  );
};

export default Beranda;
