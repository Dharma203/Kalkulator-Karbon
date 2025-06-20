import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-2xl font-bold text-green-700">Carbon Tracker</h1>
        <nav className="space-x-4">
          <Link to="/emissions" className="text-green-700 hover:underline">
            Dashboard
          </Link>
          <Link to="/about" className="text-green-700 hover:underline">
            Tentang
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Pantau Emisi Karbon Perusahaan Anda
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-8">
          Aplikasi ini membantu Anda menghitung, memantau, dan mengelola jejak
          karbon dari aktivitas operasional organisasi Anda.
        </p>
        <Link
          to="/emissions"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Mulai Sekarang
        </Link>
      </main>
      <footer className="bg-white text-center py-4 text-sm text-gray-500 shadow-inner">
        © {new Date().getFullYear()} Carbon Tracker. Dibuat untuk pelaporan
        emisi.
      </footer>
    </div>
  );
};

export default LandingPage;
