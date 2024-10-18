import { useEffect, useState } from "react";
import { Axios } from "../../axios";
import LoadingScreen from "../../loading";

export default function AddOffre({ addMethod, setEdit , setData}) {
  const [form, setForm] = useState();

  const [cities, setCities] = useState();
  const [contrat, setContrat] = useState();
  const [domain, setDomains] = useState();

  const setFormFunc = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  useEffect(() => {

    Axios.get("api/city")
      .then((res) => res.data)
      .then((res) => setCities(res));

    Axios.get("api/domain")
      .then((res) => res.data)
      .then((res) => setDomains(res));

    Axios.get("api/contrat")
      .then((res) => res.data)
      .then((res) => setContrat(res));
  }, []);

  const submit = async () => {
    setData(false)
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/offres", form)
      .then((res) =>console.log( res))
    addMethod(false);
    setEdit((prev) => !prev);
  };

  return (
    <div
      className="fixed z-[3] h-screen top-0 w-screen glass menu-glass flex justify-center items-center"
      onClick={() => addMethod(false)}
    >
      <div
        className="md:w-[900px] h-[60%] w-[90%] rounded md:h-[400px] bg-[#0D1117] rounded border-[#30363D]  border flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full mb-5 text-xl font-bold p-5 flex justify-center text-white">
          <p>Add Offer</p>
        </div>
        <div className="flex w-full md:flex-row flex-col items-center md:items-start">
          <div className="w-full md:w-1/2 flex flex-col gap-5 mb-5 ">
            <div className="text-white w-full flex justify-center  ">
              <label className="w-[100px] inline-block pr-1">Salary</label>
              <input
                type="number"
                onChange={(e) => setFormFunc(e)}
                name="salary"
                min={1000}
                className="text-black outline-0 w-[40%] rounded pl-1"
              />
              <span className="w-[10%] pl-2">DH</span>
            </div>
            <div className="text-white w-full flex justify-center ">
              <label className="w-[100px] inline-block pr-1">Post</label>
              <input
                type="text"
                onChange={(e) => setFormFunc(e)}
                name="post"
                className="text-black outline-0 w-[50%] rounded pl-1"
              />
            </div>
            <div className="text-white w-full flex justify-center ">
              <label className="w-[100px] inline-block pr-1">Starting</label>
              <div className="w-[50%]">
                <input
                  onChange={(e) => setFormFunc(e)}
                  type="date"
                  name="starting"
                  className="text-black outline-0 w-full w-[30px] rounded pl-1"
                />
              </div>
            </div>
            <div className="text-white w-full flex justify-center ">
              <label className="w-[100px] inline-block pr-1">City</label>
              <select
                className="text-black outline-0 w-[50%] rounded"
                name="city"
                onChange={(e) => setFormFunc(e)}
                defaultValue={-1}
                >
                  <option key={-1} value={-1} disabled>
                    -
                </option>
                {cities && cities.map((e) => (
                  <option
                    key={e.id}
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-white w-full flex justify-center">
              <label className="w-[100px] inline-block pr-1">Domain</label>
              <select
                className="text-black outline-0 w-[50%] rounded"
                name="domain"
                onChange={(e) => setFormFunc(e)}

                defaultValue={-1}
                >
                  <option key={-1} value={-1} disabled>
                    -
                </option>
                {domain && domain.map((e) => (
                  <option
                    key={e.id}
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                  >
                    {e.domain}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div className="text-white w-full flex justify-center ">
              <label className="w-[100px] inline-block pr-1">Contrat</label>
              <select
                className="text-black outline-0 w-[70%] rounded"
                name="contrat"
                onChange={(e) => setFormFunc(e)}
                defaultValue={-1}
              >
                <option key={-1} value={-1} disabled>
                  -
                </option>
                {contrat && contrat.map((e) => (
                  <option
                    key={e.id}
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                  >
                    {e.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">
                Characteristic
              </label>
              <textarea
                name="characteristic"
                type="text"
                onChange={(e) => setFormFunc(e)}
                className="text-black outline-0 w-[70%] rounded pl-1 h-[80px] resize-none"
              ></textarea>
            </div>
        
          </div>
        </div>
        <div className="md:mb-5">
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
