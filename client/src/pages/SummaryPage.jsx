import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#34D399", "#10B981", "#6EE7B7", "#059669", "#047857"];

const SummaryPage = () => {
  const [summary, setSummary] = useState([]);
  const [period, setPeriod] = useState("monthly");

  const fetchSummary = async () => {
    try {
      const res = await axios.get(`/api/emissions/summary?period=${period}`);
      setSummary(res.data);
    } catch (err) {
      console.error("Gagal mengambil data ringkasan:", err);
      setSummary([]);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, [period]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Ringkasan Emisi Karbon
      </h1>

      <div className="mb-4">
        <label htmlFor="period" className="text-sm font-medium mr-2">
          Periode:
        </label>
        <select
          id="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="daily">Harian</option>
          <option value="monthly">Bulanan</option>
          <option value="yearly">Tahunan</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tabel Ringkasan */}
        <div className="bg-white rounded-md shadow border p-4">
          <h2 className="text-lg font-semibold text-green-700 mb-2">
            Tabel Ringkasan
          </h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="text-left p-2 border-b">Periode</th>
                <th className="text-left p-2 border-b">
                  Total Emisi (kg CO₂e)
                </th>
              </tr>
            </thead>
            <tbody>
              {summary.length === 0 ? (
                <tr>
                  <td colSpan="2" className="p-4 text-center text-gray-500">
                    Tidak ada data.
                  </td>
                </tr>
              ) : (
                summary.map((item) => (
                  <tr key={item.period} className="hover:bg-gray-50">
                    <td className="p-2 border-b">{item.period}</td>
                    <td className="p-2 border-b">
                      {item.totalEmission.toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Diagram Pie */}
        <div className="bg-white rounded-md shadow border p-4">
          <h2 className="text-lg font-semibold text-green-700 mb-2">
            Diagram Pie
          </h2>
          {summary.length === 0 ? (
            <div className="text-gray-500 text-center mt-12">
              Tidak ada data untuk ditampilkan.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={summary}
                  dataKey="totalEmission"
                  nameKey="period"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {summary.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
