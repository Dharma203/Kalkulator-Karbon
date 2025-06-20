import React, { useRef } from "react";
import EmissionResultCard from "../components/EmissionResultCard";
import PDFExportButton from "../components/PDFExportButton";

const ResultPage = ({ totalEmission }) => {
  const reportRef = useRef();

  return (
    <div className="p-4 flex flex-col items-center gap-6">
      {/* Bagian yang akan diekspor ke PDF */}
      <div ref={reportRef} className="w-full max-w-xl">
        <EmissionResultCard totalEmission={totalEmission} />
        {/* Komponen lain seperti chart atau data ringkasan dapat ditambahkan di sini */}
      </div>

      {/* Tombol untuk unduh PDF */}
      <PDFExportButton exportRef={reportRef} />
    </div>
  );
};

export default ResultPage;
