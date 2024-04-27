import DemandesCard from "../components/demandes/demandeCard"
export default function Demandes(){
    return (
         <>
<div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
   <div className="flex w-full justify-center items-center mt-5">
    <input type="text" className="outline-0 w-[25%] h-[30px] pl-2 rounded shadow-inner"/>
    <button className="pl-5"><i className="fa-solid fa-chevron-right text-white"></i></button>
   </div> 
    <div className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}>
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
        <DemandesCard isDemande={true} />
    </div>
</div>
        </>)
}