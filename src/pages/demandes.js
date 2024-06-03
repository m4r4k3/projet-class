import { useEffect, useState } from "react";
import DemandesCard from "../components/demandes/demandeCard";
import { Axios } from "../axios";
import LoadingScreen from "../loading";

export default function Demandes() {
  const [data, setData] = useState(false);
  useEffect(() => {
    Axios.get("/api/demandes")
      .then((res) => res.data)
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
        <div className="flex w-full justify-center items-center mt-5">
          <input
            type="text"
            className="outline-0 w-[25%] h-[30px] pl-2 rounded shadow-inner"
          />
          <button className="pl-5">
            <i className="fa-solid fa-chevron-right text-white"></i>
          </button>
        </div>
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data.map((e) => (
            <DemandesCard
              isDemande={true}
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
            />
          ))}
        </div>
      </div>
    </>
  );
}
