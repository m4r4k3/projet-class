import {useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar({type}){
    const isLoggedIn = useSelector((s) => s.store.loggedIn);
    const typeUser = useSelector((s) => (s.store.type));
   

    return<>
    <div className="flex w-full justify-center items-center mt-5 relative">
    <div className="pr-5 cursor-pointer">
    <i class="fa-light fa-bars-filter text-white text-2xl"></i>
    </div>
    <input
      type="text"
      className="outline-0 w-[25%] h-[30px] pl-2 rounded shadow-inner"
      />
    <button className="pl-5">
      <i className="fa-solid fa-chevron-right text-white"></i>
    </button>
    {isLoggedIn && typeUser == type&& <Link className="absolute right-20 text-center h-full" to={typeUser != 1 ?"/offres/create" :"/demandes/create"}>
      <i className="fa-solid fa-plus text-xl text-white"></i>
    </Link>}
  </div>
      </>
}