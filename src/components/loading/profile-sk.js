import {motion} from "framer-motion"
import { AnimatedDiv, Circle } from './sks.js';

export default function ProfileSk(){
    return( 

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeIn" , duration:0.3}} className="h-[200px] w-[250px] flex relative  bg-white flex-col justify-around py-2 items-center rounded cursor-pointer" >
    <Circle w={100} h={100} />
        
       <AnimatedDiv w={87} h={20} /> 
                </motion.div>)}