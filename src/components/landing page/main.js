import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="h-full flex w-full md:justify-start sm:justify-center items-center relative md:pl-[13%]">
      <div className="bg-black left-0 w-full h-full absolute opacity-30"></div>
      <div className="text-white" style={{ zIndex: 2 }}>
        <p className="text-[35px] sm:w-[500px] w-full mb-[15%] logo-font font-bold text-center ">
          Discover elite opportunities tailored for you .
        </p>
        <Link to={"offres"}>
          <button className="w-[300px]  h-[50px] border-white main-button text-center tracking-wide ml-[10%] hover:scale-[1.05] duration-500">
            Embrace the elite
          </button>
        </Link>
      </div>
    </div>
  );
}
