import React from "react";

const PeriodSelector = ({ selectedPeriod, onSelectPeriod }) => {
  const periods = [
    {
      id: "daily",
      label: "Harian",
      description: "Lihat emisi karbon berdasarkan aktivitas harian.",
    },
    {
      id: "monthly",
      label: "Bulanan",
      description: "Analisis emisi dalam rentang waktu per bulan.",
    },
    {
      id: "yearly",
      label: "Tahunan",
      description: "Laporan emisi tahunan untuk pemantauan jangka panjang.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-semibold">Pilih Periode Waktu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => onSelectPeriod(period.id)}
            className={`rounded-2xl border px-4 py-6 shadow-md transition hover:shadow-lg text-left ${
              selectedPeriod === period.id
                ? "bg-green-100 border-green-500"
                : "bg-white border-gray-300"
            }`}
          >
            <h3 className="text-lg font-medium">{period.label}</h3>
            <p className="text-sm text-gray-600 mt-1">{period.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeriodSelector;
