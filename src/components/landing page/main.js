import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="h-full flex  items-center  relative pl-[13%]">
      <div className="text-white">
        <p className="text-[35px] w-[500px] mb-[15%] logo-font font-bold">
          Discover elite opportunities tailored for you .
        </p>
        <Link to={"offres"}>
          <button className="w-[300px] h-[50px] border-white main-button text-center tracking-wide ml-[10%] hover:scale-[1.05] duration-500">
            Embrace the elite
          </button>
        </Link>
      </div>
    </div>
  );
}