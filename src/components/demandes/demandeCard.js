import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../style/demande.css";
import { Axios } from "../../axios";
export default function DemandeCard({isDemande  ,
  id,
  salaire,
  nom,
  prenom,
  location  ,
  created_at,
  niveau,
  experience,
  description,
  domain ,
  role,
  reload
}) {
  const descriptionVar = useRef(null);
  const deleteDemande = async()=>{
    await Axios.get("/sanctum/csrf-cookie");
    Axios.delete(`/api/demandes/${id}`)
    .then(res=>res)
    .then(res=>console.log(res))
    reload()
  }
  return (
    <div  className={` ${isDemande?"h-[350px] w-[350px] ":"h-[300px] w-[350px] "}flex relative `}>
      
      { !isDemande && <div className="absolute top-1 left-[-35px] flex-text-[#888888] text-xl z-[1]">
          <button onClick={deleteDemande} className="buttons bg-red-500 w-[30px]  text-white h-[30px] flex justify-center items-center mb-1 rounded-full"> <i className="fa-solid fa-trash"></i></button>
          <Link to={"/applicants/"+id} className="buttons bg-blue-500 w-[30px] text-black  h-[30px] flex justify-center items-center mb-1 rounded-full"><i className="fa-solid fa-user"></i></Link>
        </div>}
      <div
        className="w-full h-full bg-white rounded-[15px] relative text-[18px]  shadow-inner overflow-hidden"
        onMouseOut={() => descriptionVar.current.classList.remove("descriptionUP")}
        onMouseOver={() => descriptionVar.current.classList.add("descriptionUP")}
      >
        <div className="absolute top-1 right-3 text-[#888888] text-[14px] z-[1]">
          {(new Date(created_at)).toDateString("y%/m%/d%")}
        </div>
        <div
          className="absolute w-full h-full bg-white rounded-[15px] duration-500 p-5 translate-y-[100%] "
          ref={descriptionVar}
        >
          <span className="block font-semibold mb-2"> Description :</span>
          {description}
        </div>
        <div className="h-[70%] flex flex-col justify-center items-center">
          <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-[100px] h-[100px]"></div>

          <div className="mt-5 font-bold">{prenom} {nom}</div>
        </div>
        <div className="h-[30%] flex justify-around">
          <div className="w-[45%]">
            <div>
              <label className="font-semibold">Domain :</label>
              <span>{domain}</span>
            </div>
            <div>
              <label className="font-semibold">Experience :</label>
              <span>{experience}</span>
            </div>
            <div>
              <label className="font-semibold">Niveau :</label>
              <span>{niveau}</span>
            </div>
          </div>
          <div className="w-[45%]">
            <div>
              <label className="font-semibold">Salaire :</label>
              <span>{salaire}</span>
            </div>
            <div>
              <label className="font-semibold">Ville :</label>
              <span>{location}</span>
            </div>
            <div>
              <label className="font-semibold">Role :</label>
              <span>{role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
