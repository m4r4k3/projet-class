import { useRef, useState } from "react";

export default function SignUp({setSignup}){
    const [signUpEntr, setSignUPEntr] = useState(false);
  const signUP = useRef(null);
    return (<div
        className="w-screen h-screen fixed top-0 menu-glass flex justify-center items-center"
        style={{ zIndex: 10 }}
        onClick={()=>setSignup(false)}
      >
        <div className="h-[320px] w-[400px] signUpWhite rounded-[8px]" ref={signUP} onClick={e=>e.stopPropagation()}>
          <div className="w-full flex justify-between pt-5 px-10">
            <div
              className="w-[30px] h-[30px]  border rounded-full flex justify-center items-center cursor-pointer bg-white"
              onClick={() => {
                signUP.current.classList.add("signUpWhite");
                signUP.current.classList.remove("signUpblack");
                setSignUPEntr(false);
              }}
            >
            <i class="fa-solid fa-house "></i>
            </div>
            <div
              className="w-[30px] h-[30px] bg-[#0D1117] rounded-full flex justify-center items-center cursor-pointer border-gray-400 border"
              onClick={() => {
                signUP.current.classList.add("signUpblack");
                signUP.current.classList.remove("signUpWhite");
                setSignUPEntr(true);
              }}
            >
              <i class="fa-solid fa-user text-white"></i>
            </div>
          </div>
          <div className={`${signUpEntr ? "text-white": "text-black"} w-full text-center text-2xl font-bold mb-5`}>
            Sign-UP
          </div>
         {  signUpEntr &&  <div className="flex justify-center w-full my-2">
              <label className={`font-bold inline-block w-[120px] ${signUpEntr ? "text-white": "text-black"}`}>
                FullName :
              </label>
              <input type="text" className="outline-none border pl-2 rounded" />
            </div>}
          { !signUpEntr &&
            <div className="flex justify-center w-full my-2">
              <label className={`font-bold inline-block w-[120px] ${signUpEntr ? "text-white": "text-black"}`}>
                N-Entreprise :
              </label>
              <input type="text" className="outline-none border pl-2 rounded" />
            </div>
          }
          { !signUpEntr &&
            <div className="flex justify-center w-full my-2">
              <label className={`font-bold inline-block w-[120px] ${signUpEntr ? "text-white": "text-black"}`}>
                Name :
              </label>
              <input type="text" className="outline-none border pl-2 rounded" />
            </div>
          }
          {signUpEntr && <div className="flex justify-center w-full my-2">
              <label className={`font-bold inline-block w-[120px] ${signUpEntr ? "text-white": "text-black"}`}>CIN :</label>
              <input type="text" className="outline-none border pl-2 rounded" />
            </div> }

          <div className="flex justify-center w-full my-2">
            <label className={`font-bold inline-block w-[120px] ${signUpEntr ? "text-white": "text-black"}`}>Email :</label>
            <input type="text" className="outline-none border pl-2 rounded" />
          </div>
          <div className="flex justify-center w-full my-2">
            <label className={`font-bold inline-block w-[120px] ${signUpEntr ? "text-white": "text-black"}`}>
              Password :
            </label>
            <input
              type="password"
              className="outline-none border pl-2 rounded"
            />
          </div>
          <div className="flex justify-center w-full my-5">
            <button className="border py-2 px-7 bg-[#6B7280] text-white rounded">
              Sign-up
            </button>
          </div>
        </div>
      </div>)
}