import { combineSlices } from "@reduxjs/toolkit";
import { Axios } from "../../axios";
import { useSelector } from "react-redux";
export default function OffresCard({isOffer, setOffer ,
  id,
  salary ,
  name ,
  domain ,
  city ,
  description,
  characteristic,
  starting ,
  post,contrat
}) {
  const idUser = useSelector((s) => console.log(s.store));   
  const apply = ()=>{
    console.log(idUser)
    Axios.post("/api/applicant", {"offre_id":id})
    .then(res=>res.data)
    .then(res=>console.log(res))
    .catch(()=>console.error("error"))
  }
  return (
    <div className={`${isOffer?"h-[350px] w-[350px]":"h-[300px] w-[350px] "} flex relative cursor-pointer`} onClick={()=>setOffer({
      salary  : salary ,
      characteristic:characteristic ,
      starting:starting ,
      name  : name ,
      domain  : domain ,
      description : description,
      contrat : contrat,
      post : post,
      city  : city ,
    })}>
      <div className="w-full h-full bg-white rounded-[15px] relative pt-[45px] text-[18px] shadow-inner">
        <div className="absolute top-1 right-3 text-[#888888] text-[14px]">20/24</div>
        <div className="w-full flex flex-col gap-1 px-2 h-[75%]">
          <div>
            <label className="labels">Entreprise :</label>
            <span>{name}</span>
          </div>
          <div>
            <label className="labels">Domain :</label>
            <span>{domain}</span>
          </div>
          <div>
            <label className="labels">Post :</label>
            <span>{post}</span>
          </div>
          <div>
            <label className="labels">Ville :</label>
            <span>{city}</span>
          </div>
          <div>
            <label className="labels">Salaire :</label>
            <span>{salary} DH</span>
          </div>
          <div className="flex ">
            <label className="labels" >Description :</label>
            <span className="w-[70%] block">
             {description}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-end pr-[20px] mt-[20px]" >
        <button className={`${isOffer?"":"hidden"} border-[2px] px-10 py-1 rounded-[5px] shadow-inner font-semibold text-[15px]`} onClick={apply} >Apply</button>
        </div>
      </div>
    </div>
  );
}
