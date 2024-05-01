import { useState } from "react"

export default function FullScreenOffer({setOffer}){
   const [showList , setList]=useState(false)
    return( <div
          className="w-screen h-screen fixed top-0 menu-glass flex justify-center items-center "
          onClick={()=>setOffer(null)}
          style={{ zIndex: 10 }}
        >
          <div className="w-[65%] h-[70%] rounded bg-white py-[3%] px-[5%] relative" onClick={e=>{setList(false);e.stopPropagation()}}>
            <div className="absolute right-10 top-5 flex flex-col items-center w-[70px] ">
            <div className="cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-black  hover:shadow-inner" onClick={e=>{setList(prev=>!prev);e.stopPropagation()}}>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <ul className={` w-full border rounded ${showList ? "" :"hidden"} mt-2 `} >
              <li className="text-center hover:bg-gray-200 w-full py-1 duration-300">save</li>
              <li className="text-red-500 text-center hover:bg-gray-200 w-full py-1 duration-300">report</li>
            </ul>
            </div>
            <div className="text-[25px] mb-5">JOB TITLE</div>
            <div className="flex w-full justify-around">
              <div>
                <div>
                  <label className="font-bold w-[130px]   inline-block">
                    Entreprise :
                  </label>
                  <span>Apple</span>
                </div>
                <div>
                  <label className="font-bold w-[130px]   inline-block">
                    Domain :
                  </label>
                  <span>Informatique</span>
                </div>

                <div>
                  <label className="font-bold w-[130px]   inline-block">
                    Ville :
                  </label>
                  <span>Casablanca</span>
                </div>
              </div>
              <div>
                <div>
                  <label className="font-bold w-[130px]   inline-block">
                    Salaire :
                  </label>
                  <span>3000 DH</span>
                </div>
                <div>
                  <label className="font-bold w-[130px]  inline-block">
                    Date de début :
                  </label>
                  <span> 27/04/2024</span>
                </div>
                <div>
                  <label className="font-bold w-[130px]  inline-block">
                    Type de contrat :
                  </label>
                  <span> CI</span>
                </div>
              </div>
            </div>
            <div className="mt-10 mx-5">
              <div className="font-bold"> Caractéristiques du poste :</div>
              <div className="px-5 py-2">
                Garantir que toutes les opérations financières/Comptables sont
                correctement enregistrées, suivies et rapportées.
                Caractéristiques du poste : Garantir que toutes les opérations
                financières/Comptables sont correctement enregistrées, suivies
                et rapportées. Caractéristiques du poste : Garantir que toutes
                les opérations financières/Comptables sont correctement
                enregistrées, suivies et rapportées.
              </div>
            </div>
            <div className="mt-5 w-full flex justify-end  ">

            <button className=" border px-10 py-1 rounded shadow shadow-inner duration-300 hover:scale-[1.05]">
                Apply   
            </button>
            </div>
          </div>
        </div>)
}