import { useEffect, useRef, useState } from "react";
import DemandesCard from "../components/demandes/demandeCard";
import OffresCard from "../components/offres/offres-card";
import Person from "../components/main/person";
import LoadingScreen from "../loading";
import { Axios } from "../axios";
import MinEntr from "../components/main/min-entreprise";
import { Link } from "react-router-dom";
import FullScreenOffer from "../components/offres/fullscreen-card";

export default function Search() {
  const companies = useRef(null);
  const demandes = useRef(null);
  const offers = useRef(null);
  const people = useRef(null);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState();
  const [fullScreen, setFullScreen] = useState(null);
  const searchParams = new URLSearchParams(document.location.search);
  const q = searchParams.get("q");
  useEffect(() => {
    Axios.get(`/api/search?q=${q ? q : ""}`)
      .then((res) => res.data)
      .then((res) => setData(res));
  }, [edit]);
  if (!data) {
    return <LoadingScreen />;
  }
  const apply = (id) => {
    setData(false);
    setEdit((prev) => !prev);
    Axios.post("/api/applicant", { offre_id: id })
      .then((res) => res.data)
      .then((res) => console.log(res))
      .catch(() => console.error("error"));
  };
  return (
    <div className="bg-[url('../image/pattern.png')] w-full pt-[70px]">
      {fullScreen && (
        <FullScreenOffer
          setOffer={setFullScreen}
          offre={fullScreen}
          apply={apply}
        />
      )}
      <form className="flex w-full justify-center items-center mt-5">
        <input
          type="text"
          name="q"
          className="outline-0 w-[25%] h-[30px] pl-2 rounded shadow-inner"
        />
        <button className="pl-5" type="submit">
          <i className="fa-solid fa-chevron-right text-white"></i>
        </button>
      </form>
      <div className="flex min-h-full ">
        <div className="w-[30%] h-full  sticky top-[170px] ">
          <div className=" bg-[#0D1117] text-white py-3 rounded-[5px] border border-[#30363D] w-[75%] m-auto">
            <ul className="w-full flex flex-col gap-1">
              <li className="pl-5 text-lg mb-2 font-bold">On This Page</li>
              <li
                className="pl-5 w-full hover:bg-[#30363D] py-1"
                onClick={() =>
                  demandes.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                Demandes
              </li>
              <li
                className="pl-5 w-full hover:bg-[#30363D] py-1"
                onClick={() =>
                  offers.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                Offers
              </li>
              <li
                className="pl-5 w-full hover:bg-[#30363D] py-1"
                onClick={() =>
                  people.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                People
              </li>
              <li
                className="pl-5 w-full hover:bg-[#30363D] py-1"
                onClick={() =>
                  companies.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                Companies
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div class="w-full mx-auto  px-[5%] gap-5 flex flex-col justify-around my-10 ">
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%]">
              <h2 class="text-2xl font-bold mb-2 text-gray-500">Demands</h2>
              <Link to={`/demandes?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <div
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around"
              ref={demandes}
            >
              {data.demandes.map((e) => (
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
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%]">
              <h2 class="text-2xl font-bold mb-2 text-gray-500">Offers</h2>
              <Link to={`/offres?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <div
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around"
              ref={offers}
            >
              {data.offres.map((e, i) => (
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
                  apply={() => {}}
                />
              ))}
            </div>
          </div>
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%]">
              <h2 class="text-2xl font-bold mb-2 text-gray-500">People</h2>
              <Link to={`/people?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <div
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around"
              ref={people}
            >
              {data.individuel.map((e) => (
                <Person id={e.id} nom={e.nom} prenom={e.prenom} />
              ))}
            </div>
          </div>
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%]">
              <h2 class="text-2xl font-bold mb-2 text-gray-500">Companies</h2>
              <Link to={`/entreprises?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <div
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around"
              ref={companies}
            >
              {data.entreprises.map((e) => (
                <MinEntr id={e.id} name={e.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
