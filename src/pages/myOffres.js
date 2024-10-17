import OffresCard from "../components/offres/offres-card";
import { useEffect } from "react";
import { Axios } from "../axios";
import FullScreenOffer from "../components/offres/fullscreen-card";
import LoadingScreen from "../loading";
import "../style/navigate.css";
import { useState } from "react";

export default function Offres() {
  const [fullScreen, setFullScreen] = useState(null);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(false);
    const reload = ()=>{
    setData(false)
    setEdit(prev=>!prev)
  }

  useEffect(() => {
    Axios.get("/api/myoffres")
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [edit]);
  
  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px] min-h-screen">
      {fullScreen && (
          <FullScreenOffer
            setOffer={setFullScreen}
            offre={fullScreen}
            apply={()=>{}}
          />
        )}
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data.map((e, i) => (
            <OffresCard
            setOffer={setFullScreen}
              isOffer={false}
              id={e.id}
              characteristic={e.characteristic}
              salary={e.salary}
              starting={e.starting}
              name={e.entreprise.name}
              domain={e.domain.domain}
              city={e.city.name}
              created_at={e.created_at}
              description={e.description}
              post={e.post}
              contrat={e.contrat.type}
              apply={()=>{}}
              setData={setData}
              setEdit={setEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}
