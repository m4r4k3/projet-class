import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedDiv = ({ w, h }) => {
  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 10%)",
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)",
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="bg-gray-200 rounded mx-1"
      style={{ width: `${w}px`, height: `${h}px` }} 
    ></motion.div>
  );
};

export const Circle = ({ w, h }) => (
  <div
    className="bg-gray-200 bg-center bg-contain rounded-full"
    style={{ width: `${w}px`, height: `${h}px` }} 
  ></div>
);
