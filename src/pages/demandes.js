import { useEffect, useState } from "react";
import DemandesCard from "../components/demandes/demandeCard";
import { Axios } from "../axios";
import LoadingScreen from "../loading";
import SearchBar from "../components/main/search";
import AddDemande from "../components/demandes/addDemande";

export default function Demandes() {

  const [data, setData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isAddDemande, setsAddDemande] = useState(false);
  useEffect(() => {
    Axios.get("/api/demandes")
      .then((res) => res.data)
      .then((data) => setData(data));
     
  }, [edit]);
  console.log(data)
  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
   { isAddDemande && <AddDemande addMethod = {setsAddDemande} setEdit={setEdit}  />}
    <SearchBar type={1} addMethod = {setsAddDemande}/>
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
