import React, { useState } from "react";
import BookAppointmentModal from "../Component/BookAppointmentModal";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingOpen(true);
  };

  const closeBookingModal = (newAppointment) => {
    setIsBookingOpen(false);
    if (newAppointment) {
      setAppointments([...appointments, newAppointment]);
    }
  };

  return (
    <div className="p-8 mt-16 max-w-4xl mx-auto text-center">
      {/* Top Banner */}
      <div className="bg-blue-200 text-blue-800 p-4 rounded-md shadow-md mb-6 mt-10">
        <h2 className="text-xl font-semibold">Stay Safe, Get Vaccinated!</h2>
      </div>
      
      <h2 className="text-4xl font-bold mb-8 text-blue-700">Book an Appointment</h2>

      {/* Book Appointment Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={openBookingModal}
          className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Book Appointment
        </button>
      </div>

      {/* List of Appointments */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your Appointments</h3>
        {appointments.length > 0 ? (
          <ul className="divide-y divide-gray-300">
            {appointments.map((appointment, index) => (
              <li key={index} className="py-3">
                <span className="text-gray-700">
                  <strong className="text-blue-600">Vaccine:</strong> {appointment.vaccineName} -
                  <strong className="text-blue-600"> Date:</strong> {appointment.date}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No appointments booked yet.</p>
        )}
      </div>

      {/* Book Appointment Modal */}
      {isBookingOpen && <BookAppointmentModal onClose={closeBookingModal} />}

      {/* Vaccine Awareness Banner */}
      <div className="mt-10 bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md text-center border border-blue-300">
        <h3 className="text-2xl font-semibold mb-2">Stay Protected, Stay Healthy!</h3>
        <p className="text-lg">Vaccination is a crucial step towards a healthier future. Book your appointment today and safeguard yourself and your loved ones.</p>
      </div>
    </div>
  );
};

export default Appointments;
