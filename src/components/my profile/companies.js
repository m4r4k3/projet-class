import { useState } from "react";
import { Axios } from "../../axios";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

export default function Companies({ id, name , starting , ending , description , post }) {
  const x = useMotionValue(0);
  const bgChange = useTransform(x, [0, -20], [0, 1]);
  const [hidden , setHidden] = useState()
  const deleteExp = async(e)=>{
    
    setHidden(true)
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.delete(`/api/experience/${id}`).then(res=>res).catch((error)=>console.log(error))

}
  return (
    <motion.div
    exit={{transformX:-200}}
    drag="x"
    dragElastic={0.1}
    dragConstraints={{
      right: 10,
      left: 0,
    }}
    style={{ x  }}
    transition={{ duration: 0.5 }}
 
    onDragEnd={()=> x.current > 60 && deleteExp()}

    className={` my-5 flex  w-full relative ${hidden && "hidden"}`}
  >
          <div className=" flex items-center left-[-75px] absolute h-full w-[50px] bg-red-500 px-2">
        <button
          className="button bg-red-500  border-[#30363D] "
          style={{ background: bgChange }}
        >
          <i
            class="fa-solid fa-trash text-white"
          ></i>
        </button>
      </div>
        <div className="w-full ">
          <div className="flex justify-between sm:pr-8 text-white">
            <label className="font-semibold text-lg "> {name}</label>
            <div>{post}</div>
          </div>
          <div className="flex w-[200px] justify-between">
            <div className="text-gray-400 text-sm">{starting} - {ending}</div>
          </div>
          <div>
            <div className="font-semibold text-[15px] text-gray-400">Description :</div>
            <span className="text-[14px] text-white">
          {description}
            </span>
          </div>
        </div>
    </motion.div>
  );
}


