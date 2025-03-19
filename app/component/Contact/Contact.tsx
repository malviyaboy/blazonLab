import React from 'react';
import MapComponent from '../MapComponent';

const MapSection: React.FC = () => {
  return (
    <div className="relative">
        <MapComponent/>
      {/* Information Section */}
      <div className="bg-white py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Address */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-center">
            D-6/302, near SBBJ Bank, Akruti Apartments <br /> , Chitrakoot, Vaishali Nagar, <br /> Jaipur, Rajasthan 302021
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="text-center">+91-7727080606</p>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-center">Monday-Friday: 10am to 7pm</p>
          </div>
        </div>
      </div>
      <section className='elementor'></section>
    </div>
  );
};

export default MapSection;