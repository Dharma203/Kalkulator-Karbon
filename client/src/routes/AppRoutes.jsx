import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import halaman
import HomePage from "../pages/HomePage";
import CalculatorPage from "../pages/CalculatorPage";
import ResultPage from "../pages/ResultPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalkulator" element={<CalculatorPage />} />
        <Route path="/hasil" element={<ResultPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
