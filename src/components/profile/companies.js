export default function Companies({name , starting , ending , description , post }) {
  return (
    <div className="px-[5%] my-5">
      <div className=" border-[#30363D] w-full  px-5 py-2  border-t flex ">
       
        <div className="w-full">
          <div className="flex justify-between pr-8 text-white">
            <label className="font-semibold text-lg "> {name}</label>
            <div>{post}</div>
          </div>
          <div className="flex w-[200px] justify-between">
            <div className="text-gray-400 text-sm">{starting} - {ending}</div>
          </div>
          <div>
            <div className="font-semibold text-[15px] text-gray-400">Description :</div>
            <span className="text-[14px] text-white">
          {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
