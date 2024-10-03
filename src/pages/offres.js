import OffresCard from "../components/offres/offres-card";
import { useEffect } from "react";
import { Axios } from "../axios";
import FullScreenOffer from "../components/offres/fullscreen-card";
import "../style/navigate.css";
import { useState } from "react";
import OffresSk from "../components/loading/offres-sk"
import SearchBar from "../components/main/search";
import AddOffre from "../components/offres/add-offre";
import { useLocation } from "react-router";
export default function Offres() {
  const [fullScreen, setFullScreen] = useState(null);
  const [isAddOffre, setAddOffre] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(false);
  const location = useLocation() ;

  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const q =  searchParams.get("q") ;
    const type_contrat =  searchParams.get("type_contrat")
    const salary = searchParams.get("salary")
    const city = searchParams.get("city")
    const domain = searchParams.get("domain")
    Axios.get(`/api/offres?city=${city? city :""}&salary=${salary? salary :""}&contrat=${type_contrat? type_contrat :""}&q=${q? q :""}&domain=${domain ?domain :""}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [edit]);
  

  const apply = (id) => {
    setData(false);
    setEdit((prev) => !prev);
    Axios.post("/api/applicant", { offre_id: id })
      .then((res) => res.data)
      .catch(() => console.error("error"));
  };
  return (
    <>
          <div className="bg-[url('../image/pattern.png')] min-h-screen w-full  pt-[70px]">
 
        <SearchBar type={2} addMethod={setAddOffre} />
        {isAddOffre && <AddOffre addMethod={setAddOffre} setEdit={setEdit} setData={setData} />}
        {fullScreen && (
          <FullScreenOffer
            setOffer={setFullScreen}
            offre={fullScreen}
            apply={apply}
          />
        )}
        <div
          className={`grid grid-cols-1  sm:grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data ? data.map((e, i) => (
            <OffresCard
              setOffer={setFullScreen}
              isOffer={true}
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
              isApplied= {e.isApplied}
              apply={apply}
            />
          )) :
         [...Array(6)].map(e=><OffresSk />)
          }
        </div>
        </div>

    </>
  );
}
