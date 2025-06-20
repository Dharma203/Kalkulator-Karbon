import React from "react";

const ScopeSelector = ({ selectedScope, onSelectScope }) => {
  const scopes = [
    {
      id: "scope1",
      label: "Scope 1",
      description:
        "Emisi langsung dari aktivitas milik atau dikendalikan perusahaan.",
    },
    {
      id: "scope2",
      label: "Scope 2",
      description:
        "Emisi tidak langsung dari pembelian listrik, uap, panas, atau pendinginan.",
    },
    {
      id: "scope3",
      label: "Scope 3",
      description:
        "Emisi tidak langsung lainnya dari rantai nilai perusahaan (hulu dan hilir).",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-semibold text-gray-800">Pilih Scope Emisi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {scopes.map((scope) => (
          <button
            key={scope.id}
            onClick={() => onSelectScope(scope.id)}
            className={`rounded-2xl border px-4 py-6 shadow-md transition hover:shadow-lg text-left ${
              selectedScope === scope.id
                ? "bg-green-100 border-green-500"
                : "bg-white border-gray-300"
            }`}
          >
            <h3 className="text-lg font-medium text-gray-800">{scope.label}</h3>
            <p className="text-sm text-gray-600 mt-1">{scope.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScopeSelector;
