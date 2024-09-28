import { Link } from "react-router-dom";
import {motion } from "framer-motion" ;

export default function Main() {
  return (
    <div className="h-full flex w-full justify-center md:justify-start items-center relative md:pl-[13%]">
      <div className="bg-black left-0 w-full h-full absolute opacity-30"></div>
      <div className="text-white flex flex-col items-center md:items-start" style={{ zIndex: 2 }}>
        <motion.p
       initial={{x:100,opacity:0}} 
       animate={{x:0,opacity:1}}
       transition={{duration:0.5}}
        className="text-[35px] sm:w-[500px]  w-full mb-[15%] logo-font font-bold sm:text-start text-center ">
          Discover elite opportunities tailored for you .
        </motion.p>
        <Link to={"offres"}>
            <motion.button 
           initial={{opacity:0 , translateX:-10}} 
           animate={{opacity:1 , translateX:0}}
           transition={{duration:0.5 , ease:"linear"}}
            className="w-[300px]  h-[50px] border-white main-button text-center tracking-wide md:ml-[10%] hover:scale-[1.05] duration-500">
            Embrace the elite
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
