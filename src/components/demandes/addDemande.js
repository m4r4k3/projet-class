import { useEffect, useState } from "react";
import { Axios } from "../../axios";
import LoadingScreen from "../../loading";

export default function AddDemande({ addMethod, setEdit , setData}) {
  const [form, setForm] = useState();
  const [cities, setCities] = useState();
  const [domain, setDomain] = useState();
  const setFormFunc = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  useEffect(() => {
    document.body.classList.add("modal-open");
    Axios.get("api/city")
      .then((res) => res.data)
      .then((res) => setCities(res));
    Axios.get("api/domain")
      .then((res) => res.data)
      .then((res) => setDomain(res));
  }, []);

  const submit = async () => {
    setData(false)
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/demandes", form)
      .then((res) => res)
      .then((data) => console.log(data));
    addMethod(false);
    setEdit((prev) => !prev);
  };
  if (!cities || !domain) {
    return <LoadingScreen />;
  }
  return (
    <div
      className="fixed z-[3] h-screen top-0 w-screen glass menu-glass flex justify-center items-center"
      onClick={() => addMethod(false)}
    >
      <div
        className="w-[500px] h-[500px] bg-[#0D1117] rounded border-[#30363D]  border flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full mb-3 text-xl font-bold p-5  flex justify-center text-white">
          <p>Ajouter Demande</p>
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">Salary</label>
          <input
            type="number"
            onChange={(e) => setFormFunc(e)}
            name="salaire"
            className="text-black outline-0 w-[40%] rounded pl-1"
          />
          <span className="w-[10%] pl-[5%]">DH</span>
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">City</label>
          <select
            className="text-black outline-0 w-[50%] rounded"
            name="location"
            defaultValue={0}
            onChange={(e) => setFormFunc(e)}
          >
            <option key={0} value={null}>
              -
            </option>
            {cities.map((e) => (
              <option
                className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                value={e.id}
              >
                {e.name}
              </option>
            ))}
          </select>
        </div>
       
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">Degree</label>
          <input
            type="text"
            onChange={(e) => setFormFunc(e)}
            name="niveau"
            className="text-black outline-0 w-[50%] rounded pl-1"
          />
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">Post</label>
          <input
            type="text"
            onChange={(e) => setFormFunc(e)}
            name="role"
            className="text-black outline-0 w-[50%] rounded pl-1"
          />
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">experience</label>
          <span className="w-[10%]">+</span>
          <input
            name="experience"
            type="number"
            placeholder="Years"
            onChange={(e) => setFormFunc(e)}
            className="text-black outline-0 w-[40%] rounded pl-1"
          />
        </div>
        <div className="text-white w-full flex justify-center mb-5">
          <label className="w-[100px] inline-block">description</label>
          <textarea
            name="description"
            type="text"
            onChange={(e) => setFormFunc(e)}
            className="text-black outline-0 w-[50%] rounded pl-1 h-[80px]"
          ></textarea>
        </div>
        <div className="my-5">
          <button
            className="text-white rounded border px-8 py-2 border-[#30363D] duration-300 hover:bg-gray-800"
            onClick={submit}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
