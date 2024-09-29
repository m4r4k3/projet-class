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
    className=" bg-center bg-contain rounded-full"
    style={{ width: `${w}px`, height: `${h}px` }} 
  ></div>
);

export const AnimatedDivDark = ({ w, h , c="%"}) => {
  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(90deg,rgb(40, 40, 40 , .2)   0%, #252525 30%)",
          "linear-gradient(90deg,rgb(40, 40, 40 ,.2) 0%, #252525  100%)",
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="rounded mx-1"
      style={{ width: `${w}${c}`, height: `${h}px` }} 
    ></motion.div>
  );
};
