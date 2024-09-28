import React from 'react';
import { AnimatedDiv, Circle } from './sks.js'; // Adjust import path based on your file structure

export default function DemandesSk() {
  return (
    <div className="w-[350px] h-[350px] bg-white rounded-[15px] relative text-[18px] shadow-inner overflow-hidden">
      <div className="h-[70%] flex flex-col justify-center items-center w-full relative  ">
      <div className='flex justify-end w-full p-2 absolute top-0'>
        <AnimatedDiv w={105} h={20} /> 
        </div>
        <Circle w={100} h={100} />
        <div className="mt-5 w-full flex justify-center items-center">
          <AnimatedDiv w={87} h={20} /> 
          <AnimatedDiv w={87} h={20} />
        </div>
      </div>

      <div className="h-[30%] flex justify-around">
        <div className="w-[45%]">
            <div className="flex mb-2">
            <AnimatedDiv w={58} h={20} /> 
            <AnimatedDiv w={87} h={20} /> 
          </div>
          <div className="flex mb-2">
            <AnimatedDiv w={58} h={20} />
            <AnimatedDiv w={87} h={20} />
          </div>
          <div className="flex mb-2">
            <AnimatedDiv w={58} h={20} />
            <AnimatedDiv w={87} h={20} />
          </div>
        </div>
        <div className="w-[45%]">
          <div className="flex mb-2">
            <AnimatedDiv w={58} h={20} />
            <AnimatedDiv w={87} h={20} />
          </div>
          <div className="flex mb-2">
            <AnimatedDiv w={58} h={20} />
            <AnimatedDiv w={87} h={20} />
          </div>
          <div className="flex mb-2">
            <AnimatedDiv w={58} h={20} />
            <AnimatedDiv w={87} h={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
