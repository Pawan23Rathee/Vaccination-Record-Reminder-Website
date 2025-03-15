import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Appointments from "./Pages/Appointment";
import Certificate from "./Pages/Certificate";
import Profile from "./Pages/Profile";
import Navbar from "./Component/Navbar";
import FamilyMember from "./Pages/FamilyMember";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/family-members" element={<FamilyMember />} />

      </Routes>
    </Router>
  );
}

export default App;
