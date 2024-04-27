import { useState } from "react";

export default function SignIn() {
  const [bgstyle, setbgStyle] = useState({
    0: {
      class: "",
      style: {
        backgroundPosition: "0 0% ",
        backgroundSize: "100% 100vh",
        clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0 100%)",
      },
    },
    1: {
      class: "",
      style: {
        backgroundPosition: "0 50% ",
        backgroundSize: "100% 100vh",
        clipPath: "polygon(0% 0, 90% 0%, 80% 100%, 0 100%)",
      },
    },
    2: {
      class: "",
      style: {
        backgroundPosition: "0 100% ",
        backgroundSize: "100% 100vh",
        clipPath: "polygon(0% 0, 80% 0%, 70% 100%, 0 100%)",
      },
    },
  });
  const ClickFunc = () => {
    setbgStyle((prev) => ({ ...prev, 0: { class: " translate-x-[50%]" , style:(prev[0]["style"])} }));
    setTimeout(() => {
      setbgStyle((prev) => ({ ...prev, 1: { class: " translate-x-[50%]" , style:(prev[1]["style"])} }));
    }, 200);
    setTimeout(() => {
      setbgStyle((prev) => ({ ...prev, 2: { class: " translate-x-[50%]" , style:(prev[2]["style"])} }));
    }, 400);
  };
  return (
    <div className="bg-[url('../image/pattern.png')] w-full  flex h-full relative">
      <div
        className={
          "bg-[url(https://th.bing.com/th/id/R.51bb29ea74172e785a1bb0d0304ad8b6?rik=hiQvhS3LVRyyPQ&pid=ImgRaw&r=0)] absolute  duration-300 w-[70%] top-0 h-[calc(100%/3)]   bg-cover  " +
          bgstyle["0"]["class"]
        }
        style={bgstyle["0"]["style"]}
      >
        <div
          className="absolute w-full h-full  z-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
      </div>
      <div
        className={
          "bg-[url(https://th.bing.com/th/id/R.51bb29ea74172e785a1bb0d0304ad8b6?rik=hiQvhS3LVRyyPQ&pid=ImgRaw&r=0)] absolute  duration-300 flex items-center w-[70%] top-[33.33%] h-[calc(100%/3)]  bg-cover " +
          bgstyle[1]["class"]
        }
        style={bgstyle[1]["style"]}
      >
        <div
          className="absolute w-full h-full  z-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>

        <div className="text-white text-[40px] font-bold absolute left-10 z-4">
          Sign-in as an entreprise
        </div>
      </div>
      <div
        className={
          " flex items-center  bg-[url(https://th.bing.com/th/id/R.51bb29ea74172e785a1bb0d0304ad8b6?rik=hiQvhS3LVRyyPQ&pid=ImgRaw&r=0)] absolute  duration-300 w-[70%] top-[66.66%] h-[calc(100%/3)]  bg-cover  " +
          bgstyle[2]["class"]
        }
      style={bgstyle[2]["style"]}
      >
        <div
          className="absolute w-full h-full  z-4 "
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>

        <div
          className=" w-[50px] h-[50px] ml-[60%] bg-white rounded-full grid place-content-center  block  cursor-pointer hover:scale-110"
          style={{ zIndex: "4" }}
          onClick={ClickFunc}
        >
          <i className="fa-solid fa-chevron-left text-black  font-bold text-2xl "></i>
        </div>
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
