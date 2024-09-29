import { useState } from "react";
import { Axios } from "../../axios";
import {  motion, useMotionValue, useTransform } from "framer-motion";

export default function Education({
  id,
  school,
  certificate,
  end,
  start,
  description,

}) {
  const x = useMotionValue(0);
  const bgChange = useTransform(x, [0, -100], [1, 0]);
  const [hidden , setHidden] = useState()


  const deleteExp = async () => {

    setHidden(true)
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.delete(`/api/education/${id}`)
      .then((res) => res)
      .catch((error) => console.log(error));

  };

  return (
    <motion.div
    
      drag="x"
      dragElastic={0.1}
      dragConstraints={{
        right: 10,
        left: 0,
      }}
      style={{ x }}
      
      transition={{ duration: 0.5 }}
      onDragEnd={()=> x.current > 60 && deleteExp()}
      className={` my-5 flex  w-full relative ${hidden && "hidden"}`}
    >
      <div className=" flex items-center left-[-80px] absolute h-full w-[50px] bg-red-500 px-2">
        <button
          className="button bg-red-500  border-[#30363D] "
          style={{ background: bgChange }}
        >
          <i
            class="fa-solid fa-trash text-white"
            onClick={deleteExp}
          ></i>
        </button>
      </div>
      <div className="w-full px-[5%] ">
        <div className="flex justify-between sm:pr-5 text-white">
          <label className="font-semibold text-lg ">{school}</label>
          <div>{certificate}</div>
        </div>
        <div className="flex w-[200px] justify-between">
          <div className="text-gray-400 text-sm">
            {start} - {end}
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm text-gray-400">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
