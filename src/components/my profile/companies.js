import { Axios } from "../../axios";

export default function Companies({ id, name , starting , ending , description , post , setIsSet , resetData}) {
  const deleteExp = async(e)=>{
    resetData()
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.delete(`/api/experience/${e.target.id}`).then(res=>res).catch((error)=>console.log(error))
    setIsSet(prev=>!prev)

}
  return (
    <div className="px-[10%]  sm:px-[10%] my-5 relative ">
        <div className="absolute left-0 flex items-center h-full">
          <button className="button active:bg-green-500  bg-black border border-[#30363D] ">
        <i class="fa-solid fa-xmark  text-red-500" id={id} onClick={e=>deleteExp(e)}></i>
        </button>
        </div>
        <div className="w-full ">
          <div className="flex justify-between sm:pr-8 text-white">
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
  );
}


