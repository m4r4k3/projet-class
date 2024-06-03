import { useState } from "react";
import { Axios } from "../../axios";

export default function EducationAdd ({setEducation, setIsSet ,resetData}){
  const [form , setForm] = useState();
  const setFormFunc = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submit = async ()=>{
    setEducation(false)
    resetData()
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/education", form ) .then(res=>res).then(data=>console.log(data));
    setIsSet(prev=>!prev)
  }
    return (
    <div className="fixed z-[3] h-screen top-[70px] w-screen glass menu-glass flex justify-center items-center" onClick={()=>setEducation(false)}>
      <div className="w-[500px] h-[350px] bg-[#0D1117] rounded border-[#30363D]  border flex flex-col items-center" onClick={e=>e.stopPropagation()}>
        <div className="w-full mb-10 text-xl font-bold p-5 flex justify-center text-white">
          <p>Ajouter education</p>
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">École</label>
          <input
            type="text"
            onChange={(e) => setFormFunc(e)}
            name="school"
            className="text-black outline-0 w-[50%] rounded pl-1"
          />
        </div>
        <div className="text-white w-[350px] flex justify-between mb-5">
          <div className="">
            <label className="w-[100px] inline-block">Commencé </label>
            <input
              type="number"
              min={1900}
              onChange={(e) => setFormFunc(e)}
              name="start"
              max={2100}
              className="text-black outline-0 w-[60px] rounded pl-1"
            />
          </div>
          <div className="">
            <label className="w-[100px] inline-block">terminé</label>
            <input
              type="number"
              name="end"
              onChange={(e) => setFormFunc(e)}
              min={1900}
              className="text-black outline-0 w-[60px] rounded pl-1"
            />
          </div>
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">Diplome</label>
          <input
          name="description"
            type="text"
            onChange={(e) => setFormFunc(e)}
            className="text-black outline-0 w-[50%] rounded pl-1"
          />
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">niveau</label>
          <input
            name="certificate"
            type="text"
            onChange={(e) => setFormFunc(e)}
            className="text-black outline-0 w-[50%] rounded pl-1"
          />
        </div>
        <div className="mb-5">
            <button className="text-white rounded border px-8 py-2 border-[#30363D] duration-300 hover:bg-gray-800" onClick={submit}>
                Ajouter
            </button>
        </div>
      </div>
    </div>)
}