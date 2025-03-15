import React, { useState, useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";
import getVaccinations from "../api";

import { toast } from "react-toastify";
import { motion } from "framer-motion";
import BookAppointmentModal from "../Component/BookAppointmentModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Component/Footer";
import { Pie } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const images = [
  "/images/Slider1.png",
  "/images/Slider2.jpg",
  "/images/Slider3.jpg",
];

const Dashboard = () => {
  const [upcomingVaccinations, setUpcomingVaccinations] = useState([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const completedVaccinations = 15;
  const pendingVaccinations = 3;

  useEffect(() => {
    getVaccinations().then((data) => setUpcomingVaccinations(data));
  }, []);
  
  const fetchUpcomingVaccinations = async () => {
    try {
        const data = await getVaccinations();
        console.log("Vaccination Data:", data);
    } catch (error) {
        console.error("Error fetching vaccinations:", error);
    }
};


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const pieData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedVaccinations, pendingVaccinations],
        backgroundColor: ["#4CAF50", "#FFC107"],
      },
    ],
  };

  return (
    <div className="p-0 mt-16">
      {/* Image Slider */}
      <div className="w-full">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Banner */}
      <div className="bg-white text-black text-center py-6 rounded-lg 4  mb-6">
        <h1 className="text-4xl font-bold">Your Health, Our Priority</h1>
        <p className="text-lg mt-2">Track and manage your vaccinations with ease</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          Learn More
        </button>
      </div>

     

      {/* Upcoming Vaccinations */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Upcoming Vaccinations</h3>
        <div className="bg-white shadow-md rounded-lg p-4">
          {upcomingVaccinations.length > 0 ? (
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {upcomingVaccinations.map((vaccination, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 border-b flex justify-between items-center"
                >
                  <span>{vaccination.vaccineName} - {vaccination.date}</span>
                  <FaTimesCircle className="text-red-500 cursor-pointer hover:text-red-700" />
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <p className="text-gray-500">No upcoming vaccinations.</p>
          )}
        </div>
      </div>

      
      {/* Book Appointment Button */}
      <div className="mt-6 flex justify-center">
      <NavLink to="/appointments" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 flex justify-center">
  Book Appointment
</NavLink>

      </div>

        {/* Health Tips Section (Updated) */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg my-6 text-white text-center">
        <h3 className="text-2xl font-bold">🌟 Latest Health Tips 🌟</h3>
        <ul className="mt-4 space-y-3">
          <li className="text-lg">✅ Stay hydrated after vaccination 💧</li>
          <li className="text-lg">✅ Don't skip booster doses 🩹</li>
          <li className="text-lg">✅ Maintain a vaccination record 📋</li>
        </ul>
      </div>



      {isBookingOpen && (
        <BookAppointmentModal 
          onClose={() => setIsBookingOpen(false)}
          refreshAppointments={fetchUpcomingVaccinations} 
        />
      )}
       {/* Key Health Stats */}
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold">Total Vaccinations</h3>
          <p className="text-2xl">{completedVaccinations + pendingVaccinations}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold">Pending Vaccinations</h3>
          <p className="text-2xl">{pendingVaccinations}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold">Next Due</h3>
          <p className="text-2xl">March 10, 2025</p>
        </div>
      </div>

       {/* Vaccination Progress Chart */}
       <div className="flex justify-center mb-6">
        <div className="w-100 h-100">
          <Pie data={pieData} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
