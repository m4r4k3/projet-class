import { Axios } from "../../axios";

export default function Education({
  id,
  school,
  certificate,
  end,
  start,
  description,
  setIsSet,
  resetData,
}) {
  const deleteExp = async (e) => {
    resetData();
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.delete(`/api/education/${e.target.id}`)
      .then((res) => res)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setIsSet((prev) => !prev);
  };
  return (
    <div className=" my-5 relative  flex justify-end  w-full px-[10%]  sm:px-[10%]">
             <div className="absolute left-0 flex items-center h-full">
      <button className="button active:bg-green-500 bg-black border border-[#30363D] ">
        <i
          class="fa-solid fa-xmark text-red-500"
          onClick={deleteExp}
          id={id}
        ></i>
      </button>
      </div>
      <div className="w-[90%]  ">
        <div className="flex justify-between pr-5 text-white">
          <label className="font-semibold text-lg ">{school}</label>
          <div>{certificate}</div>
        </div>
        <div className="flex w-[200px] justify-between">
          <div className="text-gray-400 text-sm">
            {start} - {end}
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm text-gray-400">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
