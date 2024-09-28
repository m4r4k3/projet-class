import { useEffect, useState } from "react";
import DemandesCard from "../components/demandes/demandeCard";
import { Axios } from "../axios";
import SearchBar from "../components/main/search";
import AddDemande from "../components/demandes/addDemande";
import { useLocation } from "react-router";
import DemandesSk from "../components/loading/demandes-sk";

export default function Demandes() {
  const [data, setData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isAddDemande, setsAddDemande] = useState(false);
  const location = useLocation() ;
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const q =  searchParams.get("q") ;
    const salary = searchParams.get("salary")
    const city = searchParams.get("city")
    Axios.get(`/api/demandes?city=${city ?city :""}&salary=${salary ? salary :""}&q=${q ? q :""}` )
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [edit]);
   return (
    <>
          <div className="bg-[url('../image/pattern.png')] min-h-screen w-full  pt-[70px]">

        {isAddDemande && (
          <AddDemande addMethod={setsAddDemande} setEdit={setEdit} setData={setData} />
        )}
        <SearchBar type={1} addMethod={setsAddDemande} />
        <div
          className={`grid grid-cols-1  md:grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data ? data.map((e) => (
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
          ))
        :
       [...Array(6)].map(e=><DemandesSk/>)
        }
        </div>
        </div>
    </>
  );
}
