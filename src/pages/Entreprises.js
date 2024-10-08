import { useEffect } from "react";
import MinEntr from "../components/main/min-entreprise";
import { Axios } from "../axios";
import ProfileSk from "../components/loading/profile-sk"
import { useState } from "react";

export default function Entreprises() {
  const [data, setData] = useState();

  
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    const q = searchParams.get("q");
    Axios.get("/api/entreprise?q=" + (q?q:""))
      .then((res) => res.data)
      .then((data) => setData(data));
  }, []);
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
          className="outline-0 sm:w-[25%] w-[60%] h-[30px] pl-2 rounded shadow-inner"
        />
        <button className="pl-5" type="submit">
          <i className="fa-solid fa-chevron-right text-white"></i>
        </button>
       
      </form>
        <div
          className={`grid grid-cols-1  sm:grid-cols-3  w-full justify-items-center p-[50px] gap-[50px]`}
        >
          { data ? data.map((e, i) => (
            <MinEntr id = {e.id} name={e.name}/>
          )) :[...Array(6)].map(()=> <ProfileSk />)}
        </div>
      </div>
    </>
  );
}
