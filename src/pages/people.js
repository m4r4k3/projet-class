import { useEffect } from "react";
import Person from "../components/main/person";
import { Axios } from "../axios";
import LoadingScreen from "../loading";
import { useState } from "react";

export default function People() {
  const [data, setData] = useState();

  const searchParams = new URLSearchParams(document.location.search);
  const q = searchParams.get("q");

  useEffect(() => {
    Axios.get("/api/individuel?q=" + (q?q:""))
      .then((res) => res.data)
      .then((data) => setData(data));
  }, []);
  console.log(data);
  if (!data) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px] min-h-screen">
      <form
        className="flex w-full justify-center items-center mt-5 relative"
        style={{ zIndex: 10 }}
      >
    
        <input
          type="text"
          name="q"
          className="outline-0 w-[25%] h-[30px] pl-2 rounded shadow-inner"
        />
        <button className="pl-5" type="submit">
          <i className="fa-solid fa-chevron-right text-white"></i>
        </button>
       
      </form>
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          {data.map((e, i) => (
            <Person id = {e.id} nom={e.nom} prenom={e.prenom}/>
          ))}
        </div>
      </div>
    </>
  );
}
