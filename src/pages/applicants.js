import OffresCard from "../components/offres/offres-card";
import { useEffect } from "react";
import { Axios } from "../axios";
import FullScreenOffer from "../components/offres/fullscreen-card";
import LoadingScreen from "../loading";
import { useState } from "react";

export default function Applicant() {
  const [data, setData] = useState(false);
  console.log(data)
  useEffect(() => {
    Axios.get("/api/applicants" + id)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
     
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data.map((e, i) => (
            <Person
             
            />
          ))}
        </div>
      </div>
    </>
  );
}
