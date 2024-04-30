import { useRef } from "react";
import DemandeCard from "../components/demandes/demandeCard";
import OffresCard from "../components/offres/offres-card";
export default function Search() {
  const companies = useRef(null);
  const demandes = useRef(null);
  const offers = useRef(null);
  const people = useRef(null);
  console.log(offers);
  return (
    <div className="bg-[url('../image/pattern.png')] w-full pt-[70px] flex min-h-full ">
      <div className="w-[30%] h-full  sticky top-[120px] ">
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
            <a href="#" class="text-blue-500">
              see more
            </a>
          </div>
          <div
            class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2"
            ref={demandes}
          >
            <DemandeCard isDemande={false} />
          </div>
        </div>
        <div class=" w-full  ">
          <div className="flex w-full justify-between px-[5%]">
            <h2 class="text-2xl font-bold mb-2 text-gray-500">Offers</h2>
            <a href="#" class="text-blue-500">
              see more
            </a>
          </div>
          <div
            class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2"
            ref={offers}
          >
            <OffresCard isOffer={false} />
          </div>
        </div>
        <div class=" w-full  ">
          <div className="flex w-full justify-between px-[5%]">
            <h2 class="text-2xl font-bold mb-2 text-gray-500">People</h2>
            <a href="#" class="text-blue-500">
              see more
            </a>
          </div>
          <div
            class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2"
            ref={people}
          >
            <DemandeCard isDemande={false} />
          </div>
        </div>
        <div class=" w-full  ">
          <div className="flex w-full justify-between px-[5%]">
            <h2 class="text-2xl font-bold mb-2 text-gray-500">Companies</h2>
            <a href="#" class="text-blue-500">
              see more
            </a>
          </div>
          <div
            class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2"
            ref={companies}
          >
            <DemandeCard isDemande={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
