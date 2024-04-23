export default function OffresCard() {
  return (
    <div className="h-[350px] w-[350px] flex relative">
      <div className="buttons absolute top-[15px] left-[-40px]">
        <div className="button">
          <i class="fa-solid fa-bookmark"></i>
        </div>
        <div className="button">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <div className="w-full h-full bg-white rounded-[15px] relative pt-[45px] text-[18px] shadow-inner">
        <div className="absolute top-1 right-3 text-[#888888] text-[14px]">20/24</div>
        <div className="w-full flex flex-col gap-1 px-2 h-[75%]">
          <div>
            <label className="labels">Entreprise :</label>
            <span>Apple</span>
          </div>
          <div>
            <label className="labels">Domain :</label>
            <span>Informatique</span>
          </div>
          <div>
            <label className="labels">Post :</label>
            <span>Comptable</span>
          </div>
          <div>
            <label className="labels">Ville :</label>
            <span>Casablanca</span>
          </div>
          <div>
            <label className="labels">Salaire :</label>
            <span>3000 DH</span>
          </div>
          <div className="flex ">
            <label className="labels" >Description :</label>
            <span className="w-[70%] block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </span>
          </div>
        </div>
        <div className="w-full flex justify-end pr-[20px] mt-[20px]">
        <button className="border-[2px] px-10 py-1 rounded-full shadow-inner font-semibold text-[15px]">Apply</button>
        </div>
      </div>
    </div>
  );
}
