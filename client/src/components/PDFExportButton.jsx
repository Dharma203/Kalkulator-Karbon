import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

const PDFExportButton = ({ exportRef, fileName = "laporan-emisi.pdf" }) => {
  const handleDownloadPDF = async () => {
    if (!exportRef.current) return;

    const element = exportRef.current;
    const canvas = await html2canvas(element, {
      scale: 2, // meningkatkan kualitas
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(fileName);
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
    >
      <Download className="w-4 h-4" />
      Unduh PDF
    </button>
  );
};

export default PDFExportButton;
