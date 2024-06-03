import { useRef, useState } from "react";
import { Axios } from "../../axios";
import { useNavigate } from "react-router";
import LoadingScreen from "../../loading";

export default function SignUp({ setSignup }) {
  const [signUpEntr, setSignUPEntr] = useState(false);
  const signUP = useRef(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({ type: 2 });
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const setFormFunc = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitFunc = async (e) => {
    setIsLoading(true);
    document.body.classList.add("modal-open");
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("api/signup", form)
      .then(async (res) => {
        const data = await res.data;
        if(res.status == 200){
          navigate("/");

        }else{
          
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  return (
    <>
      {isloading && <LoadingScreen />}
      <div
        className="w-screen h-screen fixed top-0 menu-glass flex justify-center items-center"
        style={{ zIndex: 10 }}
        onClick={() => setSignup(false)}
      >
        {error && <div className="text-red-500">error in form data</div>}
        <div
          className="h-[320px] w-[400px] signUpWhite rounded-[8px]"
          ref={signUP}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex justify-between pt-5 px-10">
            <div
              className="w-[30px] h-[30px]  border rounded-full flex justify-center items-center cursor-pointer bg-white"
              onClick={() => {
                signUP.current.classList.add("signUpWhite");
                signUP.current.classList.remove("signUpblack");
                setSignUPEntr(false);
                setForm({ type: 2 });
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
                setForm({ type: 1 });
              }}
            >
              <i class="fa-solid fa-user text-white"></i>
            </div>
          </div>
          <div
            className={`${
              signUpEntr ? "text-white" : "text-black"
            } w-full text-center text-2xl font-bold mb-5`}
          >
            Sign-UP
          </div>
          {signUpEntr && (
            <>
              {" "}
              <div className="flex justify-center w-full my-2">
                <label
                  className={`font-bold inline-block w-[120px] ${
                    signUpEntr ? "text-white" : "text-black"
                  }`}
                >
                  First name :
                </label>
                <input
                  onChange={(e) => setFormFunc(e)}
                  type="text"
                  name="first-name"
                  className="outline-none border pl-2 rounded"
                />
              </div>
              <div className="flex justify-center w-full my-2">
                <label
                  className={`font-bold inline-block w-[120px] ${
                    signUpEntr ? "text-white" : "text-black"
                  }`}
                >
                  Last name :
                </label>
                <input
                  onChange={(e) => setFormFunc(e)}
                  type="text"
                  name="last-name"
                  className="outline-none border pl-2 rounded"
                />
              </div>
            </>
          )}
          {!signUpEntr && (
            <div className="flex justify-center w-full my-2">
              <label
                className={`font-bold inline-block w-[120px] ${
                  signUpEntr ? "text-white" : "text-black"
                }`}
              >
                N-Registration :
              </label>
              <input
                onChange={(e) => setFormFunc(e)}
                type="text"
                name="n-entreprise"
                className="outline-none border pl-2 rounded"
              />
            </div>
          )}
          {!signUpEntr && (
            <div className="flex justify-center w-full my-2">
              <label
                className={`font-bold inline-block w-[120px] ${
                  signUpEntr ? "text-white" : "text-black"
                }`}
              >
                Name :
              </label>
              <input
                onChange={(e) => setFormFunc(e)}
                type="text"
                name="name"
                className="outline-none border pl-2 rounded"
              />
            </div>
          )}

          <div className="flex justify-center w-full my-2">
            <label
              className={`font-bold inline-block w-[120px] ${
                signUpEntr ? "text-white" : "text-black"
              }`}
            >
              Email :
            </label>
            <input
              onChange={(e) => setFormFunc(e)}
              type="text"
              name="email"
              className="outline-none border pl-2 rounded"
            />
          </div>
          <div className="flex justify-center w-full my-2">
            <label
              className={`font-bold inline-block w-[120px] ${
                signUpEntr ? "text-white" : "text-black"
              }`}
            >
              Password :
            </label>
            <input
              onChange={(e) => setFormFunc(e)}
              type="password"
              name="password"
              className="outline-none border pl-2 rounded"
            />
          </div>
          <div className="flex justify-center w-full my-5">
            <button
              className="border py-2 px-7 bg-[#6B7280] text-white rounded"
              onClick={(e) => submitFunc(e)}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
