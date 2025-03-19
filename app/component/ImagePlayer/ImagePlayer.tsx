"use client";
import { useState, useEffect } from "react";
import { motion ,AnimatePresence} from "framer-motion";

const images = [
    "/head-jcb.jpeg",
    "/head-jcb-rpm.jpeg",
    "/head-jcb-fm.jpeg",
    "/head-jcb-tm.jpeg",
  ];

const ImagePlayer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-30 md:h-60 lg:h-110 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Sliding Image"
          className="absolute w-full h-full object-cover"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        
      </div>
    </div>
  );
};

export default ImagePlayer;


