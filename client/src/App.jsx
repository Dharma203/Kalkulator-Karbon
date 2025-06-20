import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./index.css"; // pastikan Tailwind atau CSS utama sudah diimport

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <AppRoutes />
    </div>
  );
};

export default App;
