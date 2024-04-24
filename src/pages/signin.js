import { useState } from "react";

export default function SignIn() {
  const [bgstyle , setbgStyle] = useState() ;
  return (
    <div className="bg-[url('../image/pattern.png')] w-full pt-[70px] flex min-h-full">
      <div
        className="w-[70%] relative bg-black"
        style={{ clipPath: "polygon(0% 0%, 100% 00%, 80% 100%,0% 100%)" }}
      >
        <div className="absolute w-full h-full flex justify-center pl-5 flex-col z-5" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
          <div className="text-white text-[40px] font-bold ">
            Sign-in as an entreprise
          </div>
          <div className="absolute bottom-5 right-[25%] w-[50px] h-[50px] bg-white rounded-full grid place-content-center cursor-pointer z-4" onClick={()=>setbgStyle}>
            <i className="fa-solid fa-chevron-left text-black  font-bold text-2xl"></i>
          </div>
        </div>
        <div
          className="bg-[url(../image/city.jpg)] w-full h-[calc(100%/3)]   bg-cover  "
          style={{ backgroundPosition: "0 0 " }}
        ></div>
        <div
          className="bg-[url(../image/city.jpg)] w-full h-[calc(100%/3)]  bg-cover "
          style={{ backgroundPosition: "0 55% " }}
        ></div>
        <div
          className="bg-[url(../image/city.jpg)] w-full h-[calc(100%/3)]  bg-cover  "
          style={{ backgroundPosition: "0 100% " }}
        ></div>
      </div>
      <form className="w-[30%] flex justify-center  items-center">
        <div className="flex flex-col border h-[330px] bg-[#0D1117] border border-[#30363D] rounded-[10px] w-[80%]">
          <div className="text-2xl text-gray-500 font-bold text-center w-full my-8">
            Sign-in
          </div>
          <div className="w-full flex justify-between px-5 my-4">
            <label className="text-white ">Email :</label>
            <input
              type="text"
              className="rounded pl-2 outline-0 shadow-black focus:shadow-inner"
            />
          </div>
          <div className="w-full flex justify-between px-5 my-4">
            <label className="text-white ">Password :</label>
            <input
              type="password"
              className="rounded pl-2 outline-0 shadow-black focus:shadow-inner"
            />
          </div>

          <div className="w-full flex justify-center items-center my-8 ">
            <button className="text-white w-1/2 border border-[#30363D] rounded py-1">
              Sign-In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
