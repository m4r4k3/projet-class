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

  const searchParams = new URLSearchParams(document.location.search)
  const q =  searchParams.get("q") ;
  const salary = searchParams.get("salary")
  const city = searchParams.get("city")
  
  useEffect(() => {
    Axios.get(`/api/demandes?city=${city ?city :""}&salary=${salary ? salary :""}&q=${q ? q :""}` )
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [edit]);

  document.body.classList.remove("modal-open");
  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px] min-h-screen">
        {isAddDemande && (
          <AddDemande addMethod={setsAddDemande} setEdit={setEdit} setData={setData} />
        )}
        <SearchBar type={1} addMethod={setsAddDemande} />
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
              user_id={e.user_id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
