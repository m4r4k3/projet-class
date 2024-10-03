import { useState } from "react";
import SignUp from "../components/sign in/sign-up";
import "../style/sign-in.css";
import { Axios } from "../axios";
import { useNavigate } from "react-router";
import LoadingScreen from "../loading";
import { actions } from "../store";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [isSignup, setSignup] = useState(false);
  
  const [form, setForm] = useState({ type:2  , email:"", password:""});
  const setFormFunc = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
      const signInFunc = async () => {
        setIsLoading(true);
        await Axios.get("/sanctum/csrf-cookie");
        await Axios.post("/api/login", form)
          .then((res) => res.data)
          .then((data) => {
            dispatch(actions.login({ id: data.id, type: data.type }));
            navigate("/");
          })
          .catch((error) => {
            setIsLoading(false);
            setError("Email or Password not correct.");
          });
      };
  const ClickFunc = () => {
     setForm((prev) => {
      return ({
      ...prev,
      type: prev.type == 2 ? 1 : 2,
    })});
  };

  return (
    <>
      {isloading && <LoadingScreen />}
      <div
        className={`bg-[url('../image/pattern.png')] w-full  flex  h-full relative overflow-hidden ${
           form.type ==1 ? "justify-start" : "justify-end"
        }  `}
      >
        {isSignup && <SignUp setSignup={setSignup} />}
        <div
          className={`left-0 hidden lg:flex   bg-[url(${
            form.type ==1 
              ? "https://th.bing.com/th/id/R.d45dc54e7d0e057a0766ee517b5d48cd?rik=0EkDiw1isfR34g&pid=ImgRaw&r=0"
              : "../image/signBuilding.jpeg"
          })] absolute  duration-300 w-[70%] top-0 h-[calc(100%/3)]   bg-cover  ${
             form.type ==1 ? " translate-x-[43%]" : ""
          }`}
          style={{
            backgroundPosition: "0 0% ",
            backgroundSize: "100% 100vh",
            clipPath: form.type ==1 
              ? "polygon(30% 0 ,100% 0% ,100% 100%,20% 100%)"
              : "polygon(0 0, 100% 0%, 90% 100%, 0 100%)",
          }}
        >
          <div
            className="absolute w-full h-full  z-3"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          ></div>
        </div>
        <div
          className={`left-0 delay-100 hidden lg:flex  ${
            form.type ==1 
              ? "bg-[url(https://th.bing.com/th/id/R.d45dc54e7d0e057a0766ee517b5d48cd?rik=0EkDiw1isfR34g&pid=ImgRaw&r=0)]"
              : "bg-[url(../image/signBuilding.jpeg)]"
          } absolute  duration-300 flex items-center w-[70%] top-[33.2%] h-[calc(100%/3)]  bg-cover  ${
             form.type ==1 ? " translate-x-[43%] justify-end" : ""
          }`}
          style={{
            backgroundPosition: "0 50% ",
            backgroundSize: "100% 100vh",
            clipPath: form.type ==1 
              ? "polygon(20% 0px, 100% 0px, 100% 100%, 10% 100%)"
              : "polygon(0% 0, 90% 0%, 80% 100%, 0 100%)",
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
            Sign-in as { form.type ==1 ? "a Job Seeker" : "An Entreprise"}
          </div>
        </div>
        <div
          className={`left-0  delay-200 hidden lg:flex  flex items-center  bg-[url(${
            form.type ==1 
              ? "https://th.bing.com/th/id/R.d45dc54e7d0e057a0766ee517b5d48cd?rik=0EkDiw1isfR34g&pid=ImgRaw&r=0"
              : "../image/signBuilding.jpeg"
          })] absolute  duration-300 w-[70%] top-[66.45%] h-[calc(100%/3)]  bg-cover  ${
             form.type ==1 ? " translate-x-[43%]" : ""
          }`}
          style={{
            backgroundPosition: "0 100% ",
            backgroundSize: "100% 100vh",
            clipPath: form.type ==1 
              ? "polygon(10% 0px, 100% 0px, 100% 100%, 00% 100%)"
              : "polygon(0% 0, 80% 0%, 70% 100%, 0 100%)",
          }}
        >
          <div
            className="absolute w-full h-full  z-4 "
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          ></div>

          <div
            className={`w-[50px] h-[50px] ${
               form.type ==1 ? "ml-[20%]" : "ml-[60%]"
            } bg-white rounded-full grid place-content-center  block  cursor-pointer hover:scale-110`}
            style={{ zIndex: "4" }}
            onClick={ClickFunc}
          >
            <i
              className={`fa-solid fa-chevron-${
                 form.type ==1 ? "right" : "left"
              } text-black  font-bold text-2xl `}
            ></i>
          </div>
        </div>

        <div className="w-full lg:w-[33%] flex justify-center  items-center lg:px-0 px-2 ">
          <div className="flex flex-col border h-[350px] bg-[#0D1117]  border-[#30363D] rounded-[10px] w-[380px] lg:w-[80%] relative">
            <div className="text-red-500  absolute bottom-[-30px] right-2">{error && error}</div>
            <div className="text-2xl text-gray-200 font-bold text-center w-full my-5">
              Sign-in
            </div>
            <div className="w-full flex justify-between my-4 px-4">
              <label className={`text-white w-[150px] `}>Email :</label>
              <input
                name="email"
                onChange={(e) => setFormFunc(e)}
                value={form.email}
                type="text"
                className="rounded pl-2 outline-0 w-[160px] shadow-black focus:shadow-inner"
              />
            </div>
            <div className="w-full flex justify-between  my-4  px-4">
              <label className={`text-white  w-[150px]  `}>Password :</label>
              <input
                name="password"
                onChange={(e) => setFormFunc(e)}
                type="password"
                value={form.password}
                className="rounded pl-2 outline-0 w-[160px] shadow-black focus:shadow-inner"
              />
            </div>

            <div className="w-full flex px-5 mt-2 items-center lg:hidden">
              <div className="relative " onClick={ClickFunc}>
                <input id="switch" type="checkbox" className="sr-only" />
                <div className={`block w-8 h-5 rounded-full duration-[350ms] border border-xs ${ form.type ==1 ? "bg-[#4f688d] border-black": "bg[#3b82f6] border-white  " }`}></div>
                <div className={`dot absolute  top-1 bg-white w-3  h-3  outline-black rounded-full duration-300 transition-transform ${ form.type ==1 ? "translate-x-4" : "left-1"}`}></div>
              </div>
              <label className={`text-white mx-5`} for={"switch"}>Sign in as job seeker</label>
            </div>
            <div className="w-full flex justify-center items-center mt-8 ">
              <button
                onClick={signInFunc}
                className="text-white w-1/2 border border-[#30363D] rounded py-1 hover:bg-gray-700 duration-500"
              >
                Sign-In
              </button>
            </div>
            <div
              className="text-blue-500 w-full text-end my-5 px-5 cursor-pointer "
              onClick={() => setSignup(true)}
            >
              Sign-up
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
