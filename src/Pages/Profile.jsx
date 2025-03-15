import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });

  const handleLogin = () => {
    if (formData.email && formData.password) {
      setUser({ name: "John Doe", email: formData.email, phone: "123-456-7890", password: formData.password });
      setIsLoggedIn(true);
    } else {
      alert("Please enter email and password");
    }
  };

  const handleSignup = () => {
    if (formData.name && formData.email && formData.phone && formData.password) {
      setUser({ name: formData.name, email: formData.email, phone: formData.phone, password: formData.password });
      setIsLoggedIn(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleLogout = () => {
    setUser({ name: "", email: "", phone: "", password: "" });
    setIsLoggedIn(false);
    setFormData({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Profile</h2>

        {isLoggedIn ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Welcome, {user.name}!</h3>
            <p className="text-gray-600 mt-2"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            <button onClick={handleLogout} className="mt-6 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Sign Out</button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-center mb-4">{isSignup ? "Sign Up" : "Login"}</h3>

            {isSignup && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
            </div>

            {isSignup && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold">Phone</label>
                <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password</label>
              <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
            </div>

            <button onClick={isSignup ? handleSignup : handleLogin} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              {isSignup ? "Sign Up" : "Login"}
            </button>

            <div className="flex justify-center mt-4 space-x-4">
              <button className="flex items-center justify-center w-full bg-gray-100 border rounded-lg px-4 py-2 hover:bg-gray-200 transition">
                <FcGoogle className="text-2xl mr-2" /> Sign in with Google
              </button>
              <button className="flex items-center justify-center w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition">
                <FaFacebook className="text-2xl mr-2" /> Sign in with Facebook
              </button>
            </div>

            <p className="text-center mt-4">
              {isSignup ? "Already have an account?" : "Don't have an account?"} 
              <button onClick={() => setIsSignup(!isSignup)} className="text-blue-500 underline ml-1">{isSignup ? "Login" : "Sign Up"}</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
