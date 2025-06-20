import React from "react";

const EmissionResultCard = ({ totalEmission }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Total Emisi Karbon
      </h2>
      <p className="text-4xl font-bold text-green-600">
        {totalEmission !== undefined ? totalEmission.toFixed(2) : "0.00"} kgCO₂e
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Estimasi emisi berdasarkan data yang Anda inputkan
      </p>
    </div>
  );
};

export default EmissionResultCard;
