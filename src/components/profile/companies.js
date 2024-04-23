export default function Companies() {
  return (
    <div className="px-[5%] my-5">
      <div className=" border-[#30363D] w-full  px-5 py-2  border-t flex ">
       
        <div className="w-full">
          <div className="flex justify-between pr-8 text-white">
            <label className="font-semibold text-lg "> Samsung</label>
            <div>Comptable</div>
          </div>
          <div className="flex w-[200px] justify-between">
            <div className="text-gray-400 text-sm">2022 - 2023</div>
          </div>
          <div>
            <div className="font-semibold text-[15px] text-gray-400">Description :</div>
            <span className="text-[14px] text-white">
              Advertising, calls and sales, planning and organising, reporting:
              new market, social media management, phone and face-to-face
              interviews, managing administrative files, writing and publishing
              job offers, reviewin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
