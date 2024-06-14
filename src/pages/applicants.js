import { useEffect } from "react";
import Person from "../components/main/person"
import { Axios } from "../axios";
import LoadingScreen from "../loading";
import { useState } from "react";
import { useParams } from "react-router";

export default function Applicant() {
  const [data, setData] = useState(false);
  const id = useParams().id ;

  useEffect(() => {
    Axios.get("/api/applicant/" + id)
    .then((res) => res.data)
    .then((res) => setData(res))
    console.log(data)
  }, []);

  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px] min-h-screen">
     
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data.map((e, i) => (
            <Person
            id = {e.id}
             nom ={e.nom}
             prenom ={e.prenom}
            />
          ))}
        </div>
      </div>
    </>
  );
}
