import React from "react";

const subscopeData = {
  scope1: [
    { id: "bahan_bakar", label: "Konsumsi Bahan Bakar (liter)" },
    { id: "kendaraan", label: "Penggunaan Kendaraan Operasional (km)" },
  ],
  scope2: [
    { id: "listrik", label: "Konsumsi Listrik (kWh)" },
    { id: "pendingin", label: "Penggunaan Sistem Pendingin (kWh atau unit)" },
  ],
  scope3: [
    { id: "logistik", label: "Transportasi Pihak Ketiga (km atau kgCO2e)" },
    { id: "akomodasi", label: "Emisi dari Akomodasi & Perjalanan Dinas" },
    { id: "pengadaan", label: "Emisi dari Rantai Pasok / Vendor" },
  ],
};

const SubscopeForm = ({ selectedScope, inputValues = {}, onChange }) => {
  const subscopeList = subscopeData[selectedScope] || [];

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-lg font-semibold text-gray-800">
        Isi Data Sub-scope
      </h3>

      {subscopeList.length === 0 ? (
        <p className="text-sm text-gray-500">
          Tidak ada data sub-scope untuk scope ini.
        </p>
      ) : (
        subscopeList.map((sub) => (
          <div key={sub.id} className="flex flex-col">
            <label
              htmlFor={sub.id}
              className="text-sm font-medium text-gray-700 mb-1"
            >
              {sub.label}
            </label>
            <input
              type="number"
              id={sub.id}
              name={sub.id}
              value={inputValues[sub.id] || ""}
              onChange={(e) => onChange(sub.id, e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="0"
              min="0"
              step="any"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default SubscopeForm;
