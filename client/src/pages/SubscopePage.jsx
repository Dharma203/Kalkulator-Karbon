import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscopePage = () => {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/emissions");
      setRecords(res.data);
    } catch (err) {
      console.error("Gagal mengambil data emisi:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Rekap Input Sub-scope Emisi
      </h1>
      <div className="overflow-x-auto bg-white rounded-md shadow border">
        <table className="min-w-full table-auto">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="text-left p-3 border-b">Tanggal</th>
              <th className="text-left p-3 border-b">Scope</th>
              <th className="text-left p-3 border-b">Sub-scope</th>
              <th className="text-left p-3 border-b">Nilai Input</th>
              <th className="text-left p-3 border-b">Emisi (kg CO₂e)</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Tidak ada data emisi.
                </td>
              </tr>
            ) : (
              records.map((record) =>
                Object.entries(record.inputs).map(([subscope, value], idx) => (
                  <tr
                    key={`${record._id}-${subscope}`}
                    className="hover:bg-gray-50"
                  >
                    {idx === 0 && (
                      <>
                        <td
                          className="p-3 border-b"
                          rowSpan={Object.keys(record.inputs).length}
                        >
                          {new Date(record.date).toLocaleDateString()}
                        </td>
                        <td
                          className="p-3 border-b"
                          rowSpan={Object.keys(record.inputs).length}
                        >
                          {record.scope}
                        </td>
                      </>
                    )}
                    <td className="p-3 border-b">{subscope}</td>
                    <td className="p-3 border-b">{value}</td>
                    <td className="p-3 border-b">
                      {(value * (record.factors?.[subscope] || 0)).toFixed(2)}
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscopePage;
