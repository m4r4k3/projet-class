import { useState } from "react";

export default function SignIn() {
  const [isBgEntr, setBgEntr] = useState(false);

  const ClickFunc = () => setBgEntr((prev) => !prev)
  return (
    <div
      className={`bg-[url('../image/pattern.png')] w-full  flex  h-full relative overflow-hidden ${
        isBgEntr ? "justify-start" : "justify-end"
      }  `}
    >
      <div
        className={
          `left-0   bg-[${isBgEntr ? "url(https://th.bing.com/th/id/R.d45dc54e7d0e057a0766ee517b5d48cd?rik=0EkDiw1isfR34g&pid=ImgRaw&r=0)":"url(../image/signBuilding.jpeg)"}] absolute  duration-300 w-[70%] top-0 h-[calc(100%/3)]   bg-cover  ${isBgEntr?" translate-x-[43%]":""}`
        }
        style={{
        backgroundPosition: "0 0% ",
        backgroundSize: "100% 100vh",
        clipPath: isBgEntr ? "polygon(30% 0 ,100% 0% ,100% 100%,20% 100%)":"polygon(0 0, 100% 0%, 90% 100%, 0 100%)",
      }}
      >
        <div
          className="absolute w-full h-full  z-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
      </div>
      <div
        className={
          `left-0 delay-100  bg-[${isBgEntr ? "url(https://th.bing.com/th/id/R.d45dc54e7d0e057a0766ee517b5d48cd?rik=0EkDiw1isfR34g&pid=ImgRaw&r=0)":"url(../image/signBuilding.jpeg)"}] absolute  duration-300 flex items-center w-[70%] top-[33.33%] h-[calc(100%/3)]  bg-cover  ${isBgEntr?" translate-x-[43%] justify-end":""}`

        }
        style={{
        backgroundPosition: "0 50% ",
        backgroundSize: "100% 100vh",
        clipPath: isBgEntr ?  "polygon(20% 0px, 100% 0px, 100% 100%, 10% 100%)": "polygon(0% 0, 90% 0%, 80% 100%, 0 100%)",
      }}
      >
        <div
          className="absolute w-full h-full  z-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>

        <div
          className="text-white text-[40px] font-bold  left-10 mx-10"
          style={{ zIndex: "4" }}
        >
          Sign-in as  {isBgEntr?"a Job Seeker":"An Entreprise"}
        </div>
      </div>
      <div
        className={
          `left-0  delay-200  flex items-center  bg-[${isBgEntr ? "url(https://th.bing.com/th/id/R.d45dc54e7d0e057a0766ee517b5d48cd?rik=0EkDiw1isfR34g&pid=ImgRaw&r=0)":"url(../image/signBuilding.jpeg)"}] absolute  duration-300 w-[70%] top-[66.66%] h-[calc(100%/3)]  bg-cover  ${isBgEntr?" translate-x-[43%]":""}`

        }
        style={
          {
        backgroundPosition: "0 100% ",
        backgroundSize: "100% 100vh",
        clipPath: isBgEntr ?"polygon(10% 0px, 100% 0px, 100% 100%, 00% 100%)" : "polygon(0% 0, 80% 0%, 70% 100%, 0 100%)",
      }
        }
      >
        <div
          className="absolute w-full h-full  z-4 "
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>

        <div
          className={`w-[50px] h-[50px] ${
            isBgEntr ? "ml-[20%]" : "ml-[60%]"
          } bg-white rounded-full grid place-content-center  block  cursor-pointer hover:scale-110`}
          style={{ zIndex: "4" }}
          onClick={ClickFunc}
        >
          <i
            className={`fa-solid fa-chevron-${
              isBgEntr ? "right" : "left"
            } text-black  font-bold text-2xl `}
          ></i>
        </div>
      </div>

      <form className="w-[30%] flex justify-center  items-center ">
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
            <button className="text-white w-1/2 border border-[#30363D] rounded py-1 hover:bg-gray-700 duration-500">
              Sign-In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
