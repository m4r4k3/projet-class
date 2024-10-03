import React from "react";
import { AnimatedDiv, Circle } from "./sks.js"; // Adjust import path based on your file structure
import { motion } from "framer-motion";

export default function DemandesSk() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.3 }}
      className="w-[300px] h-[300px] bg-white rounded-[15px] relative text-[18px] shadow-inner overflow-hidden relative"
    >
      <div className="absolute top-1 right-3 text-[#888888] text-[14px] z-[1]">
        <AnimatedDiv w={105} h={20} />
      </div>
      <div className="h-[30%]  py-3 px-5">        <Circle w={60} h={60} />
        <div className=" mt-2   flex font-bold text-blue-500">
          <AnimatedDiv w={50} h={20} />
          <AnimatedDiv w={50  } h={20} />
        </div>
      </div>

      <div className="h-[70%] flex-col pl-5 flex gap-2 mt-6 ">
        <div className="flex">
          <AnimatedDiv w={58} h={20} />
          <AnimatedDiv w={150} h={20} />
        </div>
        <div className="flex ">
          <AnimatedDiv w={80} h={20} />
          <AnimatedDiv w={87} h={20} />
        </div>
        <div className="flex">
          <AnimatedDiv w={50} h={20} />
          <AnimatedDiv w={70} h={20} />
        </div>
        <div className="flex ">
          <AnimatedDiv w={60} h={20} />
          <AnimatedDiv w={100} h={20} />
        </div>
        <div className="flex ">
          <AnimatedDiv w={45} h={20} />
          <AnimatedDiv w={87} h={20} />
        </div>
        <div className="flex ">
          <AnimatedDiv w={40} h={20} />
          <AnimatedDiv w={70} h={20} />
        </div>
      </div>
    </motion.div>
  );
}
