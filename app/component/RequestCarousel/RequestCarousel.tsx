"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Gps_tracker.png",
  "/Fuel_sensor.png",
  "/Rpm_sensor.png",
  "/Axel_load.png",
  "/Angel.png",
  "/Tm.png",
  "/ComingSoon.png"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg elementor-background-overlay shadow-lg" style={{backgroundSize:'auto'}}>
      {/* Image Slider */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 ">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="Carousel Image"
            className="CarouselImage absolute h-full "
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{top:'6rem',left:'6rem'}}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900/75 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900/75 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
