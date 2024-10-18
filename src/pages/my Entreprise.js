import { Axios } from "../axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AboutSk,
  NameEntrSk,
  NameSk,
} from "../components/loading/big-profile-sk";
import { AnimatedDivDark } from "../components/loading/sks";

export default function MyEntreprise() {
  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const id = useSelector((s) => s.store.id);
  const [cities, setCities] = useState();

  useEffect(() => {
    
      Axios.get("api/city")
      .then((res) => res.data)
      .then((res) => setCities(res));

    Axios.get(`/api/entreprise/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [isSet]);

  
  const editSubmit = async () => {
    console.log(edit)
    setData(false);
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.put(`api/entreprise/${id}`, edit).then((res) =>
      console.log(res)
    );
    setIsSet(prev=>!prev)
  };

  return (
    <div className="bg-[url('../image/pattern.png')] w-full flex flex-col sm:flex-row sm:justify-around pt-[70px] min-h-screen">
      <div className="sm:w-[40%] w-full w-[90%] flex flex-col items-end sm:px-3 ">
        <div className=" flex  justify-between items-center  flex-col  mx-auto  sm:bg-[#0D1117] sm:h-[400px] sm:border border-[#30363D] sticky top-[70px] rounded-[5px] w-[35vw] py-[3%]">
          {edit && (
            <button
              onClick={editSubmit}
              className="button active:bg-green-500 absolute bg-black border border-[#30363D] top-2 right-2"
            >
              <i className={`fa-solid fa-pen text-white`}></i>
            </button>
          )}
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://th.bing.com/th/id/OIP.mvDgxxXg6kr3mhytvcawiQHaHa?rs=1&pid=ImgDetMain)] bg-center bg-cover bg-no-repeat rounded-full w-1/2 h-[calc(35vw/2)]"></div>
            {data ? (
              <div className="text-xl font-bold text-white mt-5">
                {" "}
                {data.name}{" "}
              </div>
            ) : (
              <NameEntrSk />
            )}
            <div className="flex w-full mt-3">
              <span className="button bg-black border border-[#30363D] mr-5 ml-[20%]">
                <i className={`fa-solid fa-location-dot text-white`}></i>
              </span>
              {cities && data ? (
               <select
               name="location"
               defaultValue={data.location}
               onChange={(e) => setEdit(prev=>({...prev , location : e.target.value }))}
               className="text-white bg-transparent outline-0  border-gray-500 border max-w-[200px] w-[70%] block rounded pl-1"
             >
               <option
                 className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border  "
                 value={null}
                 selected={ !data.city}
               >
                 -
               </option>
                              {cities && cities.map((e) => (
                  <option
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                    selected={data.city && data.city.name == e.id}
                  >
                    {e.name}
                  </option>
                ))}
               </select>
                
              ) : (
              <AnimatedDivDark w={40} h={30} c="%"/>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[60%] w-[90%] mx-auto sm:mr-1 bg-[#0D1117] border border-[#30363D] rounded h-[350px]">
        <div className="bg-[#0D1117] my-1 mx-auto p-5 rounded-[7px] ">
          <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">
            About
          </div>
          {data ? (
            <textarea
              name="description"
              type="text"
              onInput={(e) => setEdit(prev=>({...prev , description : e.target.value }))}
              defaultValue={data.description}
              className="text-white outline-0 w-full bg-transparent border border-[#30363D] rounded pl-1 h-[200px] resize-none"
            ></textarea>
          ) : (
            <AboutSk />
          )}
        </div>
      </div>
    </div>
  );
}
