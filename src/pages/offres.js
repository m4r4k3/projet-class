import OffresCard from "../components/offres/offres-card";
import { useEffect } from "react";
import { Axios } from "../axios";
import FullScreenOffer from "../components/offres/fullscreen-card";
import LoadingScreen from "../loading";
import "../style/navigate.css";
import { useState } from "react";
import SearchBar from "../components/main/search";
import AddOffre from "../components/offres/add-offre";
export default function Offres() {
  const [fullScreen, setFullScreen] = useState(null);
  const [isAddOffre, setAddOffre] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(false);

  
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    const q =  searchParams.get("q") ;
    const type_contrat =  searchParams.get("type_contrat")
    const salary = searchParams.get("salary")
    const city = searchParams.get("city")
    Axios.get(`/api/offres?city=${city? city :""}&salary=${salary? salary :""}&type_contrat=${type_contrat? type_contrat :""}&q=${q? q :""}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [edit]);
  
  if (!data) {
    return <LoadingScreen />;
  }
  document.body.classList.remove("modal-open");
  const apply = (id) => {
    setData(false);
    setEdit((prev) => !prev);
    Axios.post("/api/applicant", { offre_id: id })
      .then((res) => res.data)
      .then((res) => console.log(res))
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
          {data.map((e, i) => (
            <OffresCard
              setOffer={setFullScreen}
              isOffer={true}
              id={e.id}
              characteristic={e.characteristic}
              salary={e.salary}
              starting={e.starting}
              name={e.name}
              domain={e.domain}
              city={e.city}
              created_at={e.created_at}
              description={e.description}
              post={e.post}
              contrat={e.contrat}
              isApplied= {e.isApplied}
              apply={apply}
            />
          ))}
        </div>
      </div>
    </>
  );
}
