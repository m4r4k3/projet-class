import { Link } from "react-router-dom";
import "../../style/menu.css"
import { useEffect } from "react";
export default function Menu({setIsMenu}) {
  
  return (
    <div className="fixed z-[3] h-screen top-[70px] w-screen glass menu-glass  " onClick={(e)=>{e.stopPropagation() ;setIsMenu(prev=>!prev);}}  >

    <div className=" w-screen h-[calc(50%-70px)] shadow  bg-white ">
      <div className="flex w-full justify-between px-[10%] h-full pt-[3%]">
        <div>
          <div className="title-menu">Menu 1</div>
          <ul className="flex flex-col justify-around h-[50%] logo-font">
            <li>Messages</li>
            <li>Network</li>
            <li>Postulated list</li>
          </ul>
        </div>
        <div>
          <div className="title-menu">Explore</div>
          <ul className="flex flex-col justify-around h-[50%] logo-font">
            <li><Link to={"/demandes"}>Demandes</Link></li>
            <li><Link to={"/offres"}>Offers</Link></li>
            <li><Link to={"/save"}>Saves</Link></li>
          </ul>
        </div>
        <div>
          <div className="title-menu">Menu 3</div>
          <ul className="flex flex-col justify-around h-[50%] logo-font">
            <li>Your demandes</li>
            <li>Settings</li>
            <li>your Space</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
