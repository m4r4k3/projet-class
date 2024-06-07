import { useState } from "react";

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
    post,
  } = offre;
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
          <div>
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
          <div>
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
          </div>
        </div>
        <div className="mt-10 mx-5">
          <div className="font-bold"> Caractéristiques du poste :</div>
          <div className="px-5 py-2">{characteristic}</div>
        </div>
        <div className="mt-5 w-full flex justify-end  ">
          <button
            className=" border px-10 py-1 rounded shadow shadow-inner duration-300 hover:scale-[1.05]"
            onClick={() => {
              apply(id);
              setOffer(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
