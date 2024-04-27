import DemandeCard from "../components/demandes/demandeCard";
import OffresCard from "../components/offres/offres-card";
export default function Saves() {
  return (
    <div className="bg-[url('../image/pattern.png')] w-full pt-[70px] flex min-h-full ">
      <div class="w-full  mx-auto  px-[10%] gap-5 flex flex-col justify-around my-5">
        <div class=" w-full  ">
          <div className="flex w-full justify-between px-[5%]">
            <h2 class="text-2xl font-bold mb-2 text-gray-500">Demands</h2>
            <a href="#" class="text-blue-500">
              see more
            </a>
          </div>
          <div class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2">
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
          <div class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2">
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
          <div class="border border-[#30363D] rounded-[10px] bg-[#0D1117] p-4 mb-2">
            <DemandeCard isDemande={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
