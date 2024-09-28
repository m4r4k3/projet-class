import img from "../image/not found.png"
import { Link } from "react-router-dom";

export default function NotFound(){
  return (<>
      <div className="bg-[url('../image/pattern.png')]  w-full flex flex-col justify-center items-center min-h-full">
        <div className=" flex w-full flex-col items-center text-blue-500 max-w-[300px] w-[80%]">
        <img src={img} draggable="false" className="w-full rounded border  max-h-[300px]  bg-[#111216] border-[#30363D] "/>
            <div className="w-full flex justify-end  ">

            <Link className="flex items-center mt-3" to={"/"}>
                <i className="fa-solid fa-chevron-left mr-2"></i>
                <div>Go Back</div>
                </Link>
            </div>
        </div>
</div>
  </>) 
}