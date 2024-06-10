import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav({ setIsMenu, isMenu }) {
  const [scroll, setScroll] = useState(false);
  const isLogged = useSelector((s) => s.store.loggedIn);

  useEffect(() => {
    setIsMenu((prev) => !prev);
    window.addEventListener("scroll", () => {
      const value = window.scrollY > window.innerHeight / 8;
      setScroll(value);
    });
  }, []);

  return (
    <div
      onMouseOver={() => setScroll(true)}
      onMouseOut={() =>
        window.scrollY < window.innerHeight / 8 && setScroll(false)
      }
      className={`flex justify-between items-center px-[5%] h-[70px] fixed z-[10] t-0 w-full ${
        scroll || isMenu ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div
        className={`burger ${
          isMenu || scroll ? "[&>*]:bg-black" : "[&>*]:bg-white"
        }`}
        onClick={() => setIsMenu((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link
        to={"/"}
        className={`block logo text-bold cursor-default tracking-wide select-none `}
      >
        ELITE CAREERS
      </Link>

      {isLogged ? (
        <Link
          to={"/myprofile"}
          className="w-[30px] h-[30px] rounded-full shadow text-[15px] flex justify-center items-center shadow cursor-pointer"
        >
          <i className={`fa-solid fa-user `}></i>
        </Link>
      ) : (
        <Link
          to={"/sign-in"}
          className="w-[30px] h-[30px] rounded-full shadow text-[15px] flex justify-center items-center shadow cursor-pointer"
        >
          <i className={`fa-solid fa-right-to-bracket `}></i>
        </Link>
      )}
    </div>
  );
}
