import { Link, useNavigate  } from "react-router-dom";
import "../../style/menu.css"
import { useSelector } from "react-redux";
import { Axios } from "../../axios";
import { actions } from "../../store/index";
import { useDispatch } from "react-redux";


export default function Menu({setIsMenu , setLoad}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout =async()=>{
    setLoad(true)
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/logout")
    dispatch(actions.logout())
    navigate("/")
  }
  
  const type = useSelector((s) => s.store.type); 

  return (
    <div className="fixed h-screen top-[70px] w-screen glass menu-glass modal-open " style={{zIndex:99}} onClick={(e)=>{e.stopPropagation() ;  document.body.classList.remove("modal-open");;setIsMenu(prev=>!prev);}}  >

    <div className=" w-[50%] sm:w-[13%] w-[13%] h-screen bg-[#F4F4F4] ">
      <div className=" w-full px-[10%] h-full ">
          <ul className="flex flex-col justify-around  items-center h-[90%] logo-font">
          <li><Link className={"flex w-[150px]  justify-around items-center "} to={"/search"}><i class="w-[50px] fa-solid fa-magnifying-glass"></i><span className="w-[100px]">Search</span></Link></li>
          <li><Link className={"flex w-[150px]  justify-around items-center "} to={"/people"}><i class="w-[50px] fa-solid fa-users"></i><span className="w-[100px]">people</span></Link></li>
          <li><Link className={"flex w-[150px]  justify-around items-center "} to={"/demandes"}><i class="w-[50px] fa-solid fa-envelope"></i><span className="w-[100px]">Demandes</span></Link></li>
          <li><Link className={"flex w-[150px]  justify-around items-center "} to={"/"}><i class="w-[50px] fa-solid fa-house"></i><span className="w-[100px]">Home</span></Link></li>
          <li><Link className={"flex w-[150px]  justify-around items-center "} to={"/offres"}><i class="w-[50px] fa-solid fa-envelope"></i><span className="w-[100px]">Offers</span></Link></li>
          <li><Link className={"flex w-[150px]  justify-around items-center "} to={"/entreprises"}><i class="w-[50px] fa-solid fa-building"></i><span className="w-[100px]">Entreprises</span></Link></li>
            {type &&<li><Link className={"flex w-[150px]  justify-around items-center "} to={`/my-posts`}><i class="w-[50px] fa-solid fa-envelope-open-text"></i><span className="w-[100px]">Your {(type==1 ?"demandes":"offres")}</span></Link></li>}
            {type &&<li><div onClick={logout} className={"flex w-[150px]  text-red-500  justify-around items-center "} ><i class="w-[50px] fa-solid fa-arrow-left-from-bracket"></i><span className="w-[100px]">Log-out</span></div></li>}
          </ul>
      </div>
    </div>
    </div>
  );
}
