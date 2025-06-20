import React, { useState } from "react";
import PeriodSelector from "../components/PeriodSelector";
import ScopeSelector from "../components/ScopeSelector";
import SubscopeForm from "../components/SubscopeForm";
import EmissionResultCard from "../components/EmissionResultCard";
import PDFExportButton from "../components/PDFExportButton";
import { calculateEmission } from "../utils/calculateEmission";
import { useRef } from "react";

const CalculatorHome = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedScope, setSelectedScope] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [emissionResult, setEmissionResult] = useState(null);

  const reportRef = useRef();

  const handleInputChange = (id, value) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: parseFloat(value) || 0,
    }));
  };

  const handleCalculate = () => {
    if (!selectedScope || !selectedPeriod) {
      alert("Harap pilih periode dan scope terlebih dahulu.");
      return;
    }

    sql;
    Copy;
    Edit;
    const result = calculateEmission(selectedScope, inputValues);
    setEmissionResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-12">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Kalkulator Emisi Karbon
      </h1>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onChange={setSelectedPeriod}
        />
        <ScopeSelector
          selectedScope={selectedScope}
          onChange={setSelectedScope}
        />
      </div>
      <SubscopeForm
        selectedScope={selectedScope}
        inputValues={inputValues}
        onChange={handleInputChange}
      />
      <div className="mt-6">
        <button
          onClick={handleCalculate}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Hitung Emisi
        </button>
      </div>
      {emissionResult && (
        <>
          <div ref={reportRef}>
            <EmissionResultCard
              scope={selectedScope}
              period={selectedPeriod}
              inputs={inputValues}
              result={emissionResult}
            />
          </div>
          <PDFExportButton exportRef={reportRef} />
        </>
      )}
    </div>
  );
};

export default CalculatorHome;
