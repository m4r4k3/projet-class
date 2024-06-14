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
        className="w-[800px] h-[300px] rounded bg-white py-[3%] px-[5%] relative"
        onClick={(e) => {
          setList(false);
          e.stopPropagation();
        }}
      >
        <div className="flex w-full justify-around">
          <div className=" flex flex-col gap-1">
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
            <div>
              <label className="font-bold w-[130px]   inline-block">
                description :
              </label>
              <span>{description}</span>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
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
        <div className="mt-5 px-[5%]">
          <div className="font-bold"> Caractéristiques du poste :</div>
          <div className="px-5 py-2">{characteristic}</div>
        </div>
        {type == 1 && (
          <div className="mt-3 w-full flex justify-end  ">
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
