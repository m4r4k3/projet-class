import { useRef, useState } from "react";
import { Axios } from "../../axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { actions } from "../../store";
import LoadingScreen from "../../loading";

export default function SignUp({ setSignup }) {
  const [signUpEntr, setSignUPEntr] = useState(false);
  const signUP = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          dispatch(actions.login({ id: data.id, type: data.type }));
          navigate("/");
      })
      .catch(() => {
        setIsLoading(false)
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
        <div
          className="h-[350px] w-[90%] sm:w-[400px] menu-glass signUpWhite rounded-[8px]"
          ref={signUP}
          onClick={(e) => e.stopPropagation()}
          >
          {error && <div className="text-red-500 text-center">The informations are not set correctly.</div>}
          <div className="w-full flex justify-between pt-5 px-10">
            <div
              className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer bg-white"
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
              className="w-[30px] h-[30px] bg-[#0D1117] rounded-full flex justify-center items-center cursor-pointer "
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
            } w-full text-center text-2xl font-bold mb-6 `}
          >
           Sign-up 
          </div>
          <div className="flex flex-col w-[80%]  m-auto gap-3 mb-5">
            {signUpEntr && (
              <>
                {" "}
                <div className="flex justify-center w-full ">
                  <label
                    className={`font-bold inline-block w-[120px] ${
                      signUpEntr ? "text-white" : "text-black"
                    }`}
                  >
                    First name
                  </label>
                  <input
                    onChange={(e) => setFormFunc(e)}
                    type="text"
                    name="first-name"
                    className="outline-none border pl-2 rounded"
                  />
                </div>
                <div className="flex justify-center w-full ">
                  <label
                    className={`font-bold inline-block w-[120px] ${
                      signUpEntr ? "text-white" : "text-black"
                    }`}
                  >
                    Last name
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
              <div className="flex justify-center w-full ">
                <label
                  className={`font-bold inline-block w-[120px] ${
                    signUpEntr ? "text-white" : "text-black"
                  }`}
                >
                  N-Reg
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
              <div className="flex justify-center w-full ">
                <label
                  className={`font-bold inline-block w-[120px] ${
                    signUpEntr ? "text-white" : "text-black"
                  }`}
                >
                  Name
                </label>
                <input
                  onChange={(e) => setFormFunc(e)}
                  type="text"
                  name="name"
                  className="outline-none border pl-2 rounded"
                />
              </div>
            )}

            <div className="flex justify-center w-full ">
              <label
                className={`font-bold inline-block w-[120px] ${
                  signUpEntr ? "text-white" : "text-black"
                }`}
              >
                Email
              </label>
              <input
                onChange={(e) => setFormFunc(e)}
                type="text"
                name="email"
                className="outline-none border pl-2 rounded"
              />
            </div>
            <div className="flex justify-center w-full ">
              <label
                className={`font-bold inline-block w-[120px] ${
                  signUpEntr ? "text-white" : "text-black"
                }`}
              >
                Password
              </label>
              <input
                onChange={(e) => setFormFunc(e)}
                type="password"
                name="password"
                className="outline-none border pl-2 rounded"
              />
            </div>
          </div>
          <div className="flex justify-center w-full ">
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
