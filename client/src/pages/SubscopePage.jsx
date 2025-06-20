import React, { useEffect, useState } from "react";

function SubscopePage() {
  const [period, setPeriod] = useState({});

  useEffect(() => {
    const savedPeriod = localStorage.getItem("period");
    if (savedPeriod) {
      setPeriod(JSON.parse(savedPeriod));
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Subscope Aktif</h2>
      <p className="text-sm text-gray-600 mb-4">
        Periode: {period.startDate} s.d. {period.endDate}
      </p>
      {/* Dropdown aktivitas dan input nilai menyusul di sini */}
    </div>
  );
}

export default SubscopePage;
