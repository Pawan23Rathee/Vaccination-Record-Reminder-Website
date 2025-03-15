import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font mt-5">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* About Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT US</h2>
            <p className="text-gray-400 text-sm">
              Stay on top of your vaccinations with our easy-to-use record and reminder system. Never miss an important date again!
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">QUICK LINKS</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-white" href="#">Home</a></li>
              <li><a className="text-gray-400 hover:text-white" href="#">Features</a></li>
              <li><a className="text-gray-400 hover:text-white" href="#">FAQ</a></li>
              <li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT US</h2>
            <p className="text-gray-400 text-sm">Email: support@vaccinationreminder.com</p>
            <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
            <p className="text-gray-400 text-sm">Location: New York, USA</p>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <p className="text-gray-400 text-sm mb-3">Stay updated with the latest vaccination schedules and health tips.</p>
            <div className="flex flex-wrap items-center">
              <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white outline-none" placeholder="Enter your email" />
              <button className="mt-3 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between px-5">
          <p className="text-gray-400 text-sm">© 2025 Vaccination Record & Reminder. All rights reserved.</p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
