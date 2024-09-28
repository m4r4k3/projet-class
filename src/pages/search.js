import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion"
import DemandesCard from "../components/demandes/demandeCard";
import OffresCard from "../components/offres/offres-card";
import DemandesSk from "../components/loading/demandes-sk";
import Person from "../components/main/person";
import { Axios } from "../axios";
import MinEntr from "../components/main/min-entreprise";
import { Link } from "react-router-dom";
import FullScreenOffer from "../components/offres/fullscreen-card";
import OffresSk from "../components/loading/offres-sk"
import ProfileSk from "../components/loading/profile-sk"

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
          className="outline-0 w-[60%] sm:w-[20%]  h-[30px] pl-2 rounded shadow-inner"
        />
        <button className="pl-5" type="submit">
          <i className="fa-solid fa-chevron-right text-white"></i>
        </button>
      </form>
      <div className="flex min-h-full ">
        <div className="w-[30%] h-full  sticky top-[170px] ">
          <div className=" bg-[#0D1117] text-white py-3 mb-2 rounded-[5px] border border-[#30363D] w-[75%] m-auto hidden sm:block">
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
              <h2 class="text-2xl font-bold mb-2 text-white">Demands</h2>
              <Link to={`/demandes?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <motion.div 
                  initial={{opacity:0}}
                  viewport={{once:true}}
                  whileInView={{opacity:1}}
                  transition={{duration:0.5}}
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around [&>*]:hidden sm:[&>*]:block [&>*:first-child]:block "
              ref={demandes}
            >
              {data ? data.demandes.map((e) => (
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
              [...Array(2)].map(e=><DemandesSk/>)
            }
            </motion.div>
          </div>
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%] ">
              <h2 class="text-2xl font-bold mb-2  text-white">Offers</h2>
              <Link to={`/offres?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <motion.div 
                     initial={{opacity:0}}
                     viewport={{once:true}}
                     whileInView={{opacity:1}}
                     transition={{duration:0.5}}
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around [&>*]:hidden sm:[&>*]:flex [&>*:first-child]:block"
              ref={offers}
            >
              {data? data.offres.map((e, i) => (
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
              )) :      
              [...Array(2)].map(e=><OffresSk/>)}
            </motion.div>
          </div>
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%]">
              <h2 class="text-2xl font-bold mb-2 text-white">People</h2>
              <Link to={`/people?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <motion.div 
                        initial={{opacity:0}}
                        viewport={{once:true}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.5}}
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around sm:[&>*]:flex [&>*]:hidden [&>*:first-child]:flex"
              ref={people}
            >
              {data?data.individuel.map((e) => (
                <Person id={e.id} nom={e.nom} prenom={e.prenom} />
              )) :
              [...Array(2)].map(e=><ProfileSk/>)}
            </motion.div>
          </div>
          <div class=" w-full  ">
            <div className="flex w-full justify-between px-[5%]">
              <h2 class="text-2xl font-bold mb-2  text-white">Companies</h2>
              <Link to={`/entreprises?q=${q ? q : ""}`} class="text-blue-500">
                see more
              </Link>
            </div>
            <motion.div 
              initial={{opacity:0}}
              viewport={{once:true}}
              whileInView={{opacity:1}}
              transition={{duration:0.5}}
             
              class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2 flex justify-around sm:[&>*]:flex [&>*]:hidden [&>*:first-child]:flex"
              ref={companies}
            >
              {data ? data.entreprises.map((e) => (
                <MinEntr id={e.id} name={e.name} />
              ))
              :
              [...Array(2)].map(e=><ProfileSk/>)
            }
            </motion.div>
          </div>
        </div>
        </div>
      </div>
      </>
  );
}
