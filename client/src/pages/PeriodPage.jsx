import React, { useEffect, useState } from "react";
import axios from "axios";

const PeriodPage = () => {
  const [period, setPeriod] = useState("monthly");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/period/${period}`);
      setData(res.data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [period]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Rekap Emisi per Periode
      </h1>

      <div className="mb-4">
        <label className="mr-2 font-medium text-gray-700">Pilih Periode:</label>
        <select
          className="border px-3 py-1 rounded-md"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="daily">Harian</option>
          <option value="monthly">Bulanan</option>
          <option value="yearly">Tahunan</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow border">
        <table className="min-w-full table-auto">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="text-left p-3 border-b">Periode</th>
              <th className="text-left p-3 border-b">Total Emisi (kg CO₂e)</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="2" className="p-4 text-gray-500 text-center">
                  Tidak ada data.
                </td>
              </tr>
            ) : (
              data.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{item.period}</td>
                  <td className="p-3 border-b">
                    {item.totalEmission.toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeriodPage;
