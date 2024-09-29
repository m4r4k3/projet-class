import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedDiv, Circle } from './sks.js'; 

export default function OffresSk() {
  return (
    <motion.div
   initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeIn" , duration:0.3}}
      className="bg-white w-[350px] h-[350px] rounded-[15px] relative pt-[45px] shadow-inner"
    >
      <div className="absolute top-2 right-3 text-[#888888]">
        <AnimatedDiv w={60} h={20} />
      </div>
      <div className="w-full flex flex-col justify-around px-2 h-[75%]">
        {[50, 60, 33, 25, 50, 25].map((width, index) => (
          <div key={index} className="flex">
            <label className="labels px-1">
              <AnimatedDiv w={80} h={20} />
            </label>
            <AnimatedDiv w={width * 2} h={20} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end pr-[20px] mt-[20px]">
        <AnimatedDiv w={120} h={25} />
      </div>
    </motion.div>
  );
}