import {NavLink , useLocation, useNavigate } from "react-router-dom";
import "../../style/menu.css";
import { useSelector } from "react-redux";
import { Axios } from "../../axios";
import {motion} from "framer-motion"
import { actions } from "../../store/index";
import { useDispatch } from "react-redux";

export default function Menu({ setIsMenu  }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = async () => {
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/logout");
    dispatch(actions.logout());
    navigate("/");
  };

  const type = useSelector((s) => s.store.type);
  return (
    <div
      className="fixed h-screen top-[70px] w-screen glass menu-glass "
      style={{ zIndex: 99 }}
      onClick={(e) => {
        e.stopPropagation();
        setIsMenu((prev) => {
           
          return !prev
        });
      }}
    >
      <motion.div    initial={{translateX:-100}} animate={{translateX:0}} transition={{ease:"easeOut" , duration:0.3}} className=" w-[50%] sm:w-[20%] lg:w-[15%]  h-screen bg-[#F4F4F4] ">
        <div className=" w-full  h-full  ">
          <ul className="flex flex-col gap-3   h-[calc(100%-70px)] logo-font">
            <li>
              <NavLink
              
                className={({isActive})=>` flex py-4   justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                to={"/"}
              >
                <i className="w-[50px] fa-solid fa-house"></i>
                <span className="w-[100px]">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              
                className={({isActive})=>` flex py-4 w-full  justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                to={"/search"}
              >
                <i className="w-[50px] fa-solid fa-magnifying-glass"></i>
                <span className="w-[100px]">Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              
                className={({isActive})=>` flex py-4 w-full  justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                to={"/people"}
              >
                <i className="w-[50px] fa-solid fa-users"></i>
                <span className="w-[100px]">people</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              
                className={({isActive})=>` flex py-4 w-full  justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                to={"/demandes"}
              >
                <i className="w-[50px] fa-solid fa-envelope"></i>
                <span className="w-[100px]">Demandes</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              
                className={({isActive})=>` flex py-4 w-full  justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                to={"/offres"}
              >
                <i class="fa-solid fa-briefcase w-[50px]"></i>
                <span className="w-[100px]">Offers</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              
                className={({isActive})=>` flex py-4 w-full  justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                to={"/entreprises"}
              >
                <i className="w-[50px] fa-solid fa-building"></i>
                <span className="w-[100px]">Entreprises</span>
              </NavLink>
            </li>
            {type && (
              <li>
                <NavLink
                
                  className={({isActive})=>` flex py-4 w-full  justify-center items-center ${isActive?" bg-gray-300 w-full":""}`}
                  to={`/my-posts`}
                >
                  <i className="w-[50px] fa-solid fa-envelope-open-text"></i>
                  <span className="w-[100px]">
                    Your {type == 1 ? "demandes" : "offres"}
                  </span>
                </NavLink>
              </li>
            )}
            {type ? (
              <li className="mt-auto border-gray-300 bg-red-500  border-t">
                <div
                  onClick={logout}
                  className={
                    "flex w-full  text-white py-4 mt-auto  justify-center items-center "
                  }
                >
                  <i className="w-[50px] fa-solid fa-arrow-left-from-bracket"></i>
                  <span className="w-[100px]">Log-out</span>
                </div>
              </li>
            ) :
            <li className="mt-auto border-gray-300 border-t bg-[#0D1117] ">
            <NavLink
            
              to={"/sign-in"}
              className={
                "flex w-full text-white py-4  justify-center items-center "
              }
            >
              <i className="w-[50px] fa-solid fa-right-to-bracket "></i>
              <span className="w-[100px]">Log-in</span>
            </NavLink>
          </li>
            }

          </ul>
        </div>
      </motion.div>
    </div>
  );
}
