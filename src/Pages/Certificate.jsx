import { useState } from "react";
import { FaDownload, FaQrcode } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react"; // Fixed import
import React from "react";

const Certificate = () => {
  const [certificateData, setCertificateData] = useState({
    name: "John Doe",
    vaccine: "COVID-19 Vaccine",
    date: "2025-03-15",
    certificateID: "CERT123456789",
  });

  const downloadCertificate = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(certificateData, null, 2)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Vaccination_Certificate.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600">Vaccination Certificate</h1>
      <p className="mt-2 text-gray-700">Your official vaccination details are below.</p>

      <div className="mt-6 bg-white shadow-lg p-6 rounded-lg text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">{certificateData.name}</h2>
        <p className="text-lg text-gray-600">{certificateData.vaccine}</p>
        <p className="text-gray-500">Vaccination Date: {certificateData.date}</p>
        <p className="text-gray-500">Certificate ID: {certificateData.certificateID}</p>

        {/* QR Code Section */}
        <div className="mt-4 flex justify-center">
          <div className="p-2 bg-gray-100 rounded-lg shadow-md">
            <QRCodeCanvas value={certificateData.certificateID} size={120} />
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={downloadCertificate}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded flex items-center justify-center"
        >
          <FaDownload className="mr-2" /> Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;
