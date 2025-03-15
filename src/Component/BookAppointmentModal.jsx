import React, { useState, useEffect } from "react";

const BookAppointmentModal = ({ onClose }) => {
  const [vaccineName, setVaccineName] = useState("");
  const [date, setDate] = useState("");
  const [userName, setUserName] = useState("");
  const [vaccines, setVaccines] = useState([]);

  // Fetch vaccine data from API
  useEffect(() => {
    const dummyVaccines = [
      { id: 1, name: "COVID-19 Vaccine" },
      { id: 2, name: "Flu Shot" }
    ];
    setVaccines(dummyVaccines);
  }, []);
  
  const handleBookAppointment = () => {
    if (!userName || !vaccineName || !date) {
      alert("Please enter your name, select a vaccine, and choose a date.");
      return;
    }

    const newAppointment = { userName, vaccineName, date };
    onClose(newAppointment);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-lg">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h3 className="text-xl font-bold mb-4">Book an Appointment</h3>

        {/* Name Input */}
        <label className="block text-gray-700 font-semibold mb-2">Enter Your Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter your name"
        />

        {/* Vaccine Dropdown */}
        <label className="block text-gray-700 font-semibold mb-2">Select Vaccine:</label>
        <select
          value={vaccineName}
          onChange={(e) => setVaccineName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="">Select a vaccine</option>
          {vaccines.map((vaccine) => (
            <option key={vaccine.id} value={vaccine.name}>
              {vaccine.name}
            </option>
          ))}
        </select>

        {/* Date Picker */}
        <label className="block text-gray-700 font-semibold mb-2">Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBookAppointment}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm
          </button>
          <button
            onClick={() => onClose(null)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
