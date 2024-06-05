import OffresCard from "../components/offres/offres-card";
import { useEffect } from "react";
import { Axios } from "../axios";
import FullScreenOffer from "../components/offres/fullscreen-card"
import LoadingScreen from "../loading"
import "../style/navigate.css";
import { useState } from "react";
import SearchBar from "../components/main/search";
export default function Offres() {
    const [fullScreen , setFullScreen] = useState(null)
    const [data , setData]=  useState(false);
    useEffect(()=>{
    Axios.get("/api/offres").then((res)=>res.data).then(data=>setData(data))
    },[])
    if(!data){
      return <LoadingScreen />
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
      <SearchBar type={2}/>
       {fullScreen && <FullScreenOffer setOffer={setFullScreen} offre ={fullScreen}/>}
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {
            data.map((e , i)=><OffresCard setOffer={setFullScreen} isOffer={true}
            id ={e.id }
            characteristic ={e.characteristic }
            salary  ={e.salary }
            starting  ={e.starting }
            name  ={e.name }
            domain  ={e.domain }
            city  ={e.city }
            created_at  ={e.created_at }
            description ={e.description }
            post ={e.post }
            contrat ={e.contrat}
            />)
    
        }
        </div>
      </div>
    </>
  );
}
