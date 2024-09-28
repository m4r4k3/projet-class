import { useEffect, useState } from "react";
import DemandesCard from "../components/demandes/demandeCard";
import { Axios } from "../axios";
import LoadingScreen from "../loading";

export default function MyDemandes() {
  const [data, setData] = useState(false);
  const [edit, setEdit] = useState(false);
   useEffect(() => {
    Axios.get("/api/mydemandes")
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [edit]);

  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px] min-h-screen">
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data.map((e) => (
            <DemandesCard
              isDemande={false}
              id={e.id}
              salaire={e.salaire}
              location={e.location}
              role={e.role}
              nom={e.nom}
              prenom={e.prenom}
              experience={e.experience}
              niveau={e.niveau}
              description={e.description}
              domain={e.domain}
              created_at={e.created_at}
              setEdit ={setEdit} 
              setData ={setData}  
            />
          ))}
        </div>
      </div>
    </>
  );
}
