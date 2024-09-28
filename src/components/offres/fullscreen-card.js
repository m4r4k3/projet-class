import { useState } from "react";
import { useSelector } from "react-redux";
export default function FullScreenOffer({ setOffer, offre, apply }) {
  const [showList, setList] = useState(false);
  const {
    id,
    characteristic,
    salary,
    name,
    domain,
    city,
    description,
    starting,
    contrat,
    isApplied,
    post,
  } = offre;
  const type = useSelector((s) => s.store.type);
  return (
    <div
      className="w-screen h-screen fixed top-0 menu-glass flex justify-center items-center "
      onClick={() => setOffer(null)}
      style={{ zIndex: 10 }}
    >
      <div
        className="md:w-[800px] w-full sm:h-[400px] h-[80%] rounded bg-white pt-[7%] sm:py-[3%] px-[4%] relative"
        onClick={(e) => {
          setList(false);
          e.stopPropagation();
        }}
      >
        <div className="flex sm:flex-row flex-col  sm:gap-0 w-full gap-3 justify-around">
          <div className=" flex flex-col gap-3 sm:gap-1">
            <div>
              <label className="font-bold w-[130px]   inline-block">
                Entreprise :
              </label>
              <span>{name}</span>
            </div>
            <div>
              <label className="font-bold w-[130px]   inline-block">
                Domain :
              </label>
              <span>{domain}</span>
            </div>

            <div>
              <label className="font-bold w-[130px]   inline-block">
                Ville :
              </label>
              <span>{city}</span>
            </div>
          
          </div>
          <div className=" flex flex-col sm:gap-1 gap-3">
            <div>
              <label className="font-bold w-[130px]   inline-block">
                Salaire :
              </label>
              <span>{salary} DH</span>
            </div>
            <div>
              <label className="font-bold w-[130px]  inline-block">
                Date de début :
              </label>
              <span> {starting}</span>
            </div>
            <div>
              <label className="font-bold w-[130px]  inline-block">
                Type de contrat :
              </label>
              <span> {contrat}</span>
            </div>
            <div>
              <label className="font-bold w-[130px]  inline-block">
                Post :
              </label>
              <span> {post}</span>
            </div>
          </div>
        </div>
        <div className="mt-2 mt-5 sm:px-[5%]">
          <div className="font-bold"> Caractéristiques du poste :</div>
          <p className="px-5 py-2 w-full overflow-y-scroll h-[100px] mt-2  break-words	">dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
        {type == 1 && (
          <div className=" w-full flex justify-end mt-2 mt-5 ">
            <button
              className={`border-[2px] px-10 py-1 rounded-[5px] shadow-inner font-semibold text-[15px] ${
                isApplied ? "bg-green-500 text-white" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                apply(id);
              }}
              disabled={isApplied}
            >
              {isApplied ? "Applied" : "Apply"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
